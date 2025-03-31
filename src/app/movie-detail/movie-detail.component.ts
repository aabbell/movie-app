import { Component, Input,} from '@angular/core';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-movie-detail',
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
                
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  @Input() movie: any

}
