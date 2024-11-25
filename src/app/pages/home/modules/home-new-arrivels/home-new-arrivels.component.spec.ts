import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewArrivelsComponent } from './home-new-arrivels.component';

describe('HomeNewArrivelsComponent', () => {
  let component: HomeNewArrivelsComponent;
  let fixture: ComponentFixture<HomeNewArrivelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeNewArrivelsComponent]
    });
    fixture = TestBed.createComponent(HomeNewArrivelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
