/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-26 10:25:05
 * @LastEditTime: 2019-11-04 10:25:23
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

  membersQty={
    todayCount: 0,
    totalCount : 0 
  };
  ordersQty={
    todayCount: 0,
    totalCount : 0 
  };
  constructor(
    private membershipService: MembershipService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.getMembershipQty();
    this.getOrdersQty();
  }

  getMembershipQty() {
    this.membershipService.getUsersQTY().subscribe(res => {
      this.membersQty=res;
    });
  }

  getOrdersQty() {
    this.orderService.getOrdersQty().subscribe(res => {
      this.ordersQty=res;

    });
  }
}
