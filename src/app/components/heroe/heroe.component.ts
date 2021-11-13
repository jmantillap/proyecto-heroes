import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any;

  constructor(private activatedRoute: ActivatedRoute,private _heroesServices:HeroesService) { 
      this.activatedRoute.params.subscribe(params=>{
        this.heroe=_heroesServices.getHeroe(params["id"]);
      })
  }

  ngOnInit(): void {
  }

}
