import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PokemonDataService } from '../services/pokemon-data.service';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
   
  private id: any;
  private sub: any;
  pokemon : any;
  path:any;
  constructor( private _router: ActivatedRoute, private dataService: PokemonDataService) { }

  ngOnInit(): void {
    this.sub = this._router.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.dataService.getPokemonAbilities(this.id)
      .subscribe((abilities : any) =>{
        this.pokemon = abilities;
        this.pokemon.abilities.forEach((element: { ability: { url: any; }; }) => { 
        //this.dataService.getPokemonAbilityDetail(element.ability.url)
        //console.log(element.ability.url);
        });
        
        //this.pokemons.push(result);
        //this.pushingPokemonToArray(Uniqueresponse);

      });

      // In a real app: dispatch action to load the details here.
   });
   
 }
}




// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'product-details',
//   template: `
//     <div>
//       Showing product details for product: {{id}}
//     </div>
//   `,
// })
// export class LoanDetailsPage implements OnInit, OnDestroy {
//   id: number;
//   private sub: any;

//   constructor(private route: ActivatedRoute) {}

//   ngOnInit() {
   

//   ngOnDestroy() {
//     this.sub.unsubscribe();
//   }
// }