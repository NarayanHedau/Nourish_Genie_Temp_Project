import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormControlName, Validators } from '@angular/forms';
import { LoginAndRegistrationService } from '../services/login-and-registration.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _fb:FormBuilder,private ser:LoginAndRegistrationService) { }
  loginForm:FormGroup=new FormGroup({})
  ngOnInit(): void {

    this.loginForm=this._fb.group({
      email:new FormControl("",[Validators.required, Validators.email]),
      password: new FormControl("",[Validators.required]),
    })
  }
  submitted=false

  masssage=""

  save(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return
     }
    console.log(">>>>>>>>>>>>>", this.loginForm.value)
    this.ser.login(this.loginForm.value).subscribe((res)=>{
      console.log(res)
      // this.masssage="Login Successfull"
    }, error=>{
      console.log(error);
      this.masssage=error.massage
    })
  }

}
