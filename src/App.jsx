import PokemonCard from "./components/PokemonCard.jsx";
import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar.jsx";

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
  const [pokemonindex, setPokemonindex] = useState(0);

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonindex]} />
      <NavBar      setPokemonindex={setPokemonindex} pokemonindex={pokemonindex} />
      
    
    </>
  );
}

export default App;
