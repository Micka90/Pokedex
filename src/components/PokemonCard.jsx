function PokemonCard(props) {
  const {pokemon} = props
  

  return (
    <figure>
      <img src={pokemon.imgSrc} />
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;

