import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybodyComponent } from './mybody.component';

describe('MybodyComponent', () => {
  let component: MybodyComponent;
  let fixture: ComponentFixture<MybodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MybodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
