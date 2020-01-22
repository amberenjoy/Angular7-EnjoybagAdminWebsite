import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
/*
 * @Author: your name
 * @Date: 2019-08-06 10:26:35
 * @LastEditTime: 2019-10-29 15:48:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Angular\enjoybagAdmin\src\app\pages\order-info\order-info.component.spec.ts
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterTestingModule } from '@angular/router/testing';
import { OrderInfoComponent } from './order-info.component';
import { FormsModule } from '@angular/forms';

describe('OrderInfoComponent', () => {
  let component: OrderInfoComponent;
  let fixture: ComponentFixture<OrderInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderInfoComponent],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        FontAwesomeModule,
        RouterTestingModule,
        MatInputModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
