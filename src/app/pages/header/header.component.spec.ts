/*
 * @Author: your name
 * @Date: 2019-07-26 10:25:05
 * @LastEditTime: 2019-10-30 16:50:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Angular\enjoybagAdmin\src\app\pages\header\header.component.spec.ts
 */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AuthenticationService } from './../../_services/authentication.service';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { of, BehaviorSubject } from 'rxjs';

const authenticationServiceStud = {
  currentUserValue() {
    const currentUser = {
      id: '5d3ffe5b26dc68523c2e0b0e',
      username: 'Amber Zhang',
      message: 'Authentication successful!',
      token:
        // tslint:disable-next-line:max-line-length
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZDNmZmU1YjI2ZGM2ODUyM2MyZTBiMGUiLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE1NzIzMzc5MTYsImV4cCI6MTU3MjQyNDMxNn0.dvNCw3xs88nm-dCaZmN9wDpFCeKMyvfN0D0aWe_n298'
    };
    return of(currentUser);
  }
};

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [HeaderComponent],
      providers: [
        { provide: AuthenticationService, useValue: authenticationServiceStud }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display logged-in user name', () => {
    const loggedInUser: HTMLElement = fixture.debugElement.query(
      By.css('.user')
    ).nativeElement;
    expect(loggedInUser.textContent).toEqual('Amber Zhang');
  });
});
