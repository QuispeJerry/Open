import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRightComponent } from './my-right.component';

describe('MyRightComponent', () => {
  let component: MyRightComponent;
  let fixture: ComponentFixture<MyRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
