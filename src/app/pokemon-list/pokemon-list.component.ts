import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonDataService } from '../services/pokemon-data.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  title = 'Pokemon-World';
  result: any;

  pokemons: any[] = [];
  page = 1;
  maxPokemonNumber: any;

  constructor(private dataService: PokemonDataService, private router: Router) { }

  ngOnInit() {
    this.getPokemonData();
  }


  getPokemonData() {
    this.dataService.getPokemmons(10, this.page + 0)


      .subscribe((response: any) => {
        this.maxPokemonNumber = response.count;



        response.results.forEach((result: { name: any; }) => {
          this.dataService.getPokemonDetail(result.name)


            .subscribe((Uniqueresponse: any) => {
              this.pokemons.push(Uniqueresponse);

            });
        });
      });
  }

  detailPage(id: number) {
    this.router.navigate(['PokemonDetails/' + id]);
  }

}
