import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAndRegistrationService } from '../services/login-and-registration.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _logout:Router, public _ser:LoginAndRegistrationService) { }

  ngOnInit(): void {
  
  }
 signHide:any
 log=true
 logOut(){
  this._ser.logout();
  this._logout.navigate([ "home"])
 }

 login(){
  this.signHide =this._ser.islogedin()
 }
}
