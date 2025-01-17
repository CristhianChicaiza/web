import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',

  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router ) {
  this.loginForm = this.formBuilder.group({
    email: ['example@gmail.com', [Validators.required,Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  ngOnInit(): void {
  }


  get email(){
    return this.loginForm.get('email');
  }
 
  get password(){
    return this.loginForm.get('password');
  }

login(){
  if(this.loginForm.valid){
    console.log("llamar al servicio de login");
    this.router.navigateByUrl('/inicio');
    this.loginForm.reset();
}else{
  alert("error al ingresar");
}
}

}
