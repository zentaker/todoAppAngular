import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todoStore/todo.model';
import { filtrosValidos } from './filterStore/filtro.actions';

@Pipe({
  name: 'filtroTodo',
  standalone: true
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    //filtrar y retornar un nuevo arreglo
    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completado);
      case 'pendientes':
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }
    
  }

}
