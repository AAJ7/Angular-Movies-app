import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, Validators } from "@angular/forms";
import{ AuthenticationService } from "../authentication.service";
import{ Router } from "@angular/router"




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private _AuthenticationService:AuthenticationService, private _Router:Router) { }
  RegisterForm:FormGroup = new FormGroup(
    {
      first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(19)]),
      last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(19)]),
      age: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(30)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(19)]),
    }
  );

  Response:string = "";
  Loading:boolean = false;
  SumbitRegisterForm(RegisterForm:FormGroup)
  {
    console.log(RegisterForm.value);
    this.Loading = true;
    this._AuthenticationService.SignUp(RegisterForm.value).subscribe
    (
      {
        next:(Response)=>
        {
          console.log(Response);
        }
      }
    )
  }


  ngOnInit(): void {
  }

}
