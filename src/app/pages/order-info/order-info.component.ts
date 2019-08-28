/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 10:26:35
 * @LastEditTime: 2019-08-26 15:55:08
 * @LastEditors: Please set LastEditors
 */
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../_services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { faCheck, faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})

export class OrderInfoComponent implements OnInit {

  order: any;
  deliveryForm: FormGroup;
  addDeliveryInfo: boolean;
  cancelOrder: boolean;
  today = new Date().toISOString().substring(0, 10);
  sendEmailMark: boolean;
  faCheck = faCheck;
  faQuestion = faQuestion;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.initOrderInfo(params.id);
    });
    this.deliveryForm = this.formBuilder.group({
      dispatchedNote: null,
      dispatchedDate: null,
      deliveryMethod: null,
      deliveryStatus: null
    });
  }

  initOrderInfo(id) {
    this.orderService.getOrderInfoById(id).subscribe(res => {
      console.log(res);
      this.order = res;
      this.deliveryForm.controls['dispatchedNote'.toString()].setValue(this.order.delivery.dispatchedNote);
      this.deliveryForm.controls['dispatchedDate'.toString()].setValue(this.order.delivery.dispatchedDate);
      this.deliveryForm.controls['deliveryMethod'.toString()].setValue(this.order.delivery.deliveryMethod);
      this.deliveryForm.controls['deliveryStatus'.toString()].setValue(this.order.delivery.deliveryStatus);
      if (!this.order.delivery.dispatchedDate && this.order.delivery.deliveryMethod !== 'Self Pick-Up') {
        this.deliveryForm.controls['dispatchedDate'.toString()].setValue(this.today);
      }
    });
  }

  updateOrder(attribute, information) {
    if (attribute.split('.').length > 1) {
      this.order[attribute.split('.')[0]][attribute.split('.')[1]] = information;
    } else {
      this.order[attribute.split('.')[0]] = information;
    }

    if (attribute === 'payment.paymentStatus' && information === 'Paid') {
      this.order.status = 'Pending';
    } else if (attribute === 'delivery' && (information.deliveryStatus === 'Packed' || information.deliveryStatus === 'Shipping')) {
      this.order.status = 'Processing';
    } else if (attribute === 'delivery' && (information.deliveryStatus === 'Picked Up' || information.deliveryStatus === 'Shipped')) {
      this.order.status = 'Completed';
    }

    const update = {
      attr: attribute,
      data: information,
      status: this.order.status
    };

    this.orderService.updateOrderInfoById(this.order.id, update).subscribe(res => {
      this.order.updateAt = res.updateAt;
    });
  }

  addDeliveryDate() {
    this.updateOrder('delivery', this.deliveryForm.value);
    this.addDeliveryInfo = false;
  }

  onKeydown(e) {
    if (e.key === 'Enter') {
      this.order.notes.push(e.target.value);
      e.target.value = '';
      this.updateOrder('notes', this.order.notes);
    }
  }

  deleteNote(note) {
    const index = this.order.notes.indexOf(note);
    this.order.notes.splice(index, 1);
    this.updateOrder('notes', this.order.notes);
  }

  sendEmail() {
    this.orderService.sendEmail(this.order.id).subscribe(res => {
      console.log(res);
      this.sendEmailMark = true;
    });
  }
}
