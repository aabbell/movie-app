import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms'
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
          CommonModule,
          HttpClientModule,
          MatIconModule,
          FormsModule,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-app';
  searchTerm:string = ''
  movies:any[] = []

  private API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=a69c7b0e"

  constructor(private http: HttpClient){
    this.searchMoives('SpiderMan')
  }

  searchMoives(title:string):void{
      this.http.get<any>(`${this.API_URL}&s=${title}`).subscribe((response) => { 
        this.movies = response.Search || []
      })
  }
  onSearch():void{
    if (this.searchTerm.trim()){
      this.searchMoives(this.searchTerm)
    }
  }
}
