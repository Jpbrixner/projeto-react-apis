import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import Header from "../../components/Header/Header";
import { MainContainer, DisplayCards } from "../../constants/stylePages";

const DetailsPokemonPage = () => {
  const context = useContext(GlobalContext);
  const params = useParams();
  const pokeName = params.pokemonId;

  return (
    <>
      <Header />

      <MainContainer>
        <div>
          <h1>Detalhes</h1>
        </div>
        <DisplayCards>
          {
          context.detailPokemon
            .filter((pokemon) => pokemon.name === pokeName)
            .map((pokemon) => (
              <DetailsCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </DisplayCards>
      </MainContainer>
    </>
  );
};

export default DetailsPokemonPage;
