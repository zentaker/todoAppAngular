import { Component } from '@angular/core';
import { TodoAddComponent } from "./todo-add/todo-add.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoFooterComponent } from "./todo-footer/todo-footer.component";

@Component({
    selector: 'app-todo-page',
    standalone: true,
    templateUrl: './todo-page.component.html',
    styles: ``,
    imports: [TodoAddComponent, TodoListComponent, TodoFooterComponent]
})
export class TodoPageComponent {

}
