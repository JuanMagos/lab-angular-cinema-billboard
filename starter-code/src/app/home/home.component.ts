import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ MovieService ]
})
export class HomeComponent implements OnInit {

  constructor(private theMovies: MovieService) {}

  ngOnInit() {
  }

}
