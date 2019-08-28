/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-26 10:25:05
 * @LastEditTime: 2019-08-19 15:16:50
 * @LastEditors: Please set LastEditors
 */
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebsiteComponent } from './website/website.component';
import { StockPageComponent } from './stock-page/stock-page.component';
import { MembershipComponent } from './membership/membership.component';
import { OrderComponent } from './order/order.component';
import { MembershipInfoComponent } from './membership-info/membership-info.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { CouponInfoComponent } from './coupon-info/coupon-info.component';

const routes: Routes = [
  {
    path: 'admin', component: IndexComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'website', children: [
          {
            path: '', component: WebsiteComponent
          },
          {
            path: 'coupons', component: CouponInfoComponent
          },
          {
            path: ':id', component: CouponInfoComponent
          }
        ]
      },
      {
        path: 'stock', component: StockPageComponent,
      },
      {
        path: 'membership', children: [
          {
            path: '', component: MembershipComponent
          },
          {
            path: ':id', component: MembershipInfoComponent
          }
        ]
      },
      {
        path: 'orders',
        children: [
          {
            path: '', component: OrderComponent,
          },
          {
            path: ':id', component: OrderInfoComponent
          }
        ]
      }
    ]
  },
  {
    path: 'login', component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
