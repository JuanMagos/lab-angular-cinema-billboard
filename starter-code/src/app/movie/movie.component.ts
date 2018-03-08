import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [ MovieService ]
})
export class MovieComponent implements OnInit {
  movieId = '';

  constructor(private router: Router, private activate: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.activate.params
    .subscribe((params) => {
      this.movieId = params['id'];
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
