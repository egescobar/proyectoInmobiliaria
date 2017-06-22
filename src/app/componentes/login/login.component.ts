import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { login } from './login';
import { WsService } from '../../service/ws/ws.service';
import { AutService } from '../../service/auth/aut.service';
import { sucursalesMap } from './sucursalesMap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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



  constructor(private router: Router, private ws: WsService) {

    this.Aut = new AutService(router);

    if (this.Aut.isLogued()) {
      this.router.navigateByUrl("/principal");
    }
    this.login = new login();
    this.login.mail = '';

  }

  ngOnInit() {


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
