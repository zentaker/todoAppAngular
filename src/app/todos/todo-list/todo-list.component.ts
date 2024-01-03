import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

@Component({
    selector: 'app-todo-list',
    standalone: true,
    templateUrl: './todo-list.component.html',
    styles: ``,
    imports: [TodoItemComponent]
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
