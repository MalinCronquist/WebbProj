import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  
  apiUrl: string = 'https://polisen.se/api/policestations';
  constructor(private http: HttpClient) { }

  public getCityData(): Observable<any> {
   return this.http.get(this.apiUrl);
  }


}

