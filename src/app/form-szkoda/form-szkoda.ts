import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-szkoda',
  imports: [ReactiveFormsModule],
  templateUrl: './form-szkoda.html',
  styleUrl: './form-szkoda.css',
})
export class FormSzkoda {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      imie: ['', Validators.required],
      nazwisko: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefon: ['', Validators.required],
      marka: ['', Validators.required],
      model: ['', Validators.required],
      rejestracja: ['', Validators.required],
      vin: ['', [Validators.required, Validators.minLength(17)]],
      dataZdarzenia: ['', Validators.required],
      opis: ['', [Validators.required, Validators.minLength(50)]],
      zalaczniki: [null as FileList | null],
    });
  }

  get imie() {
    return this.form.get('imie');
  }
  get nazwisko() {
    return this.form.get('nazwisko');
  }
  get email() {
    return this.form.get('email');
  }
  get telefon() {
    return this.form.get('telefon');
  }
  get marka() {
    return this.form.get('marka');
  }
  get model() {
    return this.form.get('model');
  }
  get rejestracja() {
    return this.form.get('rejestracja');
  }
  get vin() {
    return this.form.get('vin');
  }
  get dataZdarzenia() {
    return this.form.get('dataZdarzenia');
  }
  get opis() {
    return this.form.get('opis');
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Formularz wysłany:', this.form.value);
    }
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.form.patchValue({ zalaczniki: input.files });
    }
  }
}
