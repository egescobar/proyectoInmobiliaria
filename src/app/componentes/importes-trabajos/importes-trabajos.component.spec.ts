import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportesTrabajosComponent } from './importes-trabajos.component';

describe('ImportesTrabajosComponent', () => {
  let component: ImportesTrabajosComponent;
  let fixture: ComponentFixture<ImportesTrabajosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportesTrabajosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportesTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
