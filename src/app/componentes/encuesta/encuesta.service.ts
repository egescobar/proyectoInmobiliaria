import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import { encuesta } from './encuesta';

@Injectable()
export class EncuestaService {

  private headers = new Headers({'Content-Type': 'application/json'});
  
  //Ambiente de Produccion
  private encuestaUrl = 'http://escobargraciela.hol.es/public/encuesta';  // URL to web api

  //Ambiente de Desarrollo
  //private usuarioUrl = 'http://desktop-l32rr4d:8080/public/usuarios';  // URL to web api

  constructor(private http: Http) { }


insert(encuesta: encuesta): Promise<void> {
    const url = this.encuestaUrl;
    return this.http
      .post(url, JSON.stringify({como_nos_conocio:encuesta.como_nos_conocio,
                                motivos_que_nos_contrato:encuesta.motivos_que_nos_contrato,
                              servicio_que_contrato:encuesta.servicio_que_contrato,
                            atencion_del_personal:encuesta.atencion_del_personal,
                             mejoramiento_servicio:encuesta.mejoramiento_servicio,
                        comentarios:encuesta.comentarios}), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.encuestaError);
  }

 get(): Promise<encuesta[]> {
  return this.http.get(this.encuestaUrl)
               .toPromise()
               .then(Response => Response.json() as encuesta[] )
               .catch(this.encuestaError);
  }

private encuestaError(error: any): Promise<any> {
    console.error('An error occurred', error.message); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}