import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdeCompComponent } from './tde-comp.component';

describe('TdeCompComponent', () => {
  let component: TdeCompComponent;
  let fixture: ComponentFixture<TdeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TdeCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TdeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
