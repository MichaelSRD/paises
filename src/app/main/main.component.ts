import { Component, HostBinding } from '@angular/core';
import { PaisesService } from './paises.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
[x: string]: any;
  
  paises: any = [];
  region!: any;
  cambio!:any;

  @HostBinding('class.is-open')
  isOpen = false;
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
  get_by_region( region: string): void {
    this.service.get_by_region(region)
    .subscribe( (data: any[]) => {
      console.log(data);
      this.paises = data
    });
  }

  
}
