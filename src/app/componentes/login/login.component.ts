import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';


import { login } from './login';
import { WsService } from '../../service/ws/ws.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Inmobiliaria El Campito S.A.';
  login: login;
url: string ="http://localhost:8080/public/login";
 /*
 constructor( private router: Router, private ws: WsService) {

    this.user.email = '';
    // console.log(this.user);

  }
*/
  ngOnInit() {
     this.login = new login();
  }

enviar()
  {
    /*
    console.log( this.user );
    this.ws.get( {} )
    .then( data => {
      console.log(data);
      if ( data.token )
      {
        localStorage.setItem('token', data.token);
        this.router.navigateByUrl("/pagina1");
      }
    })
    .catch( e => {
      console.log(e);
    } );
    */
  }


}
