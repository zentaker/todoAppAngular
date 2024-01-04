import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from "./todos/todo-item.component";
import { Todo } from './todos/todoStore/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-todo-list',
    standalone: true,
    template:`
    
    <ul class="todo-list"><!-- 
   <app-todo-item *ngFor="let todo of todos"></app-todo-item>
 -->


   @for (todo of todos; track $index) {
      <app-todo-item [todo]="todo"></app-todo-item>
   }

  </ul> 
    `,
    styles: ``,
    imports: [TodoItemComponent, CommonModule]
})
export class TodoListComponent implements OnInit {

    //cada vez que se reciva un cambio
    todos: Todo[]=[];

    constructor(private store: Store<AppState>){}

    ngOnInit(): void {
        //vas a estar subsrito
        this.store.select('todos').subscribe( todos => {
            this.todos = todos;
        })
        
    }

}
