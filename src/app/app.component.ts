import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonDataService } from './services/pokemon-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pokemon-World';
  zahl = 42;
  result : any; 

  pokemons: any[] = [];

  


  constructor(private dataService: PokemonDataService, private router: Router) { }
  ngOnInit(): void {
    
  }
  


}



