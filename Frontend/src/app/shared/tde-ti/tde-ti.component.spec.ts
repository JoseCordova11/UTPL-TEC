import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdeTiComponent } from './tde-ti.component';

describe('TdeTiComponent', () => {
  let component: TdeTiComponent;
  let fixture: ComponentFixture<TdeTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TdeTiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TdeTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
