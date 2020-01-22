/*
 * @Author: your name
 * @Date: 2019-07-26 10:20:03
 * @LastEditTime: 2019-10-28 16:16:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Angular\enjoybagAdmin\src\app\app.component.spec.ts
 */
/*
 * @Author: your name
 * @Date: 2019-07-26 10:20:03
 * @LastEditTime: 2019-10-28 16:13:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Angular\enjoybagAdmin\src\app\app.component.spec.ts
 */
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'admin'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('admin');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('h1').textContent).toContain('Welcome to admin!');
  });
});
