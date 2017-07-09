import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { pedido } from './pedido';
import { AltaPedidoService }  from './pedidoService';

@Component({
  selector: 'app-pedidos',
  templateUrl: './alta-pedidos.component.html',
  styleUrls: ['./alta-pedidos.component.css']
})
export class AltaPedidosComponent implements OnInit {
pedido: pedido;
pedidos: pedido[]=[];
selectedPedidos:pedido;


  constructor(
    private  PedidoService: AltaPedidoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
     this.pedido = new pedido();
    this.pedido.id_pedido=0;
     //this.getPedido();
  }


EnviarPedido(): void {
    if (this.pedido.id_pedido == 0) {
      this.PedidoService.insert(this.pedido).then(hero => {
        this.pedidos.push(this.pedido);
        this.selectedPedidos = null;
        this.pedido = new pedido();
      });
        location.reload(true);
    }
    //.then(() => this.goBack());
  }

  /*getPedido(): void {
    this.PedidoService
      .get()
      .then(heroes => this.pedidos = heroes);
  
  }*/

}
