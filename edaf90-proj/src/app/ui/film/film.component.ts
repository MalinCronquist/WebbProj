import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../film.service';
import imdbKeys from '../../../assets/imdb_key_lists/imdb_keys_top_1-250.json';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  data: {};

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    var randInt = Math.floor((Math.random() * 250));
    const testKey: string = imdbKeys[randInt];
    this.filmService.getFilmData(testKey)
      .subscribe(data => {this.data = data;
          console.log(data);
        });
  }

}
