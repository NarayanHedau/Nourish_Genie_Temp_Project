import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAndRegistrationService {
  Login: boolean=false;

  constructor( private _httpclien:HttpClient, private router:Router) { }

  url="http://localhost:3000/"

  register(data:any){
   return this._httpclien.post(this.url +"register",data)
  }
  login(data:any){
   return this._httpclien.post("http://localhost:3000/login",data, {responseType: 'text'})
  }

  islogedin(){
    if(localStorage.getItem("login") == null
    ){

      return this.Login=false;

    }
    else{
      return true
    }
  }

  logout(){
    localStorage.removeItem("login");
    this.router.navigate([ "home"])
  }

  // http://localhost:3000/countries

  Getall_Country(){
    return this._httpclien.get(this.url + 'countries')
  }


  state(country:any){
    return this._httpclien.get( this.url + "states/"+country )
  }



  city(countrycode:any,statecode:any){
    return this._httpclien.get(this.url + "cities/"+countrycode +statecode );


  }

}
