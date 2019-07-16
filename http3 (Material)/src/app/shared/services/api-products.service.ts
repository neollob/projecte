import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../classes/stock.model';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(private http: HttpClient) { }

  initProduct() {
    const product: Product = {
      id: this.uniqueID(),
      name: '',
      value: '',
      qty: -1
    };
    return product;
  }
  private uniqueID() {
    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.', thisMS.toString());
    return unique;
  }
  getProducts$() {
    const users = this.http.get<Product>('http://localhost:3000/products');
    return users;
  }
  getProduct$(id: string) {
    const user = this.http.get<Product>(`http://localhost:3000/products/${id}`);
    return user;
  }
  addProduct$(product: Product) {
    return this.http.post<Product>('http://localhost:3000/products', product)
      .pipe(tap(( product: Product) => console.log(`added Product: id=${product}`)),
        catchError(err => {
          console.log(err);
          return throwError(err);
        }));
  }
  deleteProduct$(id: string) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  editProduct$(product: Product) {
    return this.http.put<Product>(`http://localhost:3000/products/${product.id}`, product)
      .pipe(tap((product: Product) => console.log(`edited Product: id=${product.id}`)),
        catchError(err => {
          console.log(err);
          return throwError(err);
        }));
  }



}
