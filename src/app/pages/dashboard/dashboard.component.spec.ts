/*
 * @Author: your name
 * @Date: 2019-07-26 10:25:05
 * @LastEditTime: 2019-10-28 17:12:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Angular\enjoybagAdmin\src\app\pages\dashboard\dashboard.component.spec.ts
 */
import { TaskComponent } from './../task/task.component';
import { SalesReportComponent } from './../sales-report/sales-report.component';
import { StockComponent } from './../stock/stock.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        DashboardComponent,
        StockComponent,
        SalesReportComponent,
        TaskComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
