import { Router } from '@angular/router';
import { PokemonService } from './../pokemon.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    //pokemonTypeList
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean { // methode qui va permettre de cheker si le pokemon choisi possède bien le type passé en paramètre au chargement du formulaire
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) { //methode qui permet de prendre en compte le nouveau type selectionner
    const isChecked: boolean = ($event.target as HTMLInputElement).checked; //checkbox cochée ou pas

    if (isChecked) { //case cochée
      this.pokemon.types.push(type); //on ajoute le type coché par l'utilisateur
    } else { //case décochée
      const index = this.pokemon.types.indexOf(type);// on reecupère l'index du type à retirer
      this.pokemon.types.splice(index, 1); //on retire le type
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) { //si l'utilisateur à cocher une case
      return false; //on l'empêche de pouvoir décocher cette case
    }

    if (this.pokemon.types.length > 2 && !this.hasType(type)) { //si l'utilisateur a déjà coché 3 cases on l'empêche de cocher une 4eme case
      return false; //on débloque la checkbox
    }

    return true;
  }

  onSubmit() { //methode pour la soumission du formulaire
    console.log('Submit form !');
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }

}
