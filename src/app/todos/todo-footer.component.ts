import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  standalone: true,
  imports: [],
  template: `
  
    <footer class="footer">
    
        <span class="todo-count"><strong>0</strong> Tareas pendientes</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
          <li>
            <a class="selected" href="#/">ToDo's</a>
          </li>
          <li>
            <a href="#/active">Activos</a>
          </li>
          <li>
            <a href="#/completed">Completados</a>
          </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed">Borrar Completados</button>
      </footer>
  
  
  `,
  styles: ``
})
export class TodoFooterComponent {

}
