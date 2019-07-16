import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../classes/supplier.model';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSuppliersService {

  constructor( private http: HttpClient ) { }
  initSupplier() {
    const supplier: Supplier = {
      id: this.uniqueID(),
      guid: '',
      isActive: undefined,
      balance: '',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png',
      age: -1,
      eyeColor: '',
      name: {
        first: '',
        last: ''
      },
      gender: '',
      company: '',
      email: '',
      phone: '',
      address: '',
      about: '',
      registered: '',
      latitude: 0,
      longitude: 0,
      greeting: ''
    };
    return supplier;
  }
  private uniqueID() {
    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.', thisMS.toString());
    return unique;
  }
  getSuppliers$() {
    const suppliers = this.http.get<Supplier>('http://localhost:3000/suppliers');
    return suppliers;
  }
  getSupplier$(id: string) {
    const supplier = this.http.get<Supplier>(`http://localhost:3000/suppliers/${id}`);
    return supplier;
  }
  addSupplier$(supplier: Supplier) {
    return this.http.post<Supplier>('http://localhost:3000/suppliers', supplier)
      .pipe(tap(( supplier: Supplier) => console.log(`added Supplier: id=${supplier}`)),
        catchError(err => {
          console.log(err);
          return throwError(err);
        }));
  }
  deleteSupplier$(id: number) {
    return this.http.delete(`http://localhost:3000/suppliers/${id}`);
  }
  editSupplier$(supplier: Supplier) {
    return this.http.put<Supplier>(`http://localhost:3000/suppliers/${supplier.id}`, supplier)
      .pipe(tap((supplier: Supplier) => console.log(`edited Suppliers: id=${supplier.id}`)),
        catchError(err => {
          console.log(err);
          return throwError(err);
        }));
  }
}
