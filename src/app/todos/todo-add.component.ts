import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as actions from './todo.actions';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  template:  `
  
  <header class="header">
    <h1>TodoApp</h1>
    <input class="new-todo" 
    placeholder="que quieres hacer?" 
    autofocus 
    [formControl]="txtInput"
    (keyup.enter)="agregar()"
    >
  </header>
  
  
  `,
  styles: ``
})
export class TodoAddComponent {
  txtInput: FormControl;

  constructor(private store: Store<AppState>){
    this.txtInput = new FormControl('', Validators.required)
  }

  agregar(){

    if(this.txtInput.invalid){
      return;
    }
    this.store.dispatch(actions.crear({texto: this.txtInput.value}));
    this.txtInput.reset();
  }

}
