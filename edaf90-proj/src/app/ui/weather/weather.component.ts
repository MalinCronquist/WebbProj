import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {WeatherService} from '../../weather.service';
import {FormControl} from '@angular/forms';

declare var $:any;

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

name = new FormControl('');
test: string = 'KalleANks';
locations: [];
locationName: [''];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeatherData()
    .subscribe(data => {(this.locations = data), this.locationName = data.map(element => element.name.toLowerCase());});
  }

  saveLocationNames(info){
    console.log("hej");
    console.log(info);
  }

  updateCity(value){
    console.log(value.toLowerCase());
     console.log((this.locationName.includes(value.toLowerCase())));
  }


}
