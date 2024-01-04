//como se enceuntra el app state global

import { Todo } from "./todos/todoStore/todo.model";

export interface AppState {
    todos: Todo[],

}