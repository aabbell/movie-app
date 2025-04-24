import { Component } from '@angular/core';
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
  imports: [
     MatFormFieldModule,
     MatSelectModule, 
     MatInputModule, 
     FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  options: Option[] = [
    {value: 'popular-0', viewValue: 'Popular'},
    {value: 'now-playing' , viewValue: 'Now Playing'},
    {value: 'upcoming', viewValue: 'upcoming'},
    {value: 'Top Rated', viewValue: 'Top Rated'},
  ];
}
