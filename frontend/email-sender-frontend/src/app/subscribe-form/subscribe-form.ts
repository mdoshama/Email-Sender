import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { Router } from '@angular/router';

import { SubscribeService } from '../services/subscribe';

@Component({
  selector: 'app-subscribe-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './subscribe-form.html',
  styleUrl: './subscribe-form.scss'
})
export class SubscribeForm {
  form: FormGroup;

  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private subscribeService: SubscribeService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ]
    });
  }

  onSubmit(): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.subscribeService.subscribe(this.form.value).subscribe({
      next: (response) => {
        this.successMessage = response.message;
        this.form.reset();

        this.router.navigate(['/thank-you']);
      },

      error: (err) => {
        this.errorMessage =
          err?.error?.detail ||
          'Something went wrong. Please try again later.';
      }
    });
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }
}
