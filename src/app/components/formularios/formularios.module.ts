import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { FormulariosReactivosComponent } from './formularios-reactivos/formularios-reactivos.component';
import { FormularioNgmodelComponent } from './formulario-ngmodel/formulario-ngmodel.component';


@NgModule({
  declarations: [
    FormulariosReactivosComponent,
    FormularioNgmodelComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormulariosModule { }
