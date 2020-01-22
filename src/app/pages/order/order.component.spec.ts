import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
/*
 * @Author: your name
 * @Date: 2019-08-05 10:53:20
 * @LastEditTime: 2019-10-29 15:48:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Angular\enjoybagAdmin\src\app\pages\order\order.component.spec.ts
 */
/*
 * @Author: your name
 * @Date: 2019-08-05 10:53:20
 * @LastEditTime: 2019-10-28 17:08:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Angular\enjoybagAdmin\src\app\pages\order\order.component.spec.ts
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponent } from './order.component';
import {
  MatInputModule,
  MatFormFieldModule,
  MatTableModule
} from '@angular/material';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderComponent],
      imports: [
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatInputModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
