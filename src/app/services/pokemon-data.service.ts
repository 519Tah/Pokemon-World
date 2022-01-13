import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  constructor( private http:HttpClient) { }

  //Getting the pokemons
  getPokemmons(limit: number, offset: number){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit='+ limit + '&offset=' + offset );
  }


  getPokemonDetail(name: any){
    
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+ name ); 
  }



  getPokemonAbilities(id: any){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+ id ); 
  }



  getPokemonAbilityDetail(path: string){
    console.log("path          " + path + '');
    return this.http.get(path); 
  }
}