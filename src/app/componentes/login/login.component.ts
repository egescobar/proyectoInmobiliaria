import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';


import { login } from './login';
import { WsService } from '../../service/ws/ws.service';
import { AutService } from '../../service/auth/aut.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Inmobiliaria El Campito S.A.';
  login: login;
  Aut:AutService;
  url: string ="http://desktop-l32rr4d:8080/public/login";
 
 constructor( private router: Router, private ws: WsService) {
   
   this.Aut = new AutService(router);
      
  if(this.Aut.isLogued())
  {
 this.router.navigateByUrl("/principal");
  }
    this.login = new login();
    this.login.mail = '';
  
  }

  ngOnInit() {

    
  }

enviar()
  {
    this.ws.get( this.login )
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
