import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindbComponent } from './maindb.component';

describe('MaindbComponent', () => {
  let component: MaindbComponent;
  let fixture: ComponentFixture<MaindbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaindbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
