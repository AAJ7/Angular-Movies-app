import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { RegisterComponent } from './register/register.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LogInComponent } from './log-in/log-in.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { TVComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [

  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:" ", redirectTo:"login", pathMatch:"full"},

  {path:"home", canActivate:[AuthenticationGuard], component:HomeComponent},
  {path:"about", canActivate:[AuthenticationGuard], component:AboutComponent},
  {path:"movies", canActivate:[AuthenticationGuard], component:MoviesComponent},
  {path:"tv", canActivate:[AuthenticationGuard], component:TVComponent},
  {path:"people", canActivate:[AuthenticationGuard], component:PeopleComponent},
  {path:"moviedetails/:id/:mediatype", canActivate:[AuthenticationGuard], component:MoviedetailsComponent},

  {path:"login", component:LogInComponent},
  {path:"logout", component:LogOutComponent},
  {path:"register", component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
