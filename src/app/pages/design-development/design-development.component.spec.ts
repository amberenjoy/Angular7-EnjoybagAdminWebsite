import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignDevelopmentComponent } from './design-development.component';

describe('DesignDevelopmentComponent', () => {
  let component: DesignDevelopmentComponent;
  let fixture: ComponentFixture<DesignDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
