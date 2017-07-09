import { Component, OnInit,Input,NgModule,OnChanges,SimpleChange  } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {producto} from '../../componentes/alta-producto/altaProducto';
@Component({
  selector: 'view-producto',
  templateUrl: './view-producto.component.html',
  styleUrls: ['./view-producto.component.css']
})
export class ViewProductoComponent implements OnInit  {
  @Input()  producto: producto;
  @Input()  visible: string;
 url ="http://desktop-l32rr4d:8080/public/fotos/";
carrouselVisible:string;
zoom:string="zoom-in";

  constructor() { }

  ngOnInit() {
    this.producto= new producto();
  }
  ngOnChanges(changes: SimpleChange){

  }

  close()
  {
    this.visible="false";
  }
   show(prod:producto)
  {
    this.visible="true";
    console.log(prod);
    this.producto=prod;
    this.carrouselVisible="hideCarrousel";
  }
  
  showCarrousel()
  {
    if(this.carrouselVisible!="showCarrousel")
    {
      this.carrouselVisible="showCarrousel"
      this.zoom="zoom-out";
    }
    else
    {
       this.carrouselVisible="hideCarrousel"
       this.zoom="zoom-in";
    }
    
  }
  hideCarrousel()
  {
    this.carrouselVisible="hideCarrousel"
      this.zoom="zoom-out";
  }
}
