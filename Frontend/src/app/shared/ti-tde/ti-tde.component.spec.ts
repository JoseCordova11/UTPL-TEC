import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiTdeComponent } from './ti-tde.component';

describe('TiTdeComponent', () => {
  let component: TiTdeComponent;
  let fixture: ComponentFixture<TiTdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiTdeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiTdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
