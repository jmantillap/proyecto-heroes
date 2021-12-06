import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayusculasPipe } from './mayusculas.pipe'
import { ContrasenaPipe } from './contrasena.pipe';
import { CapitalizarPipe } from './capitalizar.pipe';
import { DomSeguroPipe } from './dom-seguro.pipe';
import { PuntoPipe } from './punto.pipe';


@NgModule({
  declarations: [
    MayusculasPipe,
    ContrasenaPipe,
    CapitalizarPipe,
    DomSeguroPipe,
    PuntoPipe
  ],
  imports: [
    CommonModule,        
  ],
  exports:[
    MayusculasPipe,
    ContrasenaPipe,
    CapitalizarPipe,
    DomSeguroPipe,
    PuntoPipe
  ]
})
export class PipesModule { }
