//como se enceuntra el app state global

import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/todoStore/todo.model";
import { todoReducer } from "./todos/todoStore/todo.reducer";
import { filtrosValidos } from "./todos/filterStore/filtro.actions";
import { filtroReducer } from "./todos/filterStore/filtro.reducer";

export interface AppState {
    todos: Todo[],
    filtro: filtrosValidos

}

//configurar todos los reducers

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}