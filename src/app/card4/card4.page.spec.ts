import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Card4Page } from './card4.page';

describe('Card4Page', () => {
  let component: Card4Page;
  let fixture: ComponentFixture<Card4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Card4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
