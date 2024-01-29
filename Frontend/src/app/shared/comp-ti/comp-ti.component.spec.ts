import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTiComponent } from './comp-ti.component';

describe('CompTiComponent', () => {
  let component: CompTiComponent;
  let fixture: ComponentFixture<CompTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompTiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
