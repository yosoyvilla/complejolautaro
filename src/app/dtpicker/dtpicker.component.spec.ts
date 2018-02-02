import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtpickerComponent } from './dtpicker.component';

describe('DtpickerComponent', () => {
  let component: DtpickerComponent;
  let fixture: ComponentFixture<DtpickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtpickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
