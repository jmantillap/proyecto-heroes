import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {


  @Input() heroe: any={};

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  @Input() index:number | undefined=0;  

  verHeroe(){
    this.router.navigate(['/heroe',this.index])
  }

}
