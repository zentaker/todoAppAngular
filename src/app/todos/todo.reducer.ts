import { createReducer, on } from '@ngrx/store';
import { borrar, crear, editar, toggle } from './todo.actions';
import { Todo } from './models/todo.model';

//objetos son pasados por referencia en javascript 
//no se puede usar push() por que no puedo mutar
export const estadoInicial: Todo[] = [
    new Todo('salvar al mundo'),
    new Todo('vencer a thanos'),
    new Todo('comprar traje de rion man'),
    new Todo('robar escudo de capitan america'),
];

export const todoReducer = createReducer(estadoInicial,
  // ..state para extraer los estados y regresalos de manera independiente
  on(crear, (state, {texto}) => [...state, new Todo(texto)] ),//arreglo para retornar un nuevo arreglo
 
  on(borrar, (state,{id})=> state.filter(todo => todo.id !== id)),// solo estas excluyendo el id que buscas

  on(toggle, (state, {id}) => {
    return state.map(todo => {
      if(todo.id ===id){
        return {
          ...todo,//deja igual todas las demas
          completado: !todo.completado//que le completado sea el opuesto
        }
      }else {
        return todo;
      }

    });//barrer cada uno de los elementos 
  } ),

  on(editar, (state, {id, texto}) => {
    return state.map(todo => {
      if(todo.id ===id){
        return {
          ...todo,//deja igual todas las demas
          texto: texto
        }
      }else {
        return todo;
      }

    });//barrer cada uno de los elementos 
  } ),


);