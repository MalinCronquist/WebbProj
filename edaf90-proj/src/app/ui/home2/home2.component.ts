import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  moveToCity() {
    this.router.navigate(['/city']);
  }

}  
