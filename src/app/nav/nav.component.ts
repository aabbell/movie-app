import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

interface Option{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
     MatFormFieldModule,
     MatSelectModule, 
     MatInputModule, 
     FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @Output() optionSelected = new EventEmitter<string>()
  selectedOption = 'popular'

  options: Option[] = [
    {value: 'popular', viewValue: 'Popular'},
    {value: 'now_playing' , viewValue: 'Now Playing'},
    {value: 'upcoming', viewValue: 'upcoming'},
    {value: 'top_rated', viewValue: 'Top Rated'},
  ]
  onSelectionChange():void{
    console.log('selected option: ' ,this.selectedOption)
    this.optionSelected.emit(this.selectedOption)
  }
}
