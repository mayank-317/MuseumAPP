import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Card3Page } from './card3.page';

describe('Card3Page', () => {
  let component: Card3Page;
  let fixture: ComponentFixture<Card3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Card3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
