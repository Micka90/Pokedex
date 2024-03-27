import PropTypes from "prop-types";

function PokemonCard(props) {
  const { pokemon } = props;

  return (
    <figure>
      <img src={pokemon.imgSrc} />
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
