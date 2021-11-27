import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroeTarjetaComponent } from './heroe-tarjeta/heroe-tarjeta.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { HeroeComponent } from './heroe/heroe.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroeTarjetaComponent,
    BuscadorComponent,
    HeroeComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
