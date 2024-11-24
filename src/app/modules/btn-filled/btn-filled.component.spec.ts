import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFilledComponent } from './btn-filled.component';

describe('BtnFilledComponent', () => {
  let component: BtnFilledComponent;
  let fixture: ComponentFixture<BtnFilledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnFilledComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnFilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
