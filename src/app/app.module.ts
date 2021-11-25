//Angulra
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioNgmodelComponent } from './components/formularios/formulario-ngmodel/formulario-ngmodel.component';
import { FormulariosReactivosComponent } from './components/formularios/formularios-reactivos/formularios-reactivos.component';

//Services
import { HeroesService } from './services/heroes.service';
import { UsuariosService } from './services/usuarios.service';
import { PaisService } from './services/pais.service';
//pipes
import { MayusculasPipe } from './components/pipes/mayusculas.pipe';
import { ContrasenaPipe } from './components/pipes/contrasena.pipe';
import { CapitalizarPipe } from './components/pipes/capitalizar.pipe';
import { DomSeguroPipe } from './components/pipes/dom-seguro.pipe';
import { PuntoPipe } from './components/pipes/punto.pipe';

//
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';

registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
    NavbarComponent,
    HeroeComponent,
    EjemploPipesComponent,
    MayusculasPipe,
    ContrasenaPipe,
    CapitalizarPipe,
    DomSeguroPipe,
    LoginComponent,
    PuntoPipe,
    FormularioNgmodelComponent,
    FormulariosReactivosComponent,       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeroesService,UsuariosService,PaisService,
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }, 
  ],//servicios , inspectores
  bootstrap: [AppComponent] //Componente inicial
})
export class AppModule { }
