import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiCompComponent } from './ti-comp.component';

describe('TiCompComponent', () => {
  let component: TiCompComponent;
  let fixture: ComponentFixture<TiCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
