import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecommendationComponent } from './home-recommendation.component';

describe('HomeRecommendationComponent', () => {
  let component: HomeRecommendationComponent;
  let fixture: ComponentFixture<HomeRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRecommendationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
