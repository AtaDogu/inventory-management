import { ToastrService } from 'ngx-toastr';
import { LoginModel } from './../../models/loginModel';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let LoginModel=Object.assign({},this.loginForm.value)
      this.authService.login(LoginModel).subscribe(response=>{
        this.toastrService.info(response.message)
        localStorage.setItem("token",response.data.token)
        this.router.navigate([""]);
      },responseError=>{
        this.toastrService.error(responseError.error)
      })
    }
  }

}
