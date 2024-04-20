import PropTypes from "prop-types";


function PokemonCard({ pokemon }) {
  

  return (
    <figure className="card">
       {pokemon.name}
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} className="card-img"/> : <p>???</p>}
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
