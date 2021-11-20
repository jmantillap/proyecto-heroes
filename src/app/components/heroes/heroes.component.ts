import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit,OnDestroy {

  heroes: Heroe[]=[];

  heroe: Heroe={
    nombre: "Aquaman",
    bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
    img: "assets/img/aquaman.png",
    aparicion: "1941-11-01",
    casa:"DC"
  };

  constructor(private _heroesServices:HeroesService) { }
 
  ngOnInit(): void {
      //this.heroes=this._heroesServices.getHeroes()
      this._heroesServices.getHeroes().subscribe(heroes=>{
          this.heroes=heroes;
      });
    
  }

  agregar(){
    this._heroesServices.addHeroe(this.heroe);
  }

  ngOnDestroy(): void {  
    this._heroesServices.heroes$.unsubscribe();
    this._heroesServices.heroes$=new  Subject(); 
    
  }


}
