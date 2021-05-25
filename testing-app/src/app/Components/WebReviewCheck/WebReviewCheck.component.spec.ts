/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WebReviewCheckComponent } from './WebReviewCheck.component';

describe('WebReviewCheckComponent', () => {
  let component: WebReviewCheckComponent;
  let fixture: ComponentFixture<WebReviewCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebReviewCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebReviewCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
