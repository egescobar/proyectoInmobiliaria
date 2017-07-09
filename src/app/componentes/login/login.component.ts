import { Component, NgModule, NgZone, OnInit, ViewChild, ElementRef, Directive, Input  } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators,FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


import { login } from './login';
import { WsService } from '../../service/ws/ws.service';
import { AutService } from '../../service/auth/aut.service';
import { sucursalesMap } from './sucursalesMap';

import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { DirectionsMapDirective } from './googlr-map.directive';

import{} from '@types/googlemaps';


declare var google:any;
declare var jQuery:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
   providers : [ GoogleMapsAPIWrapper ]
})
export class LoginComponent implements OnInit {
  title = 'Inmobiliaria El Campito S.A.';
  login: login;
  Aut: AutService;
  url: string = "http://escobargraciela.hol.es/public/login";
  //url: string ="http://desktop-l32rr4d:8080/public/login";

  sucursalesMap: sucursalesMap;
  sucursalesMaps: sucursalesMap[] =[{lat:-34.7043893,lng:-58.3176933,descripcion:"Sucursal Wilde Fabian Onsari 14, Avellaneda",imagen:"./assets/primero.png"},
                          {lat:-34.6806656,lng:-58.34552400000001,descripcion:"Sucursal Sarandi Av. Bartolomé Mitre 3005, Avellaneda",imagen:"./assets/segundo.png"},
                          {lat:-34.5915,lng:-58.4256,descripcion:"Sucursal Palermo Av. Raúl Scalabrini Ortiz 1525, CABA",imagen:"./assets/tercero.png"},
  ];
  lat: number = -34.6083;
  lng: number = -58.3712;

 public latitude: number;
    public longitude: number;
    public destinationInput: FormControl;
    public destinationOutput: FormControl;
    public zoom: number;
    public iconurl: string;
    public mapCustomStyles : any;
    public estimatedTime: any;
    public estimatedDistance: any;

    @ViewChild("pickupInput")
    public pickupInputElementRef: ElementRef;

     @ViewChild("pickupOutput")
    public pickupOutputElementRef: ElementRef;

     @ViewChild("scrollMe")
    private scrollContainer: ElementRef;

    @ViewChild(DirectionsMapDirective) vc: DirectionsMapDirective;

    public origin :any ; // its a example aleatory position
    public destination : any; // its a example aleatory position

  constructor(private router: Router, private ws: WsService,
  private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone,
      private gmapsApi: GoogleMapsAPIWrapper,
      private _elementRef : ElementRef) {

    this.Aut = new AutService(router);

    if (this.Aut.isLogued()) {
      this.router.navigateByUrl("/principal");
    }
    this.login = new login();
    this.login.mail = '';

  }

  ngOnInit() {
//set google maps defaults
      this.zoom = 4;
      this.latitude = 39.8282;
      this.longitude = -98.5795;
      //this.iconurl = '../image/map-icon.png';
      this.iconurl = '../image/map-icon.png';

     // this.mapCustomStyles = this.getMapCusotmStyles();
      //create search FormControl
      this.destinationInput = new FormControl();
      this.destinationOutput = new FormControl();
      //set current position
      this.setCurrentPosition();
      
      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
          let autocompleteInput = new google.maps.places.Autocomplete(this.pickupInputElementRef.nativeElement, {
            types: ["address"]
          });

          let autocompleteOutput = new google.maps.places.Autocomplete(this.pickupOutputElementRef.nativeElement, {
            types: ["address"]
          });
        
                 this.setupPlaceChangedListener(autocompleteInput, 'ORG');
                this.setupPlaceChangedListener(autocompleteOutput, 'DES');
      });

  }
 private setupPlaceChangedListener(autocomplete: any, mode: any ) {
      autocomplete.addListener("place_changed", () => {
            this.ngZone.run(() => {
              //get the place result
              let place: google.maps.places.PlaceResult = autocomplete.getPlace();
              //verify result
              if (place.geometry === undefined) {
                return;
              }
              if (mode === 'ORG') {
                  this.vc.origin = { longitude: place.geometry.location.lng(), latitude: place.geometry.location.lat() }; 
                  this.vc.originPlaceId = place.place_id;
              } else {
                  this.vc.destination = { longitude: place.geometry.location.lng(), latitude: place.geometry.location.lat() }; // its a example aleatory position
                  this.vc.destinationPlaceId = place.place_id;
              }
  
              if(this.vc.directionsDisplay === undefined){ this.mapsAPILoader.load().then(() => { 
                    this.vc.directionsDisplay = new google.maps.DirectionsRenderer;
                  }); 
            }
          
              //Update the directions
              this.vc.updateDirections();
              this.zoom = 12;
            });

         });

    }

    getDistanceAndDuration(){
      this.estimatedTime = this.vc.estimatedTime;
      this.estimatedDistance = this.vc.estimatedDistance;
    }

    scrollToBottom(): void {
      jQuery('html, body').animate({ scrollTop: jQuery(document).height() }, 3000);
    }
    private setPickUpLocation( place:any ) {
      //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
            //set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
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

    private getMapCusotmStyles() {
      // Write your Google Map Custom Style Code Here.
    }



  enviar() {
    this.ws.get(this.login)
      .then(data => {
        console.log(data.token);
        if (data.token) {

          localStorage.setItem('token', data.token);
          localStorage.setItem('rol', data.rol);
          this.router.navigateByUrl("/principal");
        }
      })
      .catch(e => {
        console.log(e);
      });

  }

  Registrarse() {
    this.router.navigateByUrl("/Registrarse");
  }

  IngresarAdministrador() {
    this.login.mail = "admin@admin.com";
    this.login.clave = "123";
    this.enviar();
  }

  IngresarEncargado() {
    this.login.mail = "encargado1@encargado1.com";
    this.login.clave = "456";
    this.enviar();
  }

  IngresarEmpleado() {
    this.login.mail = "empleado1@empleado1.com";
    this.login.clave = "123";
    this.enviar();
  }

  IngresarCliente() {
    this.login.mail = "cliente@cliente.com";
    this.login.clave = "12345";
    this.enviar();
  }

}
