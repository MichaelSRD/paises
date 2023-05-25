import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  paises$:  Observable<any> | undefined;
  private searchTerms = new Subject<string>();
  heroService: any;
  cambio!: boolean;
  isOpen = false;
  constructor(private service: PaisesService) {}
  
   
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  
  ngOnInit(): void {
    this.paises$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.service.get_by_nombre(term)),
    );
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
