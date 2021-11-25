import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit,OnDestroy {

  formGroup: FormGroup = new FormGroup({});

  heroes: Heroe[]=[];

  heroe: Heroe={
    nombre: "Aquaman",
    bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
    img: "assets/img/aquaman.png",
    aparicion: "1941-11-01",
    casa:"DC"
  };

  constructor(private _heroesServices:HeroesService,private formBuilder: FormBuilder) { }
 
  ngOnInit(): void {
      //this.heroes=this._heroesServices.getHeroes()
      this._heroesServices.getHeroes().subscribe(heroes=>{
          this.heroes=heroes;
      });

      this.buildForm();
    
  }
  buildForm() {    
    this.formGroup = this.formBuilder.group({      
        nombre1: ['', Validators.required],
        bio: ['', Validators.required],
        img:['', Validators.required],
        aparicion:['', Validators.required],
        casa:['', Validators.required],
    });
  } 

  agregar(){
    
    this._heroesServices.addHeroe(this.heroe);
  }

  ngOnDestroy(): void {  
    this._heroesServices.heroes$.unsubscribe();
    this._heroesServices.heroes$=new  Subject(); 
    
  }
  get usuarioNoValido() {
    return this.nombre1.invalid && this.nombre1.touched;
  }

  save(){
      this.heroe.nombre= this.formGroup.value['nombre1']; 
      this.heroe.bio= this.formGroup.value['bio']; 
      this.heroe.img= this.formGroup.value['img']; 
      this.heroe.aparicion= this.formGroup.value['aparicion']; 
      this.heroe.casa= this.formGroup.value['casa']; 
      this._heroesServices.addHeroe(this.heroe);
      this.formGroup.reset({});
  }

  get nombre1(): AbstractControl { 
    return this.formGroup.get('nombre1')! 
  };


}
