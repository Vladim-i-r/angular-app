import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Mesa comedor',
      description: 'Excelente mesa para el comedor',
      price: 700
    },

    {
      id: 2,
      name: 'Teclado mecanico',
      description: 'Excelente componente de PC',
      price: 500
    }
  ];

  private url: string = 'http://localhost:8080/products'

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]> {
    //return of(this.products);         // lo convierte en activo, observable
    return this.http.get<Product[]>(this.url).pipe(
      map((response: any) => response._embedded.products as Product[])      // convierte el json a un tipo product, y se agrega ya que en el backend, se uso una anotacion general que hace que la data este en _embedded
    );
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${product.id}`, product);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
