import { createReducer, on } from '@ngrx/store';
import { crear } from './todo.actions';
import { Todo } from './models/todo.model';

//objetos son pasados por referencia en javascript 
//no se puede usar push() por que no puedo mutar
export const estadoInicial: Todo[] = [];

export const todoReducer = createReducer(estadoInicial,
  // ..state para extraer los estados y regresalos de manera independiente
  on(crear, (state, {texto}) => [...state, new Todo(texto)] ),//arreglo para retornar un nuevo arreglo

);