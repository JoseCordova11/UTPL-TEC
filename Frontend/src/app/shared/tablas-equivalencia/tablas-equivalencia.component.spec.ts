import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasEquivalenciaComponent } from './tablas-equivalencia.component';

describe('TablasEquivalenciaComponent', () => {
  let component: TablasEquivalenciaComponent;
  let fixture: ComponentFixture<TablasEquivalenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablasEquivalenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablasEquivalenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
