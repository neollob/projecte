import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  isError = false;
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]]
  }); }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.registerForm.value);
    return this.authService.registerUser$('', this.email.value, this.password.value).subscribe(
      data => {
        /*           this.authService.setUser(data.user); */
        const token = data.accessToken;
        this.authService.setToken(token);
        // this.router.onSameUrlNavigation = 'reload';
        // this.router.navigate(['/']);
        this.router.navigate(['/home']);


        this.isError = false;
      },
      error => this.onIsError()
    );;
  }
  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

}
