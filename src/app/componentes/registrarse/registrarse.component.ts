import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import {usuario} from '../alta-usuario/usuario';
import {usuarioService} from '../alta-usuario/alta-usuario.service';
import { WsService } from '../../service/ws/ws.service';
import { AutService } from '../../service/auth/aut.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
 usuario: usuario;
  usuarios: usuario[] = [];
  selectedUsuarios: usuario;
   url: string ="http://escobargraciela.hol.es/public/login";
    //url: string ="http://desktop-l32rr4d:8080/public/login";

   constructor( private usrService: usuarioService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private ws: WsService) { }

  ngOnInit() {
     this.usuario = new usuario();
    this.usuario.id=0;
    this.usuario.rol="4";
    this.usuario.sucursal="0";

    //this.getUsuario();
  }

   Registrarse(): void {
    if (this.usuario.id == 0) {
      this.usrService.insert(this.usuario).then(hero => {
                this.enviar();
        this.usuario = new usuario();

      });
    }
    
  }

  enviar()
  {
    this.ws.get( this.usuario)
    .then( data => {
      console.log(data.token);
      if ( data.token )
      {

        localStorage.setItem('token', data.token);
        localStorage.setItem('rol', data.rol);
        this.router.navigateByUrl("/principal");
      }
    })
    .catch( e => {
      console.log(e);
    } );
    
  }

}
