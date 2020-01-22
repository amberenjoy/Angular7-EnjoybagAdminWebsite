import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
/*
 * @Author: your name
 * @Date: 2019-07-26 10:25:05
 * @LastEditTime: 2019-10-28 17:13:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Angular\enjoybagAdmin\src\app\pages\website\website.component.spec.ts
 */
import { MatTableModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteComponent } from './website.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('WebsiteComponent', () => {
  let component: WebsiteComponent;
  let fixture: ComponentFixture<WebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatTableModule,
        RouterTestingModule
      ],
      declarations: [WebsiteComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
