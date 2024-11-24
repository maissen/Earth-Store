import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGridContainerComponent } from './products-grid-container.component';

describe('ProductsGridContainerComponent', () => {
  let component: ProductsGridContainerComponent;
  let fixture: ComponentFixture<ProductsGridContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsGridContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
