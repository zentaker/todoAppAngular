import { Component } from '@angular/core';
import { TodoAddComponent } from "../todo-add/todo-add.component";
import { TodoListComponent } from "../todo-list/todo-list.component";
import { TodoFooterComponent } from "../todo-footer/todo-footer.component";

@Component({
    selector: 'app-todo-page',
    standalone: true,
    template: `

<section class="todoapp">

<app-todo-add></app-todo-add>

<!-- This section should be hidden by default and shown when there are todos -->
<section class="main">


  <input id="toggle-all" class="toggle-all" type="checkbox">

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

}
