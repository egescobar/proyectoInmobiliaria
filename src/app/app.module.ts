import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule  } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
//import { MenuComponent } from './componentes/menu/menu.component';
import { RouterModule, Routes } from '@angular/router';

const rutasDeNavegacion: Routes = [
                  { path: 'login', component: LoginComponent }
                  
                  ];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(rutasDeNavegacion)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
