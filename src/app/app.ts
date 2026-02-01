import { Component } from '@angular/core';
import { FormSzkoda } from './form-szkoda/form-szkoda';

@Component({
  selector: 'app-root',
  imports: [FormSzkoda],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
