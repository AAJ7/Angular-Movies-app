import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  item:any;
  similarmovies:any[] = [];
  mediatype:string = "";
  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService) { }

  ngOnInit(): void
  {
    //  let {id, media_type} =  this._ActivatedRoute.snapshot.params; عملتله destructing في دول (بنفتت)
     // console.log(X["mediatype"]);

     
    let X =  this._ActivatedRoute.snapshot.params;
    this.mediatype = X["mediatype"];
    this._MoviesService.getitemdetails(X["mediatype"], X["id"]).subscribe({next:(data)=>{this.item = data;}})

    this._MoviesService.getsimilar(X["mediatype"], X["id"]).subscribe({next:(data)=>{this.similarmovies = data.results.slice(0,10);}})
  }

  getsimilar(mediatype:string, id:string)
{
  this._MoviesService.getitemdetails(mediatype, id).subscribe({next:(data)=>{this.item = data;}})

  this._MoviesService.getsimilar(mediatype, id).subscribe({next:(data)=>{this.similarmovies = data.results.slice(0,10);}})
}

}

