import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  form: FormGroup;
  options = ['Option 1', 'Option 2', 'Option 3'];
  title = 'Reactive Forms';
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['tushar', Validators.required],
      password: ['password'],
      confirmPassword: ['confirm password'],
      dropdown: ['', Validators.required],
      choice: ['', Validators.required],
      checkboxes: this.fb.array([], Validators.required),
      multiselect: [[], Validators.required],
    });
  }
  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('checkboxes') as FormArray;

    if (e.target.checked) {
      checkArray.push(this.fb.control(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  get multiselect() {
    return this.form.get('multiselect') as FormArray;
  }
  onOptionChange(event: any) {
    this.form
      .get('multiselect')
      ?.setValue(
        [...event.target.options]
          .filter((ele: any) => ele.selected)
          .map((ele: any) => ele.value)
      );
  }
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
  get choice() {
    return this.form.get('choice');
  }
  get dropdown() {
    return this.form.get('dropdown');
  }
  get checkboxes() {
    return this.form.get('checkboxes') as FormArray;
  }
}
