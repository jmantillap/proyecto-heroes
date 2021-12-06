import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioNgmodelComponent } from './formulario-ngmodel/formulario-ngmodel.component';
import { FormulariosReactivosComponent } from './formularios-reactivos/formularios-reactivos.component';

const routes: Routes = [
  {
    path: '',    
    children: [            
      {path: 'form1', component: FormularioNgmodelComponent},
      {path: 'form2',component: FormulariosReactivosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulariosRoutingModule { }
