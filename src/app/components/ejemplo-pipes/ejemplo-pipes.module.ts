import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjemploPipesRoutingModule } from './ejemplo-pipes-routing.module';
import { PipesModule } from '../pipes/pipes.module';
import { EjemploPipesComponent } from './ejemplo-pipes.component';


@NgModule({
  declarations: [     
    EjemploPipesComponent   
  ],
  imports: [    
    PipesModule,
    CommonModule,    
    EjemploPipesRoutingModule
  ]
})
export class EjemploPipesModule { }
