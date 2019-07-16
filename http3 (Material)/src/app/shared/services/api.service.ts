import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Customer } from '../classes/customer.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  initCustomer() {
    const customer: Customer = {
      id: this.uniqueID(),
      guid: '',
      isActive: undefined,
      balance: '',
      age: -1,
      eyeColor: '',
      name: {
        first: '',
        last: ''
      },
      gender: '',
      picture: 'https://katakrak.net/sites/default/files/default_images/default_profile_0.jpg',
      company: '',
      email: '',
      phone: '',
      address: '',
      about: '',
      registered: '',
      latitude: 0,
      longitude: 0,
      greeting: '',
      invoices: [
        {
          invid: '',
          description: '',
          items: [
            {
              key: -1,
              value: ''
            }
          ]
        }
      ]

    };
    return customer;
  }
  private uniqueID() {
    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.', thisMS.toString());
    return unique;
  }
  getCustomers$() {
    const users = this.http.get<Customer>('http://localhost:3000/customers');
    return users;
  }
  getCustomer$(id: string) {
    const user = this.http.get<Customer>(`http://localhost:3000/customers/${id}`);
    return user;
  }
  addCustomer$(customer: Customer) {
    return this.http.post<Customer>('http://localhost:3000/customers', customer)
      .pipe(tap(( customer: Customer) => console.log(`added Customer: id=${customer}`)),
        catchError(err => {
          console.log(err);
          return throwError(err);
        }));
  }
  deleteCustomer$(id: string) {
    return this.http.delete(`http://localhost:3000/customers/${id}`);
  }
  editCustomer$(customer: Customer) {
    return this.http.put<Customer>(`http://localhost:3000/customers/${customer.id}`, customer)
      .pipe(tap((customer: Customer) => console.log(`edited Customers: id=${customer.id}`)),
        catchError(err => {
          console.log(err);
          return throwError(err);
        }));
  }
}
