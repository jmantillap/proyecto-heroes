import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'proyecto-heroes';
    estado:boolean = true;
    arreglo:number[] = [1,2,3,4,5,6,7];
    numero:number=0;

    aumentar($event:any){
      //console.log($event);
      this.numero=$event;
    }
    
    disminuir($event:any){
      //console.log($event);
      this.numero=$event;
    }


}
