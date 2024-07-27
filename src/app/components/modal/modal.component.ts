import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AutofocusDirective } from '../../directives/autofocus.directive';

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  imports: [NzModalModule, ReactiveFormsModule, NzFormModule, AutofocusDirective],
  standalone: true
})
export class ModalComponent {
  @Input() isVisible = false;
  isEditingTitle = false;

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
    console.log("triggered");
    this.isEditingTitle = value;
  }

  handleOk(): void {
    console.log('Doing nothing!');
  }

  handleCancel(): void {
    console.log('Doing nothing clicked!');
  }

  submitForm(): void {
    console.log('submit', this.form.value);
  }
}