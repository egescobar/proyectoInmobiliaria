import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule  } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';



import { WsService }  from './service/ws/ws.service';
import { AutService } from './service/auth/aut.service';
import { VerificarJWTService } from './service/verificar-jwt/verificar-jwt.service';
import { JwtModule } from './jwt/jwt.module';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';


const rutasDeNavegacion: Routes = [
                    { path: '', component: LoginComponent },
                    { path: 'alta-producto', component: AltaProductoComponent },
                    { path: 'principal', component: PrincipalComponent }
                  ];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    PrincipalComponent,
    AltaProductoComponent,
    AltaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    JwtModule,
    RouterModule.forRoot(rutasDeNavegacion)
  ],
  providers: [
    WsService,
    AutService,
    VerificarJWTService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
