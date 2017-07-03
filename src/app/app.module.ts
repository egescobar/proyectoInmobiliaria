import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';

import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { WsService } from './service/ws/ws.service';
import { AutService } from './service/auth/aut.service';
import { VerificarJWTService } from './service/verificar-jwt/verificar-jwt.service';
import { JwtModule } from './service/jwt/jwt.module';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';

import { altaProductoService } from './componentes/alta-producto/alta-producto.service';
import { usuarioService } from './componentes/alta-usuario/alta-usuario.service';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { FiltroPrecioPipe } from './componentes/principal/filtro-precio.pipe';
import { LisPedidosComponent } from './componentes/lis-pedidos/lis-pedidos.component';
import { AltaPedidosComponent } from './componentes/alta-pedidos/alta-pedidos.component';
import { AltaPedidoService } from './componentes/alta-pedidos/pedidoService';
import { listdoService } from './componentes/lis-pedidos/lispedido.service';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';
import { EncuestaService } from './componentes/encuesta/encuesta.service';
import { VentasPorLocalComponent } from './componentes/ventas-por-local/ventas-por-local.component';


const rutasDeNavegacion: Routes = [
  { path: '', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'alta-producto', component: AltaProductoComponent },
  { path: 'alta-usuario', component: AltaUsuarioComponent },
  { path: 'Registrarse', component: RegistrarseComponent },
  { path: 'lispedido', component: LisPedidosComponent },
  { path: 'alta-pedido', component: AltaPedidosComponent },
  { path: 'encuesta', component: EncuestaComponent},
  {path: 'ventasPorLocal',component: VentasPorLocalComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    PrincipalComponent,
    AltaProductoComponent,
    AltaUsuarioComponent,
    RegistrarseComponent,
    FiltroPrecioPipe,
    LisPedidosComponent,
    AltaPedidosComponent,
    EncuestaComponent,
    VentasPorLocalComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    JwtModule,
     ChartsModule,
    RouterModule.forRoot(rutasDeNavegacion),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAObu_s0yUsEgHFo42krFyo-We02oIDvzU',
      libraries: ["places"]
    }),
    ReactiveFormsModule
  ],
  providers: [
    WsService,
    AutService,
    VerificarJWTService,
    altaProductoService,
    usuarioService,
    AltaPedidoService,
    listdoService,
    EncuestaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
