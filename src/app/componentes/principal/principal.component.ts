import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import {producto} from '../../componentes/alta-producto/altaProducto';
import {altaProductoService} from '../../componentes/alta-producto/alta-producto.service';

//Filtros
import {FiltroPrecioPipe} from './filtro-precio.pipe';
//import {FiltroPrecioPipe} from './filtro-precio';
import { productoMap } from './productosMap';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
  //pipes: [FiltroPrecioPipe]
})
export class PrincipalComponent implements OnInit {
productos: producto[] =[];
 sliderValue:number = 7500;


productoMap: productoMap;
  productoMaps: productoMap[] =[{lat:-34.6770797,lng:-58.359345899999994,descripcion:"Venta U$S 1.300.000 Almte Solier 2000,Sarandí, Buenos Aires, Argentina",imagen:"./assets/sarandi/1560768602.png"},
                          {lat:-34.6771313,lng:-58.353561600000035,descripcion:"Venta U$S 90.000 Cnel. Brandsen 2400, Sarandí, Buenos Aires, Argentina",imagen:"./assets/sarandi/1568665430.png"},
                          {lat:-34.6861692,lng:-58.33791170000001,descripcion:"Alquiler $ 4.700 Mariano Moreno 4000, Sarandí, Buenos Aires, Argentina",imagen:"./assets/sarandi/1571529224.png"},
                          {lat:-34.6677732,lng:-58.35305779999999,descripcion:"alquiler $ 9.700 Llorente 200, Crucecita, Buenos Aires, Argentina",imagen:"./assets/sarandi/1571810647.png"},
                          {lat:-34.6816134,lng:-58.34090200000003,descripcion:"Venta U$S 1.240.000 Estanislao Zeballos 3600, Sarandí, Buenos Aires, Argentina",imagen:"./assets/sarandi/1572277347.png"},
                          //para wilde
                          {lat:-34.6771313,lng:-58.31421820000003,descripcion:"Venta U$S 87.000 Raquel Español 100, Wilde, Buenos Aires, Argentina",imagen:"./assets/wilde/1571310777.png"},
                          {lat:-34.7066731,lng:-58.314456699999994,descripcion:"Alquiler $ 6.200 Av. Bartolomé Mitre 6500, Wilde, Buenos Aires, Argentina",imagen:"./assets/wilde/1574101568.png"},
                          {lat:-34.7011706,lng:-58.3188356,descripcion:"alquiler $ 6.500 Bahía Blanca 100, Wilde, Buenos Aires, Argentina",imagen:"./assets/wilde/1571773031.png"},
                          {lat:-34.6928393,lng:-58.311958300000015,descripcion:"Venta U$S 1.100.00 San Nicolás 5900, Wilde, Buenos Aires, Argentina, Buenos Aires, Argentina",imagen:"./assets/wilde/1571729435.png"},
                          {lat:-34.71192370000001,lng:-58.325825099999975,descripcion:"Venta U$S 1.400.000 Gral. Arredondo 6247, Wilde, Buenos Aires, Argentina",imagen:"./assets/wilde/1571447007.png"},
                          //para palermo
                          {lat:-34.5900999,lng:-58.4202487,descripcion:"Venta U$S 1.600.000 Francisco Acuña de Figueroa 1800, Palermo, Argentina",imagen:"./assets/palermo/1573414917.png"},
                          {lat:-34.5857476,lng:-58.442160400000034,descripcion:"Alquiler $ 7.700 Ángel Justiniano Carranza 1334, Palermo, Argentina",imagen:"./assets/palermo/1561442312.png"},
                          {lat:-34.596576,lng:-58.429784299999994,descripcion:"alquiler $ 12.700 Julián Álvarez 1000, Palermo, Argentina",imagen:"./assets/palermo/1574850892.png"},
                          {lat:-34.5776044,lng:-58.41253900000004,descripcion:"Venta U$S 1.900.000 San Nicolás 5900, Juan Francisco Seguí 3900, Palermo, Argentina",imagen:"./assets/palermo/1202578900.png"},
                          {lat:-34.5847129,lng:-58.4150214,descripcion:"Venta U$S 200.000 Arenales 3800, Palermo, Argentina",imagen:"./assets/palermo/1572926223.png"},
  ];
  lat: number = -34.6083;
  lng: number = -58.3712;



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

  IngresarPedido()
  {}
}
