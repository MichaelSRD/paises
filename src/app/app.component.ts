import { Component } from '@angular/core';
import { PaisesService } from './main/paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paises';
  isOpen = false;
  cambio!:any;
   constructor(private service: PaisesService ){}
  ngOnInit() {
    this.service.change.subscribe(isOpen => {
      console.log(isOpen);
      
      this.isOpen = isOpen;
      this.cambio = isOpen
      
    });
    const datot = localStorage.getItem('modo_oscuro');
    if(datot == "true"){
      this.isOpen = true
    }else{
      this.isOpen = false
    }
  }
}
