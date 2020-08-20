import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

const apiUrl="http://www.emmsa.com.pe/serviciosapp/";

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

 
  constructor(public http: HttpClient) { }
  getSlider(): Observable<any> {
    let params = {};
        //Establecemos cabeceras
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        let response1 = this.http.get(apiUrl+"slider-app", params);
      console.log("servicio de banner");
      console.log(forkJoin([response1]));
      return forkJoin([response1]);
   }


   getNoticias(): Observable<any> {
    let params = {};
        //Establecemos cabeceras
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        let response1 = this.http.get(apiUrl+"noticias-app", params);
      console.log("servicio de banner");
      console.log(forkJoin([response1]));
      return forkJoin([response1]);
   }


}
