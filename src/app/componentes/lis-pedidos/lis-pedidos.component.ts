import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { lispedido } from './lispedido';
import { listdoService } from './lispedido.service';

@Component({
  selector: 'app-lis-pedidos',
  templateUrl: './lis-pedidos.component.html',
  styleUrls: ['./lis-pedidos.component.css']
})
export class LisPedidosComponent implements OnInit {

lispedido: lispedido;
lispedidos: lispedido[]=[];
selectedPedidos:lispedido;

  constructor(
    private  listdoService: listdoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
     this.lispedido = new lispedido();
    this.lispedido.id_pedido=0;
    this.getListadoPedidos();
  }

 getListadoPedidos(): void {
    this.listdoService
      .get()
      .then(heroes => this.lispedidos = heroes);
  
  }

 delete(lispedido: lispedido): void {
    this.listdoService
      .delete(lispedido.id_pedido)
      .then(() => {
        this.lispedidos = this.lispedidos.filter(h => h !== lispedido);
        if (this.selectedPedidos === lispedido) { this.selectedPedidos = null; }
      });
    };

}
