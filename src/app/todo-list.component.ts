import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from "./todos/todo-item.component";
import { Todo } from './todos/todoStore/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './todos/filtro.pipe';
import { filtrosValidos } from './todos/filterStore/filtro.actions';
import { state } from '@angular/animations';

@Component({
    selector: 'app-todo-list',
    standalone: true,
    template:`
    
    <ul class="todo-list">
   <app-todo-item *ngFor="let todo of todos | filtroTodo:filtroActual"[todo]="todo"></app-todo-item>


<!-- 
   @for (todo of todos; track $index ) {
      <app-todo-item [todo]="todo"></app-todo-item>
   } -->

  </ul> 
    `,
    styles: ``,
    imports: [TodoItemComponent, CommonModule, FiltroPipe]
})
export class TodoListComponent implements OnInit {
    todos: Todo[] = [];  // Cambiado a un arreglo de Todo
    filtroActual!: filtrosValidos;

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        // Suscripción al store para obtener los todos y el filtro actual
        this.store.subscribe(state => {
            this.todos = state.todos;
            this.filtroActual = state.filtro;
        });
    }
}