import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() arreglo: number[]=[];
  @Output() aumentar: EventEmitter<number> = new EventEmitter<number>();
  @Output() disminuir: EventEmitter<number> = new EventEmitter<number>();

  numero:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  aumertarContador(){
    this.numero++;
    this.aumentar.emit(this.numero)
  }

  disminuirContador(){
    this.numero--;
    this.disminuir.emit(this.numero)
  }

}
