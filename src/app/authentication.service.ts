import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _HttpClient:HttpClient, private _Router:Router)
  {
    if(localStorage.getItem("UserToken") != null)
    {
      this.SaveUserData();
    }
  }

  SignUp(Data:object):Observable<any>
  {
    return this._HttpClient.post("https://route-movies-api.vercel.app/signUP", Data);
  }
  SignIn(Data:object):Observable<any>
  {
    return this._HttpClient.post("https://route-movies-api.vercel.app/signin", Data);
  }


  UserData:any = new BehaviorSubject(null);
  SaveUserData()
  {
    let EncodedToken = JSON.stringify(localStorage.getItem("UserToken"));
    let DecodedToken:object = jwtDecode(EncodedToken);
    this.UserData.next(DecodedToken);
    console.log(this.UserData);
  }
  signout()
  {
    localStorage.removeItem("UserToken");
    this.UserData.next(null);
    this._Router.navigate(["/login"]);
  }
}
