/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-26 10:25:05
 * @LastEditTime: 2019-08-14 15:57:58
 * @LastEditors: Please set LastEditors
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { MembershipService } from '../_services/membership.service';
import { StockService } from '../_services/stock.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../_helpers/jwt.interceptor';
import { ErrorInterceptor } from '../_helpers/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { UserComponent } from './user/user.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { WebsiteComponent } from './website/website.component';
import { StockComponent } from './stock/stock.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { DesignDevelopmentComponent } from './design-development/design-development.component';
import { StockPageComponent } from './stock-page/stock-page.component';
import { MembershipComponent } from './membership/membership.component';
import { OrderComponent } from './order/order.component';
import { MembershipInfoComponent } from './membership-info/membership-info.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { CouponInfoComponent } from './coupon-info/coupon-info.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SidemenuComponent,
    UserComponent,
    IndexComponent,
    HeaderComponent,
    TaskComponent,
    WebsiteComponent,
    StockComponent,
    SalesReportComponent,
    DesignDevelopmentComponent,
    StockPageComponent,
    MembershipComponent,
    OrderComponent,
    MembershipInfoComponent,
    OrderInfoComponent,
    CouponInfoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
  ],
  providers: [
    MembershipService,
    StockService,
    // fakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
})
export class PagesModule { }
