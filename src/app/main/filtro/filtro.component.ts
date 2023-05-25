import { Component, EventEmitter, Output } from '@angular/core';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {

  filtro_open = false;
  isOpen = false;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private service: PaisesService ){}

  ngOnInit(){
    this.service.change.subscribe(isOpen => {
      console.log(isOpen);
      
      this.isOpen = isOpen;
      
    });
    const datot = localStorage.getItem('modo_oscuro');
    if(datot == "true"){
      this.isOpen = true
    }else{
      this.isOpen = false
    }
  }
  filtrado_regiones(){

    this.filtro_open = !this.filtro_open;

  }
  region(region: string){
    this.newItemEvent.emit(region);
  }
}