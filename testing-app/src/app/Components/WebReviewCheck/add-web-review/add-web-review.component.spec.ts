import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWebReviewComponent } from './add-web-review.component';

describe('AddWebReviewComponent', () => {
  let component: AddWebReviewComponent;
  let fixture: ComponentFixture<AddWebReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWebReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWebReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
