import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { PaisesService } from '../main/paises.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  
  
  darkmodeactive = false;
  isOpen = false;

  constructor(private service: PaisesService){}
  
  ngOnInit() {
   
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
    this.service.ngOnInit();
  }
  
  onChange(newValue: boolean): void{
      console.log(newValue);
  }
  
  click() {
    this.service.toggle();
  }
  
}
