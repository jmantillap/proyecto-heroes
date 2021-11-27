import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {


  @Input() heroe: Heroe | any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  @Input() index:number | undefined=0;  

  verHeroe(){
    console.log('Entro');
    this.router.navigate(['/heroes/heroe/',this.index])
  }

}
