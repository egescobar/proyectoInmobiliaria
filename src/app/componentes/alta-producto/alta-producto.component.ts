import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { producto } from './altaProducto';
import { altaProductoService }  from './alta-producto.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {
producto: producto;
productos: producto[]=[];
selectedProductos:producto;

  constructor( 
    private  productoService: altaProductoService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.producto = new producto();
    this.producto.id_producto=0;
    this.getProductos();
  
  }
GuardarProducto(): void {
    if (this.producto.id_producto == 0) {
      this.productoService.insert(this.producto).then(hero => {
        this.productos.push(this.producto);
        this.selectedProductos = null;
        this.producto = new producto();
      });
    }
    //.then(() => this.goBack());
  }
  
  getProductos(): void {
    this.productoService
      .get()
      .then(heroes => this.productos = heroes);
  
  }


   delete(prod: producto): void {
    this.productoService
      .delete(prod.id_producto)
      
    };
    

  /* delete(prod: producto): void {
    this.productoService
      .delete(prod.id_producto)
      .then(() => {
        this.productos = this.productos.filter(h => h !== prod);
        if (this.selectedProductos === prod) { this.selectedProductos = null; }
      });
   }*/


}
