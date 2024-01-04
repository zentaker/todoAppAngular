import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { filtrosValidos } from './filterStore/filtro.actions';

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
export class TodoFooterComponent implements OnInit {

  filtroActual: filtrosValidos = 'todos';

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {

    this.store.select('filtro').subscribe(filtro => {
      console.log(filtro);
    })
      
  }



}
