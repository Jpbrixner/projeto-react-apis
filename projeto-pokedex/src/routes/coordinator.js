export const goToHomePokemonPage = (navigate) => {
  navigate("/");
};

export const goToDetailsPokemonPage = (navigate, pokemonId) => {
  navigate(`/${pokemonId}`);
};

export const goToPokedexPage = (navigate) => {
  navigate("/pokedex");
};
