import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms'
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@Component({
  selector: 'app-root',
  imports: [
          CommonModule,
          HttpClientModule,
          MatIconModule,
          FormsModule,
          MovieDetailComponent,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-app';
  searchTerm:string = ''
  movies:any[] = []
  selectedMovie: any = null
  showListView: boolean = true

  private API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=a69c7b0e"

  constructor(private http: HttpClient){
    this.searchMoives('cars')
  }

  searchMoives(title:string):void{
      this.http.get<any>(`${this.API_URL}&s=${title}`).subscribe((response) => { 
        this.movies = response.Search || []
        this.selectedMovie = null
        console.log(response)
      })
  }
  onSearch():void{
    if (this.searchTerm.trim()){
      this.searchMoives(this.searchTerm)
    }
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
