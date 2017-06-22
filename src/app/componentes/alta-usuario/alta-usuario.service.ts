import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { usuario } from './usuario';

@Injectable()
export class usuarioService {

  private headers = new Headers({'Content-Type': 'application/json'});
  
  //Ambiente de Produccion
  private usuarioUrl = 'http://escobargraciela.hol.es/public/usuarios';  // URL to web api

  //Ambiente de Desarrollo
  //private usuarioUrl = 'http://desktop-l32rr4d:8080/public/usuarios';  // URL to web api

  constructor(private http: Http) { }


  delete(id: number): Promise<void> {
    const url = this.usuarioUrl;
    return this.http.delete(url, {headers: this.headers,body:{id:id}})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<usuario> {
    return this.http
      .post(this.usuarioUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as usuario)
      .catch(this.handleError);
  }
  //INSERT DEL LOGIN
   insert(usuario: usuario): Promise<void> {
    const url = this.usuarioUrl;
    return this.http
      .post(url, JSON.stringify({nombre:usuario.nombre,
                                clave:usuario.clave,
                              mail:usuario.mail,
                            rol:usuario.rol,
                        sucursal:usuario.sucursal}), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

 get(): Promise<usuario[]> {
  return this.http.get(this.usuarioUrl)
               .toPromise()
               .then(Response => Response.json() as usuario[] )
               .catch(this.handleError);
  }

 

  update(usuario: usuario): Promise<usuario> {
    const url = this.usuarioUrl;
    return this.http
      .put(url, JSON.stringify(usuario), {headers: this.headers})
      .toPromise()
      .then(() => usuario)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error.message); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}