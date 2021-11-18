import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  
  transform(value: string, ...args: any[]): string {
    // console.log(value.toLocaleUpperCase());
    // console.log(args);
    return value.toUpperCase();
  }

}
