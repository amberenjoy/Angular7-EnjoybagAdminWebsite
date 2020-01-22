/*
 * @Author: your name
 * @Date: 2019-07-29 17:30:35
 * @LastEditTime: 2019-10-28 16:17:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Angular\enjoybagAdmin\src\app\pages\stock-page\stock-page.component.spec.ts
 */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPageComponent } from './stock-page.component';

describe('StockPageComponent', () => {
  let component: StockPageComponent;
  let fixture: ComponentFixture<StockPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [StockPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
