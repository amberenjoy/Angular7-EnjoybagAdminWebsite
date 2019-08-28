/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-26 10:25:05
 * @LastEditTime: 2019-08-21 12:35:41
 * @LastEditors: Please set LastEditors
 */
import { Component, OnInit } from '@angular/core';
import { MembershipService } from './../../_services/membership.service';
import { OrderService } from './../../_services/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  memberQty: number;
  memberTodayQty = 0;
  ordersQty: number;
  ordersTodayQty = 0;
  today: string;

  constructor(
    private membershipService: MembershipService,
    private orderService: OrderService
  ) {
    this.today = new Date().toLocaleDateString().replace(/[/]/g, '-');
  }

  ngOnInit() {
    this.getMembershipQty();
    this.getOrdersQty();
  }

  getMembershipQty() {
    this.membershipService.getUsersList().subscribe(res => {
      console.log(res);
      this.memberQty = res.length;
      res.forEach(each => {
        if (each.createAt.split(' ')[0] === this.today) {
          this.memberTodayQty++;
        }
      });
    });
  }

  getOrdersQty() {
    this.orderService.getAllOrders().subscribe(res => {
      console.log(res);
      this.ordersQty = res.length;
      res.forEach(each => {
        if (each.createAt.split(' ')[0] === this.today) {
          this.ordersTodayQty++;
        }
      });
    });
  }
}
