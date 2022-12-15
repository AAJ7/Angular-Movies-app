import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  gettrending(mediatype:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediatype}/week?api_key=a8654c91d21970602e3659f7df2677a0`);
  }
  getitemdetails(mediatype:string, id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediatype}/${id}?api_key=a8654c91d21970602e3659f7df2677a0`);
  }
  getsimilar(mediatype:string, id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediatype}/${id}/similar?api_key=a8654c91d21970602e3659f7df2677a0`);
  }
}


