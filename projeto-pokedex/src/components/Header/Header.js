import { useContext } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import {
  MainHeader,
  ButtonPokedex,
  ButtonDeletePokemon,
  AddPokemon,
} from "./styleHeader";
import { goToPokedexPage, goToHomePokemonPage } from "../../routes/coordinator";
import { GlobalContext } from "../../context/GlobalContext";
import logo from "../../images/logo.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(GlobalContext);

  const params = useParams();
  const pokeName = params.PokemonId;

  const thisPokemon = context.detailPokemon.find(
    (pokemon) => pokemon.name === pokeName
  );
  const isInPokedex = context.pokedex.find(
    (pokemon) => pokemon.name === pokeName
  );

  const searchPokedex = () => {
    switch (location.pathname) {
      case "/":
        return <></>;
      case `/${pokeName}`:
        return (
          <>
            {isInPokedex ? (
              <ButtonDeletePokemon
                onClick={() => {
                  context.removePokemonPokedex(thisPokemon);
                }}
              >
                Remover da Pokedex
              </ButtonDeletePokemon>
            ) : (
              <AddPokemon
                onClick={() => {
                  context.addPokemonPokedex(thisPokemon);
                }}
              >
                Capturar
              </AddPokemon>
            )}
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <MainHeader>
        <div>
          {location.pathname === "/" ? (
            ""
          ) : (
            <a onClick={() => goToHomePokemonPage(navigate)}>
              Todos os Pokemons
            </a>
          )}
        </div>
        <div>
          <img src={logo} alt="logo-pokedex" />
        </div>
        {location.pathname === `/${pokeName}` ? (
          <div>{searchPokedex()}</div>
        ) : (
          <div>
            {location.pathname === "/" ? (
              <ButtonPokedex onClick={() => goToPokedexPage(navigate)}>
                Pokédex
              </ButtonPokedex>
            ) : (
              ""
            )}
          </div>
        )}
      </MainHeader>
    </>
  );
};

export default Header;
