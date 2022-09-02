import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAndRegistrationService } from '../services/login-and-registration.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
product:Array<any>=[];
p: number = 1;
  constructor(private _logout:Router, public _ser:LoginAndRegistrationService) { }
  ngOnInit(): void {


  this.product=[
    { qua:"15 Products", img:"./assets/cat-1.jpg", type:"  Men's dresses "  },
    { qua:"15 Products", img:"./assets/cat-2.jpg", type:"  Men's dresses "  },

    { qua:"15 Products", img:"./assets/cat-3.jpg", type:"  Men's dresses "  },

    { qua:"15 Products", img:"./assets/cat-4.jpg", type:"  Men's dresses "  },

    { qua:"15 Products", img:"./assets/cat-5.jpg", type:"  Men's dresses "  },

    { qua:"15 Products", img:"./assets/cat-6.jpg", type:"  Men's dresses "  },

    // { qua:"15 Products", img:"./assets/cat-7.jpg", type:"  Men's dresses "  },

    // { qua:"15 Products", img:"./assets/cat-8.jpg", type:"  Men's dresses "  },

    // { qua:"15 Products", img:"./assets/cat-1.jpg", type:"  Men's dresses "  },

    // { qua:"15 Products", img:"./assets/cat-1.jpg", type:"  Men's dresses "  },



  ]

  
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