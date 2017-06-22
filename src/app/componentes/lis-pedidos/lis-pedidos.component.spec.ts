import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisPedidosComponent } from './lis-pedidos.component';

describe('LisPedidosComponent', () => {
  let component: LisPedidosComponent;
  let fixture: ComponentFixture<LisPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
