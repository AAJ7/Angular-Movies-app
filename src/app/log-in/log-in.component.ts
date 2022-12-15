import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, Validators } from "@angular/forms";
import{ AuthenticationService } from "../authentication.service";
import{ Router } from "@angular/router"

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private _AuthenticationService:AuthenticationService, private _Router:Router) { }
  LogInForm:FormGroup = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(19)]),
    }
  );

  Response:string = "";
  Loading:boolean = false;
  Error:string = "";
  SumbitLogInForm(LogIn:FormGroup)
  {
    this.Loading = true;
    this._AuthenticationService.SignIn(LogIn.value).subscribe
    (
      {
        next:(Response)=>
        {
          if(Response["message"] === "success")
          {
            localStorage["setItem"]("UserToken", Response["token"]);
            this._AuthenticationService.SaveUserData();
            this._Router.navigate(["/home"]);
          }
          else
          {
            this.Error = Response["message"];
          }
        }
      }
    )
  }


  ngOnInit(): void
  {
    this._AuthenticationService.UserData.subscribe
    (
      {
        next:()=>
        {
          if(this._AuthenticationService.UserData.getValue() != null)
          {
            this._Router.navigate(["/home"]);
          }
        }
      }
    )
  }

}
