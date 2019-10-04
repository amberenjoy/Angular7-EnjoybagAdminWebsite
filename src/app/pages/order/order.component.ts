/*
* @Description: In User Settings Edit
* @Author: your name
* @Date: 2019-08-05 10:53:20
 * @LastEditTime: 2019-10-04 14:59:54
 * @LastEditors: Please set LastEditors
*/
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../_services/order.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  displayedColumns: string[] = ['id', 'status', 'customer', 'payment', 'total', 'delivery', 'createAt'];
  dataSource = [];
  defaultSource = [];
  ordersQty = 0;
  condition: string;
  page = 1;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.orderService.getOrdersQty().subscribe(res => {
      this.ordersQty = res.totalCount;
    });
    this.orderService.getOrdersList(this.page, 50, 'createAt').subscribe(res => {
      this.dataSource = [...res];
      this.defaultSource = [...res];
    });
  }
  loadOrdersByPage(page) {
    this.orderService.getOrdersList(page, 50, 'createAt').subscribe(res => {
      this.dataSource = [...res];
    });
  }
  onKeyPress(event) {
    if (event.charCode === 13) {
      const queryString = event.target.value;
      if (queryString !== '') {
        this.orderService.searchOrders(queryString).subscribe(res => {
          this.dataSource = [...res];
        });
      } else {
        this.dataSource = this.defaultSource;
      }
    }
  }

  filterByCondition(con) {
    this.condition = con;
    this.orderService.getOrdersList(1, 50, con).subscribe(res => {
      this.dataSource = [...res];
    });
  }

  openOrderInfo(orderId) {
    this.router.navigate(['./', orderId], { relativeTo: this.route });
  }

}
