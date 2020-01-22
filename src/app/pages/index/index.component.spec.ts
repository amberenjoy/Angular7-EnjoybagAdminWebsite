import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
/*
 * @Author: your name
 * @Date: 2019-07-26 10:25:05
 * @LastEditTime: 2019-10-28 17:14:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Angular\enjoybagAdmin\src\app\pages\index\index.component.spec.ts
 */
import { RouterTestingModule } from '@angular/router/testing';
import { SidemenuComponent } from './../sidemenu/sidemenu.component';
import { HeaderComponent } from './../header/header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [IndexComponent, HeaderComponent, SidemenuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
