import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {usuario} from './usuario';
import {usuarioService} from './alta-usuario.service';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {
  usuario: usuario;
  usuarios: usuario[] = [];
  selectedUsuarios: usuario;

  constructor( private usrService: usuarioService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.usuario = new usuario();
    this.usuario.id=0;
    this.getUsuario();
  }

  getUsuario(): void {
    this.usrService
      .get()
      .then(heroes => this.usuarios = heroes);
  }

  Registrarse(): void {
    if (this.usuario.id == 0) {
      this.usrService.insert(this.usuario).then(hero => {
        this.usuarios.push(this.usuario);
        this.selectedUsuarios = null;
        this.usuario = new usuario();
      });
    }
    else
    {
      this.usrService.update(this.usuario).then(hero=>{
         this.selectedUsuarios = null;
        this.usuario = new usuario();
      });
    }
  }

  delete(usuario: usuario): void {
    this.usrService
      .delete(usuario.id)
      .then(() => {
        this.usuarios = this.usuarios.filter(h => h !== usuario);
        if (this.selectedUsuarios === usuario) { this.selectedUsuarios = null; }
      });
    };

    modify(usuario:usuario):void{
      this.usuario.id =usuario.id;
      this.usuario.nombre =usuario.nombre;
      this.usuario.clave =usuario.clave;
      this.usuario.mail =usuario.mail;
      this.usuario.sucursal =usuario.sucursal;
      this.usuario.rol =usuario.rol;

    }

}
