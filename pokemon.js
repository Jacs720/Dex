import { pokemons } from './data.js';
import {typeImages} from './data.js';
import { stats } from './stats.js';

console.log(pokemons);
// Agrega un evento de clic a los elementos que representan a los Pokémon
document.querySelectorAll(".pokemon").forEach(pokemonElement => {
    pokemonElement.addEventListener("click", () => {
        // Obtén el ID o el nombre del Pokémon al que se le dio clic
        const pokemonId = parseInt(pokemonElement.dataset.id);
        // Busca el objeto del Pokémon correspondiente en la matriz pokemons
        const pokemonData = pokemons.find(pokemon => pokemon.id === pokemonId);
        // Actualiza el contenido de los elementos predeterminados con la información del Pokémon
        document.querySelector("#pokemon-name").textContent = pokemonData.name;
        document.querySelector("#pokemon-image").src = pokemonData.image;
        // ... Agrega aquí más código para actualizar el resto de los elementos
    });
});
