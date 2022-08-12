import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormControlName, Validators } from '@angular/forms';
import { LoginAndRegistrationService } from '../services/login-and-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  maxlength=12
  constructor( private _fb:FormBuilder,private ser:LoginAndRegistrationService) { }

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
this.ser.register(this.regForm.value).subscribe((res)=>{
  console.log(res);
  this.massage=" Successfull"
},error=>{
  console.log(error);
  this.massage=error.message
}
)
}

}
