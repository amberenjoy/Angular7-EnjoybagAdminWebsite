import { HttpClientTestingModule } from '@angular/common/http/testing';
/*
 * @Author: your name
 * @Date: 2019-08-06 10:26:16
 * @LastEditTime: 2019-10-28 17:11:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Angular\enjoybagAdmin\src\app\pages\membership-info\membership-info.component.spec.ts
 */
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipInfoComponent } from './membership-info.component';

describe('MembershipInfoComponent', () => {
  let component: MembershipInfoComponent;
  let fixture: ComponentFixture<MembershipInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [MembershipInfoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
