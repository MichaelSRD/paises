import { Component, Input } from '@angular/core';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-banderas',
  templateUrl: './banderas.component.html',
  styleUrls: ['./banderas.component.scss']
})
export class BanderasComponent {

  
  @Input() paises: any = [];
  isOpen!: boolean;

   constructor(private service: PaisesService){}
   ngOnInit() {
    this.getPaises();
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

   getPaises(): void {
    this.service.getPaises()
    .subscribe( (data: any[]) => {
      console.log(data);
      this.paises = data
    });
  }
  
} 
