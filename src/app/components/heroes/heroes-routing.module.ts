import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { HeroeComponent } from './heroe/heroe.component';
import { HeroesComponent } from './heroes.component';

const heroesRoutes: Routes = [
  {
    path: '',
    // component: HeroesComponent,
    children: [      
      {path: '', component: HeroesComponent},
      {path: 'buscar/:termino', component: BuscadorComponent},
      {path: 'heroe/:id',component: HeroeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
