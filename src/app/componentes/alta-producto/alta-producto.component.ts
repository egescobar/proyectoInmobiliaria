import { Component, OnInit ,NgZone,NgModule,ViewChild,ElementRef } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { producto } from './altaProducto';
import { altaProductoService }  from './alta-producto.service';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

import { FileHolder } from 'angular2-image-upload/src/image-upload/image-upload.component';

import { RotatingPlaneComponent } from 'ng2-spin-kit/app/spinner/rotating-plane.component';
import {WanderingCubesComponent} from '../../wandering-cubes';

import {} from '@types/googlemaps';
declare var google: any;

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})

export class AltaProductoComponent implements OnInit {
producto: producto;
productos: producto[]=[];
selectedProductos:producto;
spiner:string;

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor( 
    private  productoService: altaProductoService,
    private route: ActivatedRoute,
    private location: Location,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.producto = new producto();
    this.producto.id_producto=0;
    this.getProductos();
    
    this.spiner='visible';
    console.log('App initialized!');
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
    
    //create search FormControl
    this.searchControl = new FormControl();
    
    //set current position
    this.setCurrentPosition();
    
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          
          this.longitude = place.geometry.location.lng();
          console.log(place.geometry.location.lng());
          this.zoom = 12;
        });
      });
    });
  
  }
 private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

GuardarProducto(): void {
    if (this.producto.id_producto == 0) {
      console.log(this.producto);
      this.productoService.insert(this.producto).then(hero => {
        this.productos.push(this.producto);
        this.selectedProductos = null;
        this.producto = new producto();
      });
    }
    else
    {
      this.productoService.update(this.producto).then(hero=>{
        this.producto = new producto();
          });
    }
    //.then(() => this.goBack());
  }

  getProductos(): void {
    this.productoService
      .get()
      .then(heroes => {this.productos = heroes;
      this.spiner='hiden';});
  
  }


   delete(prod: producto): void {
    this.productoService
      .delete(prod.id_producto)
      .then(() => {
        this.productos = this.productos.filter(h => h !== prod);
        if (this.selectedProductos === prod) { this.selectedProductos = null; }
      });
    };
    
    modificar(producto:producto):void{
      this.producto.id_producto =producto.id_producto;
      this.producto.tipo_producto =producto.tipo_producto;
      this.producto.direccion =producto.direccion;
      this.producto.descripcion =producto.descripcion;
      this.producto.sucursal =producto.sucursal;
      this.producto.moneda =producto.moneda;
      this.producto.precio =producto.precio;
      this.producto.es_oferta =producto.es_oferta;
      this.producto.imagen =producto.imagen;
      this.producto.sucursal =producto.sucursal;

    }
imageFinishedUploading(file: FileHolder) {
 this.producto.imagen.push(file.serverResponse["_body"]);
 console.log(this.producto.imagen);
}
uploadStateChange(state: boolean) {
  console.log(JSON.stringify(state));
}

}
