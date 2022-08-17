import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAndRegistrationService {

  constructor( private _httpclien:HttpClient) { }

  url="http://localhost:3000/"

  register(data:any){
   return this._httpclien.post(this.url +"register",data)
  }
  login(data:any){
   return this._httpclien.post("http://localhost:3000/login",data, {responseType: 'text'})
  }
}
