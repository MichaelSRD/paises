import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  modo_oscuro: any;
  dato!: string | null;

  isOpen = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  
  ngOnInit(){
    const datot = localStorage.getItem('modo_oscuro');
    if(datot == "true"){
      this.isOpen = true
    }else{
      this.isOpen = false
    }
  }
  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
    if(this.isOpen){
       localStorage.setItem('modo_oscuro','true')
    }else{
      localStorage.setItem('modo_oscuro','false')
    }
  }

  constructor(private http: HttpClient) { 
    
  }
 
  getPaises(): any {
    return this.http.get("https://restcountries.com/v3.1/all")
  }
  get_by_region(region: string ): any {
    return this.http.get(`https://restcountries.com/v3.1/region/${region}`)
  }
  
  /* GET heroes whose name contains search term */
  get_by_nombre(term: string ): Observable<any> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get(`https://restcountries.com/v3.1/name/${term}`).pipe(
      tap(x => (<any>x).length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError('searchHeroes', []))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    
  }
 
  get_by_code(code: any = []){
      
      return this.http.get(`https://restcountries.com/v3.1/alpha?codes=${code}`);
  }

  get_by_detail(term: string | null ): any {
    return this.http.get(`https://restcountries.com/v3.1/name/${term}?fullText=true`)
  }
  modo_osuro_cambio(){
    
      
    if (this.modo_oscuro) {
      localStorage.setItem('modo_oscuro', 'false');
      this.modo_oscuro = !this.modo_oscuro
    } else {
      localStorage.setItem('modo_oscuro', 'true');
      this.modo_oscuro = !this.modo_oscuro
    }

    this.dato = localStorage.getItem('modo_oscuro');
    
    
    return this.modo_oscuro
    
  }
  
  
}
