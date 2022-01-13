import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDataService } from '../services/pokemon-data.service';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxPaginationModule
  ]
})
export class PokemonListModule { 

  constructor(private dataService: PokemonDataService, private router: Router) { }
}
