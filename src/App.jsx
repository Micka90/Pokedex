import PokemonCard from "./components/PokemonCard.jsx";
import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar.jsx";

function App() {
  const [pokemonIndex, setPokemon] = useState(0);

  const handleClick = (index) => {
    setPokemon(index);
  };

  return (
    <div>
      <NavBar pokemonList={pokemonList} handleClick={handleClick} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}
export default App;
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
