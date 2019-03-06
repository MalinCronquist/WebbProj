import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {WeatherService} from '../../weather.service';

declare var $:any;

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {


test: string = 'KalleANks';
locations: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeatherData()
    .subscribe(data => {this.locations = data;});
 
  }

}
