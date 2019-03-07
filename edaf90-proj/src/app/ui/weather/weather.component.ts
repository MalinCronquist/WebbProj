import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../weather.service';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

name = new FormControl('');
locationName: [''];

  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit() {
    this.weatherService.getWeatherData()
    .subscribe(data => {this.locationName = data.map(element => element.name.toLowerCase());});
  }

  updateCity(value){
     if (this.locationName.includes(value.toLowerCase()))
        this.router.navigate(['/film', {city: value.toLowerCase()}]);
     else
        alert('Your city lacks police station (or does not exist), please try another')

  }


}
