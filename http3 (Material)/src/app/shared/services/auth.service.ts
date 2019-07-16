import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.getLogged());
  private headers: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json'
  });
  public dataToken: any;
  constructor(private http: HttpClient) { }
  registerUser$(name: string, email: string, password: string) {
    this.http.post('http://localhost:3000/users', { name, email, password }, { headers: this.headers }).pipe(map => this.dataToken = map);
  }
  loginuser(email: string, password: string): Observable<any> {
    const url_api = 'http://localhost:3000/login';
    return this.http
      .post<UserInterface>(
        url_api,
        { email, password },
        { headers: this.headers }
      )
      .pipe(tap(data => {
        localStorage.setItem('isLogged', 'true');
        this.isLogged.next(true);
        return data;
      }),
        catchError(error => {
          console.log(error);
          return throwError(error);
        }));
  }

  setToken(token): void {
    localStorage.setItem('accessToken', token);
  }
  getToken() {
    const accessToken = localStorage.getItem('accessToken');
    if (!(accessToken === undefined || accessToken === null)) {
      return accessToken;
    } else { return null; }
  }
  logoutUser() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('isLogged');
  }
  getLogged(): boolean {
    if (localStorage.getItem('isLogged') === 'true') {
      console.log('logged');
      return true;
    } else { return false; }

    /* localStorage.set Item("isLogged", this.user.username);
    this.userType.next(this.user.username);
    this._router.navigate(['/Admin']);
    return true; */
  }
}
