import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'punto'
})
export class PuntoPipe implements PipeTransform {

  transform(valor: string,limite: number): string {
      if(valor.length>limite){
        return valor.substring(0,limite) + "..."; 
      }
    return valor;
  }

}
