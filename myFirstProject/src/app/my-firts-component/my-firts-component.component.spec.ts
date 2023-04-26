import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirtsComponentComponent } from './my-firts-component.component';

describe('MyFirtsComponentComponent', () => {
  let component: MyFirtsComponentComponent;
  let fixture: ComponentFixture<MyFirtsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirtsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFirtsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
