import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasEncuestaComponent } from './estadisticas-encuesta.component';

describe('EstadisticasEncuestaComponent', () => {
  let component: EstadisticasEncuestaComponent;
  let fixture: ComponentFixture<EstadisticasEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
