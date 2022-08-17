import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _logout:Router) { }

  ngOnInit(): void {
  
  }
 signHide:boolean=true 
 hide(){
  this.signHide=JSON.parse(localStorage.getItem("login") || "[]")
 
 }
 logout(){
  localStorage.removeItem("login")
this._logout.navigate(["home"]);
this.signHide=false
 }
 
}
