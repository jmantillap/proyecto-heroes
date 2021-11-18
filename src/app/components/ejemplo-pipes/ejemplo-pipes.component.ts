import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.css']
})
export class EjemploPipesComponent implements OnInit {

  nombre : string ='Javier Mantilla';
  PI: number= Math.PI;
  porcentaje: number = 0.235;
  salario: number= 1234.5
  fecha: Date = new Date();
  contrasena:string='12345678';
  activar:boolean=false;
  nombre2:string='JaviEr ManTilla PorTilla'
  video:string= 'https://www.youtube.com/embed/qBtB-xcJp4c';
  idioma:string='fr';

  valorPromesa= new Promise<String>((resolve)=>{
      setTimeout(() => {
          resolve('Llego la data')
      }, 5000);
  });

  heroe={
    nombre:'Logan',
    edad:1000,    
  }

  constructor() { }

  ngOnInit(): void {
  }


  // cambiar():void{
  //   this.activar=(this.activar==true) ? false : true;
  // }

}
