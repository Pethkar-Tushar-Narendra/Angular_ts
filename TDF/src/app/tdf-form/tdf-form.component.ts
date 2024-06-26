import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-form',
  templateUrl: './tdf-form.component.html',
  styleUrl: './tdf-form.component.css',
})
export class TdfFormComponent {
  user = {
    name: '',
    gender: '',
    country: '',
    interests: {
      sports: false,
      music: false,
      movies: false,
    },
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
    },
  };
  address = {
    street: '',
    city: '',
    state: '',
    zip: '',
  };
  product = {
    quantity: null,
  };
  onSubmit(form: any) {
    console.log(
      'Form Submitted!',
      form.value,
      this.interests,
      this.user,
      this.address
    );
  }
  interests = {
    sports: false,
    music: false,
    movies: false,
  };

  isAnyCheckboxChecked(): boolean {
    return (
      this.interests.sports || this.interests.music || this.interests.movies
    );
  }

  updateCheckboxState() {
    // Optionally handle checkbox state changes
  }
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  selectedOptions: string[] = [];

  onSubmitMultiSelect() {
    console.log('Form Submitted!', this.selectedOptions);
  }
}
