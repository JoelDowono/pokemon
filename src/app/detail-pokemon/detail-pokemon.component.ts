import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private router: Router) { } //activatedRoute est le service qui permet de récupérer les paramètres dans l'url

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id') //on recupère l'id contenu dans l'url

    if(pokemonId) { //si l'identifiant est trouvé dans l'url
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }
  }

  goToPokkemonList() {
    this.router.navigate(['/pokemons']);
  }
}
