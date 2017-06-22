import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { lispedido } from './lispedido';

@Injectable()
export class listdoService{

private headers = new Headers({'Content-Type': 'application/json'});

    //private productoUrl ='http://desktop-l32rr4d:8080/public/producto'
    private pedidoUrl ='http://escobargraciela.hol.es/public/pedidos'

    constructor(private http: Http) { }

    get(): Promise<lispedido[]> {
  return this.http.get(this.pedidoUrl)
               .toPromise()
               .then(Response => Response.json() as lispedido[] )
               .catch(this.pedidoError);
  }

   private pedidoError(error: any): Promise<any> {
    console.error('An error occurred', error.message); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  delete(id_pedido: number): Promise<void> {
    const url = this.pedidoUrl;
    return this.http.delete(url, {headers: this.headers,body:{id_pedido:id_pedido}})
      .toPromise()
      .then(() => null)
      .catch(this.pedidoError);
  }

}