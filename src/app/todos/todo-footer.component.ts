import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { filtrosValidos, setFiltro } from './filterStore/filtro.actions';
import { CommonModule } from '@angular/common';
import { limpiarTodos } from './todoStore/todo.actions';

@Component({
  selector: 'app-todo-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
  
    <footer class="footer">
        <span class="todo-count"><strong>{{pendientes}}</strong> Pendientes</span>
        <ul class="filters">
          @for (filtro of filtros; track $index) {     
          <li (click)="cambiarFiltro(filtro)">
            <a class="selected" href="#/"[class.selected]="filtro === filtroActual">
            {{filtro | titlecase}}
          </a>
          </li>
          }
        </ul>
        <button (click)="limpiarCompletados()" class="clear-completed">Limpiar</button>
      </footer>
  
  
  `,
  styles: ``
})
export class TodoFooterComponent implements OnInit {


  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[]=['todos','completados','pendientes'];

  pendientes: number=0;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {

    //saber los todos y los filtrpos
    this.store.subscribe(state => {
      //no importa donde se dispare la accion 
      //mantener el estado actual del filtro, y reaccion frente a los cambios del estado
      this.filtroActual= state.filtro;
      //disparar un conteo de cuantos pednientes
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    })
      
  }
  cambiarFiltro(filtro: filtrosValidos){
    this.store.dispatch(setFiltro({filtro}));

  }
  limpiarCompletados() {
    this.store.dispatch(limpiarTodos())
    }



}
