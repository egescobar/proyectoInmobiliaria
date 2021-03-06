import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { producto } from './altaProducto';

@Injectable()
export class altaProductoService{

    private headers = new Headers({'Content-Type': 'application/json'});

    private productoUrl ='http://desktop-l32rr4d:8080/public/producto'
    //private productoUrl ='http://escobargraciela.hol.es/public/producto'

    constructor(private http: Http) { }

     insert(prod: producto): Promise<void> {
    const url = this.productoUrl;
    return this.http
      .post(url, JSON.stringify({tipo_producto:prod.tipo_producto,
                                direccion:prod.direccion,
                                descripcion:prod.descripcion,
                                moneda:prod.moneda,
                                precio:prod.precio,
                                es_oferta: 0,//prod.es_oferta,
                                imagen:prod.imagen,
                                sucursal: prod.sucursal,
                                latitud:prod.latitud,
                                longitud:prod.longitud
                              }), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.productoError);
  }

   get(): Promise<producto[]> {
  return this.http.get(this.productoUrl)
               .toPromise()
               .then(Response => Response.json() as producto[] )
               .catch(this.productoError);
  }

  delete(id_producto: number): Promise<void> {
    const url = this.productoUrl;
    return this.http.delete(url, {headers: this.headers,body:{id_producto:id_producto}})
      .toPromise()
      .then(() => null)
      .catch(this.productoError);
  }

  update(producto: producto): Promise<producto> {
    const url = this.productoUrl;
    return this.http
      .put(url, JSON.stringify(producto), {headers: this.headers})
      .toPromise()
      .then(() => producto)
      .catch(this.productoError);
  }

  private productoError(error: any): Promise<any> {
    console.error('An error occurred', error.message); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}