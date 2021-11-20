import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pais } from 'src/app/interfaces/pais.interface';
import { PaisService } from 'src/app/services/pais.service';


@Component({
  selector: 'app-formulario-ngmodel',
  templateUrl: './formulario-ngmodel.component.html',
  styleUrls: ['./formulario-ngmodel.component.css']
})
export class FormularioNgmodelComponent implements OnInit {

  
  pais: Pais[] = [];
  valorPais: string='';

  constructor(private _paisService: PaisService) { }

  ngOnInit(): void {
    this._paisService.getPaises().subscribe(paises => {
      this.pais = paises;
      console.log(paises);
      this.pais.unshift({
        nombre: '[Selecciones País]',
        codigo: ''
      })
    })
  }

  guardar(form: NgForm) {
    if (form.valid) {
      sessionStorage.setItem('form', JSON.stringify(form.value));
    }
  }

  getPersona() {
    let persona: string | any  = sessionStorage.getItem('form');
    console.log(JSON.parse(persona));
  }

}
