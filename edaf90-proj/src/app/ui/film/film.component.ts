import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FilmService} from '../../film.service';
import imdbKeys from '../../../assets/imdb_key_lists/imdb_keys_top_1-250.json';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})

export class FilmComponent implements OnInit {

  data: {} = {};
  city: string = '';

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
      this.route
        .queryParams
        .subscribe(params => {
          this.city = params['city'] || 'No city specified';
          console.log('City: ' + this.city.toString())
        });

    var randInt = Math.floor((Math.random() * 250));
    const testKey: string = imdbKeys[randInt];
    this.filmService.getFilmData(testKey)
      .subscribe(data => {this.data = data;
          console.log(data);
        });
  }

}
