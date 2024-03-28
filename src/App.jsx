import PokemonCard from "./components/PokemonCard.jsx";
import "./App.css";
import { useState } from "react";


const pokemonList = [
{
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {

const [pokemonindex, setIndex] =useState (0)

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonindex]} />

      {pokemonindex > 0 ?<button onClick={() => setIndex (pokemonindex -1) }> Précendent</button> : null} 
      <button onClick={ () => setIndex (pokemonindex + 1)}>Suivant</button>
    </>
  );
}

export default App;
