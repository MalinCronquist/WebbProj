import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../film.service'

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  test: string = '';

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService
    .getFilmData('url')
    .subscribe(
      data => {
        this.test = data['Title']
      },
      err => {
        console.log(err);
      }
    );
  }

}
