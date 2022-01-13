import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';



const routes: Routes = [
  //{path: 'app', component: AppComponent},
  {path: '', redirectTo: 'PokemonList', pathMatch: 'full' },
  {path: 'PokemonList', component: PokemonListComponent},
  {path: 'PokemonDetails', component: PokemonDetailsComponent},
  {path: 'PokemonDetails/:id', component: PokemonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent = [PokemonListComponent, PokemonDetailsComponent];
