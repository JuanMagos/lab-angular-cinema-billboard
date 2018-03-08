import { Injectable  } from '@angular/core';
import movies from '../../movies';

@Injectable()
export class MovieService {

  movies = movies;
  movie = {};

  constructor() { }

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.movie = this.movies.filter(
      (movie) => movie.id == id
    )[0];
  }
}
