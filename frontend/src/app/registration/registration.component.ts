import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAndRegistrationService } from '../services/login-and-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  maxlength=12
  constructor( private _fb:FormBuilder,private ser:LoginAndRegistrationService, private _rout:Router) { }

  regForm:FormGroup=new FormGroup({})
  ngOnInit(): void {

      this.regForm=this._fb.group({

        name:new FormControl("",[Validators.required]),
        email:new FormControl("",[Validators.required, Validators.email]),
        phoneNumber: new FormControl("",[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        password: new FormControl("",[Validators.required]),

      })

  }

submitted=false




  massage=""
  
save(){
 // console.log(this.regForm.value)
 this.submitted=true;
 if(this.regForm.invalid){
  return
 }
this.ser.register(this.regForm.value).subscribe((res:any)=>{
  console.log(res);
  this.massage=" Successfull";
  
localStorage.setItem("login", res )
  if(res){
    this._rout.navigate(["index"])  
   }
},error=>{
  console.log(error);
  this.massage=error.message
}
)
}

}
