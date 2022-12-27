import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {

  pokemon: Pokemon;
  constructor() { }

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }

}
