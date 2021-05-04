/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoinFlipComponent } from './coin-flip.component';

describe('CoinFlipComponent', () => {
  let component: CoinFlipComponent;
  let fixture: ComponentFixture<CoinFlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinFlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
