import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  islogin:boolean = false;
  constructor(private  _AuthenticationService:AuthenticationService) { }

  ngOnInit(): void
  {
    this._AuthenticationService.UserData.subscribe
    (
      {
        next:()=>
        {
          if(this._AuthenticationService.UserData.getValue() != null)
          {
            this.islogin = true;
          }
          else
          {
            this.islogin = false;
          }
        }
      }
    )
  }
  logout()
  {
    this._AuthenticationService.signout();
  }
}
