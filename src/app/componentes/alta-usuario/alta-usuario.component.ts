import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {usuario} from './usuario';
import {rol} from '../menu/rol';
import {usuarioService} from './alta-usuario.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { AutService } from '../../service/auth/aut.service';

import * as jsPDF from 'jspdf'

import { RotatingPlaneComponent } from 'ng2-spin-kit/app/spinner/rotating-plane.component';
import {WanderingCubesComponent} from '../../wandering-cubes';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})



export class AltaUsuarioComponent implements OnInit {
  usuario: usuario;
  usuarios: usuario[] = [];
  selectedUsuarios: usuario;
  table:any;

    Aut:AutService;
  rol: rol;

spiner:string;

  constructor( private usrService: usuarioService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) {
      this.Aut = new AutService(router);
     }

  ngOnInit(): any {
    this.usuario = new usuario();
    this.usuario.id=0;
    this.rol = new rol();
    this.rol =this.Aut.getRol();
    this.getUsuario();
    this.spiner='visible';
    console.log('App initialized!');
  }




  getUsuario(): void {
    this.usrService
      .get()
      .then(heroes => {this.usuarios = heroes;
        this.spiner='hiden';});

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

    exportExcel() {
    var data = this.usuarios;
    var options = {fieldSeparator:';',
                    showLabels: true};
    new Angular2Csv(data, 'listadoUsuarios',options);
  }

exportPDF() {
    var data = this.usuarios;
var specialElementHandlers = {
	'#editor': function(element, renderer){
		return true;
	}
};

 var doc = new jsPDF();
        doc.text(20, 20, 'Listado de Usuarios');
   doc.fromHTML(document.querySelector('#table'), 20, 30, {
	'width': 250, 
	'elementHandlers': specialElementHandlers
});

        doc.addPage();
        doc.text(20, 20, 'Do you like that?');

        // Save the PDF
        doc.save('ListadoDeUsuarios.pdf');
  }
}
