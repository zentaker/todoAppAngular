import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoPageComponent } from "./todos/todo-page/todo-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template:`
    
    <app-todo-page></app-todo-page>
    
    `,
    styles: ``,
    imports: [CommonModule, RouterOutlet, TodoPageComponent]
})
export class AppComponent {
  title = 'todoApp';
}
