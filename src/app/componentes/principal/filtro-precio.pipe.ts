import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPrecio'
})
export class FiltroPrecioPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let [precioMin] = args;
      console.log(args);
    return value.filter(producto => {
    
      return producto.precio >= +precioMin;
    });
  }

}
