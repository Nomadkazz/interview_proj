import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'http://localhost:9197/products/';  // URL to web api

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const url = `${this.productUrl}/all`;

    return this.http.get<Product[]>(url)
    .pipe(
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productUrl}/id/${id}`;
    
    return this.http.get<Product>(url).pipe(
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  deleteProduct(id: number): Observable<number | Product>{
    const url = `${this.productUrl}/delete/${id}`;

    return this.http.post<number>(url, id).pipe(
      catchError(this.handleError<Product>(`deleteProduct id=${id}`)));
  }

  saveProduct(product: Product){
    const url = `${this.productUrl}/save`;

    return this.http.post<Product>(url, product).pipe(
      catchError(this.handleError<Product>(`saveProduct id=${product.id}`)));
  }

  editProduct(product: Product){
    const url = `${this.productUrl}/edit`;

    return this.http.post<Product>(url, product).pipe(
      catchError(this.handleError<Product>(`editProduct id=${product.id}`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
