/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainnavComponent } from './mainnav.component';

describe('MainnavComponent', () => {
  let component: MainnavComponent;
  let fixture: ComponentFixture<MainnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
