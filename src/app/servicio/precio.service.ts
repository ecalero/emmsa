import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

const apiUrl="http://www.emmsa.com.pe/serviciosapp/";

@Injectable({
  providedIn: 'root'
})
export class PrecioService {
  
  constructor(public http: HttpClient) { }
  
  getPrecios(idCatalogoProducto): Observable<any> {
    let params = "idCatalogoProducto="+idCatalogoProducto;
        //Establecemos cabeceras
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        let response1 = this.http.post(apiUrl+"precios-app", params, {headers: headers});
      console.log("servicio de banner");
      console.log(forkJoin([response1]));
      return forkJoin([response1]);
   }

   getPreciosTemporada(): Observable<any> {
    let params = {};
        //Establecemos cabeceras
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        let response1 = this.http.get(apiUrl+"precios-temporada-app", params);
      console.log("servicio de banner");
      console.log(forkJoin([response1]));
      return forkJoin([response1]);
   }

   getPreciosAhorro(): Observable<any> {
    let params = {};
        //Establecemos cabeceras
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        let response1 = this.http.get(apiUrl+"precios-ahorro-app", params);
      console.log("servicio de banner");
      console.log(forkJoin([response1]));
      return forkJoin([response1]);
   }

   getCatalogoProductosApp(): Observable<any> {
    let params = {};
        //Establecemos cabeceras
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        let response1 = this.http.get(apiUrl+"catalogo-productos", params);
      console.log("servicio de banner");
      console.log(forkJoin([response1]));
      return forkJoin([response1]);
   }
   




}
