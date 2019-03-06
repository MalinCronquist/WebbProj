import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  apiUrl: string = 'https://polisen.se/api/policestations';
  constructor(private http: HttpClient) { }

  public getWeatherData(): Observable<any> {
   return this.http.get(this.apiUrl);
  }


}

