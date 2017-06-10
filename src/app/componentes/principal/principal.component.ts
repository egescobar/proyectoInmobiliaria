import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import {producto} from '../../componentes/alta-producto/altaProducto';
import {altaProductoService} from '../../componentes/alta-producto/alta-producto.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
productos: producto[] =[];

  constructor(
    private ProductosService: altaProductoService,
    private location: Location) { }

  ngOnInit() {
    this.getProductos();
  }

  getProductos(): void {
    this.ProductosService
      .get()
      .then(heroes => this.productos = heroes);
  
  }
}
