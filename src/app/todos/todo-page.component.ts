import { Component } from '@angular/core';
import { TodoAddComponent } from "./todo-add.component";
import { TodoListComponent } from "../todo-list.component";
import { TodoFooterComponent } from "./todo-footer.component";
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { toggleAll } from './todo.actions';

@Component({
    selector: 'app-todo-page',
    standalone: true,
    template: `

<section class="todoapp">

<app-todo-add></app-todo-add>

<!-- This section should be hidden by default and shown when there are todos -->
<section class="main">


  <input (click)="toggleAll()" id="toggle-all" class="toggle-all" type="checkbox">

  <label for="toggle-all">Mark all as complete</label>
  
  <app-todo-list></app-todo-list>
</section>

<app-todo-footer></app-todo-footer>
</section>

    ` ,
    styles: ``,
    imports: [TodoAddComponent, TodoListComponent, TodoFooterComponent]
})
export class TodoPageComponent {
  completado: boolean = false;

  constructor(private store: Store<AppState>){}





toggleAll() {
  this.completado = !this.completado;
  this.store.dispatch(toggleAll({completado: this.completado}))

}

}
