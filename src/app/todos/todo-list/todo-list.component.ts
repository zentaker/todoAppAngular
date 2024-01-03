import { Component } from '@angular/core';
import { TodoItemComponent } from "../todo-item/todo-item.component";

@Component({
    selector: 'app-todo-list',
    standalone: true,
    templateUrl: './todo-list.component.html',
    styles: ``,
    imports: [TodoItemComponent]
})
export class TodoListComponent {

}
