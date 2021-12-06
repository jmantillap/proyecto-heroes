import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {


  @Input() heroe: Heroe | any;

  @Output() heroeEditar: EventEmitter<number>= new EventEmitter() ;

  //heroeEditar: Heroe={} as Heroe

  constructor(private router:Router,private _heroesServices:HeroesService) { }

  ngOnInit(): void {
  }

  @Input() index:number | undefined=0;  

  verHeroe(){
    console.log('Entro');
    this.router.navigate(['/heroes/heroe/',this.index])
  }

  // editar(){
  //   this.heroeEditar=this._heroesServices.getHeroe(<number>this.index)
  //   //sessionStorage.setItem('heroe', JSON.stringify(this.heroeEditar));
  //   //this.router.navigate(['/heroes'])
  // }

}
