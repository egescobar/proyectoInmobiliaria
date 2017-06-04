import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { rol } from './rol';


import { AutService } from '../../service/auth/aut.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 rol: rol;
  Aut:AutService;
  usuario:string;

  constructor(private router: Router) {
this.Aut = new AutService(router);

   }

  ngOnInit() {
    this.rol = new rol();
    this.rol =this.Aut.getRol();
    console.log(this.Aut.getRol());
    this.usuario = this.Aut.getToken().nombre;
  }
  salir()
  {
    localStorage.setItem('token', null);
    localStorage.setItem('rol', null);
  
    this.router.navigate(['/']);
  }

   IrAltaProducto()
  {
    this.router.navigate(['/alta-producto']);
  }

}
