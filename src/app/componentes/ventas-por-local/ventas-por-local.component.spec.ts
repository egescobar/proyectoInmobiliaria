import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasPorLocalComponent } from './ventas-por-local.component';

describe('VentasPorLocalComponent', () => {
  let component: VentasPorLocalComponent;
  let fixture: ComponentFixture<VentasPorLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasPorLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasPorLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
