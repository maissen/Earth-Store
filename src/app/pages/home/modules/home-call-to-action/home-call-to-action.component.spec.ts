import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCallToActionComponent } from './home-call-to-action.component';

describe('HomeCallToActionComponent', () => {
  let component: HomeCallToActionComponent;
  let fixture: ComponentFixture<HomeCallToActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCallToActionComponent]
    });
    fixture = TestBed.createComponent(HomeCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
