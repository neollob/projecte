import { Injectable } from '@angular/core';
import uuidv4 from 'uuid/v4';
import { CommonsService } from './commons.service';
import { environment } from 'src/environments/environment';
import { Todo } from '../classes/todo.model';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Todotask } from '../classes/todotask.model';

@Injectable({
  providedIn: 'root'
})
export class ApiTodoService {

  constructor(private http: HttpClient, private commons: CommonsService) { }
  private apiURL = `${environment.API_URL}todo`;
  initTodo() {
    const todo: Todo = {
      id: null,
      todoid: uuidv4(),
      task: '',
      type: 0,
      section: 0,
      registerdate: new Date(),
      state: '0',
      description: '',
      disabled: false,
      todotask: [new Todotask]
    };
    return todo;
  }
  initTodotask() {
    const todotask: Todotask = {
      todotaskid: uuidv4(),
      id: null,
      task: '',
      registerdate: new Date(),
      state: '0',
      disabled: false
    };
    return todotask;
  }
  private uniqueID() {
    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.', thisMS.toString());
    return unique;
  }
  getTodoes$() {
    const todoes = this.http.get<Todo>(`${this.apiURL}es`);
    return todoes;
  }
  getTodoId$(id: string) {
    const todo = this.http.get<Todo>(`${this.apiURL}es/${id}`);
    return todo;
  }
  addTodo$(todo: Todo) {
    return this.http.post<Todo>(`${this.apiURL}es`, todo)
      .pipe(tap((todo: Todo) => {/** console.log(`added todo: todoId=${todo.todoid}`) */}),
        catchError(err => {
          console.log(err);
          return throwError(err);
        }));
  }
  deleteTodo$(id: string) {
    return this.http.delete(`${this.apiURL}es/${id}`);
  }
  editTodo$(todo: Todo) {
    return this.http.put<Todo>(`${this.apiURL}es/${todo.id}`, todo)
      .pipe(tap((todo: Todo) => {/** console.log(`edited todo: id=${todo.todoid}`) */}),
        catchError(err => {
          console.log(err);
          return throwError(err);
        }));
  }

}
