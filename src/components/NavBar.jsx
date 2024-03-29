// eslint-disable-next-line react/prop-types
function NavBar({ setPokemonindex, pokemonindex }) {
  return (
    <>
      {pokemonindex > 0 ? (
        <button onClick={() => setPokemonindex(pokemonindex - 1)}>
          Précendent
        </button>
      ) : null}
      <button onClick={() => setPokemonindex(pokemonindex + 1)}>Suivant</button>
    </>
  );
}

export default NavBar;
