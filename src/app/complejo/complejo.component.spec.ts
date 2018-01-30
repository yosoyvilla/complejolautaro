/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComplejoComponent } from './complejo.component';

describe('ComplejoComponent', () => {
  let component: ComplejoComponent;
  let fixture: ComponentFixture<ComplejoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplejoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
