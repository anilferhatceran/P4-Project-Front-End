/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NameGenComponent } from './name-gen.component';

describe('NameGenComponent', () => {
  let component: NameGenComponent;
  let fixture: ComponentFixture<NameGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
