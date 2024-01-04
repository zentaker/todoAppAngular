import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from './todoStore/todo.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as actions from './todoStore/todo.actions';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `



  <li [class.completed]="todo.completado" [class.editing]="editando">
      <div class="view">
        <input class="toggle" type="checkbox" [formControl]="chkCompletado">
        <label (dblclick)="editar()">{{todo.texto}}</label>
        <button (click)="borrar()" class="destroy"></button>
      </div>
      <input  (blur)="terminarEdicion()" class="edit" [formControl]="txtInput" type="text" #inputFisico>
    </li>
    


    `,
  styles: ``
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  chkCompletado!: FormControl;
  txtInput!: FormControl;

  editando: boolean = false;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    
      this.chkCompletado = new FormControl(this.todo.completado);
      this.txtInput = new FormControl(this.todo.texto, Validators.required);

      this.chkCompletado.valueChanges.subscribe( valor => {
        this.store.dispatch(actions.toggle({id: this.todo.id}))
      })
  }

  editar(){
    this.editando = true;
    this.txtInput.setValue(this.todo.texto)
    setTimeout(()=> {
      this.txtInputFisico.nativeElement.select();

    })

  }
  terminarEdicion(){
    this.editando = false;
    //si no viene nada en el input
    if(this.txtInput.invalid){return;}
    if(this.txtInput.value === this.todo.texto){return;}


    this.store.dispatch(actions.editar({id: this.todo.id, texto: this.txtInput.value}))

  }

  borrar(){
    this.store.dispatch(actions.borrar({id: this.todo.id}))
  }


}
