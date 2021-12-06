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
  isEditar:boolean=false;
  indexEditar:number=0;

  heroes: Heroe[]=[];

  heroe: Heroe={
    nombre: "Aquaman",
    bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
    img: "assets/img/aquaman.png",
    aparicion: "1941-11-01",
    casa:"DC"
  };

  heroe1: Heroe={
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
          this.heroes=[...heroes];
          console.log(this.heroes);
          //cargar en el localstorage          
      });     
      this.buildForm();
    
  }
  buildForm() {    
    this.formGroup = this.formBuilder.group({      
        nombre: ['', Validators.required],
        bio: ['', Validators.required],
        img:['', Validators.required],
        aparicion:['', Validators.required],
        casa:['', Validators.required],
    });
  } 
  // cargarHeroe(){
  //   let heroeString: string | any  = sessionStorage.getItem('form');
  //   console.log(JSON.parse(heroeString));
  // }

  agregar(){    
    this._heroesServices.addHeroe(this.heroe1);
  }

  ngOnDestroy(): void {  
    this._heroesServices.heroes$.unsubscribe();
    this._heroesServices.heroes$=new  Subject(); 
    
  }
  get usuarioNoValido() {
    return this.nombre.invalid && this.nombre.touched;
  }

  save(){
      this.heroe= this.formGroup.value
      /* this.heroe.nombre= this.formGroup.value['nombre1']; 
      this.heroe.bio= this.formGroup.value['bio'];      this.heroe.img= this.formGroup.value['img']; 
      this.heroe.aparicion= this.formGroup.value['aparicion'];       this.heroe.casa= this.formGroup.value['casa']; 
      */
      if(!this.isEditar){
        this._heroesServices.addHeroe(this.heroe);
      }else{
        this._heroesServices.editHeroe(this.heroe,this.indexEditar);
        this.isEditar=false;
      }
      
      this.heroe={} as Heroe;
      this.formGroup.reset({});
  }

  get nombre(): AbstractControl { 
    return this.formGroup.get('nombre')! 
  };

  editar(index:number){
    console.log(index);
    this.heroe={...this.heroes[index]};
    this.formGroup.setValue({
      nombre: this.heroe.nombre,
      bio: this.heroe.bio,
      img:this.heroe.img,
      aparicion:this.heroe.aparicion,
      casa:this.heroe.nombre,
    })    
    this.indexEditar=index;
    this.isEditar=true;
  }


}
