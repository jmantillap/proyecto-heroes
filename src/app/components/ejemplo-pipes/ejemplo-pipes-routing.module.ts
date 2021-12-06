import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemploPipesComponent } from './ejemplo-pipes.component';

const routes: Routes = [{
  path: '',    
    children: [      
      {path: '', component: EjemploPipesComponent},      
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjemploPipesRoutingModule { }
