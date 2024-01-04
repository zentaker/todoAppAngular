import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toggle } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `



  <li [class.completed]="todo.completado" [class.editing]="editando">
      <div class="view">
        <input class="toggle" type="checkbox" [formControl]="chkCompletado">
        <label (dblclick)="editar()">{{todo.texto}}</label>
        <button class="destroy"></button>
      </div>
      <input (blur)="terminarEdicion()" class="edit" [formControl]="txtInput" type="text" #inputFisico>
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
        this.store.dispatch(toggle({id: this.todo.id}))
      })
  }

  editar(){
    this.editando = true;
    setTimeout(()=> {
      this.txtInputFisico.nativeElement.select();

    })

  }
  terminarEdicion(){
    this.editando = false;

  }


}
