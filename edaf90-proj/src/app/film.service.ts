import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

/*
This service is injected into the constructor of FilmComponent, meaning that
FilmComponent has a reference to this class, and can therefore call its methods.
*/
export class FilmService {

  apiUrl: string = 'http://www.omdbapi.com/?apikey=acb89665&i=';

  constructor(private http: HttpClient) { }

  public getFilmData(imdbKey: string): Observable<any> {
    //this.http.get(this.apiUrl).subscribe(data => console.log(data)); //Prints json object data to console
    //check first paragraph of this: https://blog.angularindepth.com/the-new-angular-httpclient-api-9e5c85fe3361
    return this.http.get(this.apiUrl + imdbKey);
  }
}
