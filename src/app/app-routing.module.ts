import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FormularioNgmodelComponent } from './components/formularios/formulario-ngmodel/formulario-ngmodel.component';
// import { FormulariosReactivosComponent } from './components/formularios/formularios-reactivos/formularios-reactivos.component';
import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},  
  { path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)  },  
  { path: 'heroes', loadChildren: () => import('./components/heroes/heroes.module').then(m => m.HeroesModule)  },    
  { path: 'pipes', loadChildren: () => import('./components/ejemplo-pipes/ejemplo-pipes.module').then(m => m.EjemploPipesModule)  },  
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)  },    
  { path: 'formulario', loadChildren: () => import('./components/formularios/formularios.module').then(m => m.FormulariosModule)  },    
  {path:'**',pathMatch:'full',redirectTo:"home"},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
