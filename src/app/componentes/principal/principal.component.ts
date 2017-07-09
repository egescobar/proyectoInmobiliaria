import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {ViewProductoComponent} from '../view-producto/view-producto.component';

import {producto} from '../../componentes/alta-producto/altaProducto';
import {altaProductoService} from '../../componentes/alta-producto/alta-producto.service';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';

//Filtros
import {FiltroPrecioPipe} from './filtro-precio.pipe';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
  //pipes: [FiltroPrecioPipe]
})
export class PrincipalComponent implements OnInit, AfterViewInit {
@ViewChild('component') view: ViewProductoComponent;

productos: producto[] =[];
 sliderValue:number = 7500;
productSelected: producto=new producto();


  lat: number = -34.6083;
  lng: number = -58.3712;

vis="hidden";

  constructor(
    private ProductosService: altaProductoService,
    private location: Location) { }

  ngOnInit() {
    this.getProductos();
  }
   ngAfterViewInit () {
    this.view.visible = 'hidden';
  }
visibleContainer(prod:producto)
{
  //this.view.producto=prod;
  
  this.view.show(prod);
}
  getProductos(): void {
    this.ProductosService
      .get()
      .then(heroes =>{ this.productos = heroes;
      });
  
  }

  IngresarPedido()
  {}
}
