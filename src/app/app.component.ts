import { Component, OnInit } from '@angular/core';
import {Pokemon} from "./pokemon";
import {POKEMONS} from "./mock-pokemon-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pokemonList = POKEMONS;
  pokemonSelected: Pokemon;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    let id = +pokemonId;
    this.pokemonSelected = this.pokemonList[id];
    //console.log(`Vous avez cliqué sur le pokemon ${this.pokemonList[id].name}`);
  }
}
