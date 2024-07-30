import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AutofocusDirective } from '../../directives/autofocus.directive';
import { TodoService } from '../../stores/todo.service';

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  imports: [NzModalModule, ReactiveFormsModule, NzFormModule, NzInputModule, AutofocusDirective],
  standalone: true
})
export class ModalComponent {
  @Input() isVisible = false;
  @Output() closeModal = new EventEmitter<void>();
  isEditingTitle = false;

  todoService = inject(TodoService);

  form: FormGroup<{
    title: FormControl<string>;
    description: FormControl<string>;
  }>;

  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  toggleEditTitle(value: boolean): void {
    this.isEditingTitle = value;
  }

  handleOk(): void {
    if (this.form.valid){
      this.todoService.createTodo(this.form.value.title!, this.form.value.description!);
      this.closeModal.emit();
    }
  }

  handleCancel(): void {
    this.closeModal.emit();
  }
}