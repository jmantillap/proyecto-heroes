import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { FormularioNgmodelComponent } from './components/formularios/formulario-ngmodel/formulario-ngmodel.component';
import { FormulariosReactivosComponent } from './components/formularios/formularios-reactivos/formularios-reactivos.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {
    path: 'heroes',
    loadChildren: () => import('./components/heroes/heroes.module').then(m => m.HeroesModule)
  },  
  {path:'pipes',component:EjemploPipesComponent},  
  {path:'login',component:LoginComponent},  
  {path: 'form1', component: FormularioNgmodelComponent },
  {path: 'form2', component: FormulariosReactivosComponent },
  {path:'**',pathMatch:'full',redirectTo:"home"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
