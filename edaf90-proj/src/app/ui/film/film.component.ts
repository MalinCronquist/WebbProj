import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../film.service'

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  title: string = '';

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    const testKey: string = 'tt0137523';
    this.filmService.getFilmData(testKey)
      .subscribe(data => {this.title = data['Title']});
  }

}
