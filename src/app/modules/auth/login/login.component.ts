import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    console.log(this.form.value)
    if (this.form.valid) {
      this.authService.login(this.form.value)
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (err) => {
          console.error('Error fetching provinces:', err);
        },
        complete: () => {
        }
      });
    } else {

    }
  }

}
