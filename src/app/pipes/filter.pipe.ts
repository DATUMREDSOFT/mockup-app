import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(listaDeDatos: any[], textoBusqueda: string) {

    if (!listaDeDatos || !textoBusqueda) {
      return listaDeDatos;
    }
    return listaDeDatos.filter(item => JSON.stringify(item).toLowerCase().indexOf(textoBusqueda.toLowerCase()) !== -1)

  }
}
