import { Component } from '@angular/core';
import { PaisesService } from '../paises.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  paises: any = [];
  lengua: any = [];
  curren: any = []; 
  bordes: any;
  fronteras: any = [];
  myParam!: string | null;
  nombre!: string | null;
  isOpen = false;
   constructor(
    private service: PaisesService,
    private route: ActivatedRoute,
    private location: Location
    ){}
   
    ngOnInit(): void {
      
      const nombres =  this.route.paramMap.subscribe(params => {
        this.nombre = params.get('id'); 
        this.getdetail()
      });
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
    getdetail(): void {
  
      
      
      this.service.get_by_detail(this.nombre)
    .subscribe( (data: { language: any[]; } ) => {
      console.log(data);
      this.paises = data;
      const leng = this.paises.map((len: { languages: any; }) => len.languages);
      this.lengua = Object.values(leng[0]);
      console.log(this.lengua);
      const currenci = this.paises.map((cur: { currencies: any; }) => cur.currencies);
      
      this.curren = Object.values(currenci[0]);
      console.log(currenci);
      console.log(this.curren);
      const bordes = this.paises.map((len: { borders: any; }) => len.borders)
      this.bordes = Object.values(bordes[0]);
      console.log(this.bordes);
      
      this.service.get_by_code(this.bordes).subscribe((dat: any) => {
        console.log(dat);
        this.fronteras = dat;
      })
    });
    
    
    
    
    }

     backClicked() {
    this.location.back();
  }
    

}
