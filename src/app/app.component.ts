import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms'
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NavComponent } from './nav/nav.component';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [
          CommonModule,
          HttpClientModule,
          MatIconModule,
          FormsModule,
          MovieDetailComponent,
          NavComponent,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
  searchTerm:string = ''
  movies:any[] = []
  selectedMovie: any = null
  showListView: boolean = true
  watchlst:boolean = false


  private readonly API_KEY = environment.API;
  private readonly Base_URL = environment.BASE_URL;
 
  
  constructor(private http: HttpClient){
    this.loadPopular()

  }
  
  loadPopular():void{
    const url =  (`${this.Base_URL}/movie/popular?api_key=${this.API_KEY}`)
    console.log(url)
    this.fetchMovies(url)
  }

  searchMoives(title:string):void{
    if(!title.trim()){
      this.loadPopular()
      return

    }else{
      const url = (`${this.Base_URL}/search/movie?api_key=${this.API_KEY}&query=${encodeURIComponent(title)}`)
      this.fetchMovies(url)
    }  
  }
  fetchMovies(url:string):void{
    this.http.get<any>(url).subscribe({
      next:(response) =>{ 
      this.movies = response.results || []
      console.log(this.movies)
      this.selectedMovie = null
      console.log(response)
      },
      error: (err) =>{
        console.error('error fetching movies: ', err)
        this.movies = []
      }
  })
  }
  onSearch():void{
      this.searchMoives(this.searchTerm)
  
  }

  selectMovie(movie: any): void{
    this.showListView = false
    this.selectedMovie = movie
  }

  backToList(): void{
    this.selectedMovie = null
    this.showListView = true
  }
  
}
 
