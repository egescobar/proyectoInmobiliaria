import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { pedido } from './pedido';

@Injectable()
export class AltaPedidoService{
 private headers = new Headers({'Content-Type': 'application/json'});

    //private productoUrl ='http://desktop-l32rr4d:8080/public/producto'
    private pedidoUrl ='http://escobargraciela.hol.es/public/pedidos'

    constructor(private http: Http) { }

     insert(pedido: pedido): Promise<void> {
    const url = this.pedidoUrl;
    return this.http
      .post(url, JSON.stringify({tipo_pedido:pedido.tipo_pedido, 
                                descripcion:pedido.descripcion,
                               sucursal: pedido.sucursal
                              }), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.pedidoError);
  }

  private pedidoError(error: any): Promise<any> {
    console.error('An error occurred', error.message); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}