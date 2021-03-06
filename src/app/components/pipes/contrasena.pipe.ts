import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  
  transform(valor: string, mostrar: boolean): string {
    return mostrar ? '*'.repeat(valor.length) : valor  ;
  }

}
