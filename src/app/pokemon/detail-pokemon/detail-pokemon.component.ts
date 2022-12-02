import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonservice: PokemonService) { } //activatedRoute est le service qui permet de récupérer les paramètres dans l'url

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id') //on recupère l'id contenu dans l'url

    if(pokemonId) { //si l'identifiant est trouvé dans l'url
      this.pokemonservice.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon = pokemon);
    }
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonservice.deletePokemonById(pokemon.id).subscribe(() => this.goToPokkemonList());
  }

  goToPokkemonList() {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['edit/pokemon', pokemon.id])
  }
}
