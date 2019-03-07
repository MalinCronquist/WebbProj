import { Component, OnInit } from '@angular/core';
import {CityService} from '../../city.service';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-weather',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

name = new FormControl('');
locationName: [''];

  constructor(private weatherService: CityService, private router: Router) {}

  ngOnInit() {
    this.weatherService.getCityData()
    .subscribe(data => {this.locationName = data.map(element => element.name.toLowerCase());});
  }

  updateCity(value){
     if (this.locationName.includes(value.toLowerCase()))
        this.router.navigate(['/film', {city: value.toLowerCase()}]);
     else
        alert('Your city lacks police station (or does not exist), please try another')

  }


}
