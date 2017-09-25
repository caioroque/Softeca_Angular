import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

export interface UsuarioService {
  id: number | string;
  createdAt: number;
  value: string;
}

@Injectable()
export class TodoService {
  todos: Observable<UsuarioService[]>;
  private _todos: BehaviorSubject<UsuarioService[]>;
  private baseUrl: string;
  private dataStore: {
    todos: UsuarioService[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:8080//Softeca/rest/servicos/user';
    this.dataStore = { todos: [] };
    this._todos = <BehaviorSubject<UsuarioService[]>>new BehaviorSubject([]);
    this.todos = this._todos.asObservable();
  }

  loadAll() {
    this.http.get(`${this.baseUrl}/allUsers`).map(response => response.json()).subscribe(data => {
      this.dataStore.todos = data;
      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not load todos.'));
  }

  load(id: number | string) {
    this.http.get(`${this.baseUrl}/getUser/${id}`).map(response => response.json()).subscribe(data => {
      let notFound = true;

      this.dataStore.todos.forEach((item, index) => {
        if (item.id === data.id) {
          this.dataStore.todos[index] = data;
          notFound = false;
        }
      });

      if (notFound) {
        this.dataStore.todos.push(data);
      }

      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not load todo.'));
  }
}
