import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private _MoviesService:MoviesService) { }
  term:string = "";

  trendingmovies:any[] = [];
  trendingtv:any[] = [];
  trendingpeople:any[] = [];

  ngOnInit(): void
  {
    this._MoviesService.gettrending("movie").subscribe({next:(value)=>{this.trendingmovies = value.results.slice(0,10);}});
    this._MoviesService.gettrending("tv").subscribe({next:(value)=>{this.trendingtv = value.results.slice(0,10);}});
    this._MoviesService.gettrending("person").subscribe({next:(value)=>{this.trendingpeople = value.results.filter((item:any)=> item.profile_path != null).slice(0,10);}});

  }

}
