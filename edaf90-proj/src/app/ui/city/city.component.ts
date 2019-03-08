import { Component, OnInit } from '@angular/core';
import {CityService} from '../../city.service';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

defaultCity: string = 'Lund';
name: FormControl;
locationName: string[];

  constructor(private cityService: CityService, private router: Router) {}

  ngOnInit() {
    this.name = new FormControl(this.defaultCity);
    this.locationName = [this.defaultCity];
    this.cityService.getCityData()
    .subscribe(data => {this.locationName = data.map(element => element.name.toLowerCase()) || [this.defaultCity];});
  }

  updateCity(value){
     if (this.locationName.includes(value.toLowerCase()))
        this.router.navigate(['/film'],  { queryParams: { city: value } });
     else
        alert('Your city lacks police station (or does not exist), please try another')

  }


}
