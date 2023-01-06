import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useNavigate, useLocation } from "react-router-dom";
import { goToDetailsPokemonPage } from "../../routes/coordinator";
import {
  MainCard,
  CardTop,
  CardBottom,
  CardType,
  SpriteOficialPokemon,
  ButtonDeletePokemon,
  AddPokemon,
} from "./styleCardPokemon";
import fire from "../../images/fire.svg";
import grass from "../../images/grass.svg";
import bug from "../../images/bug.svg";
import dragon from "../../images/dragon.svg";
import dark from "../../images/dark.svg";
import eletric from "../../images/eletric.svg";
import fairy from "../../images/fairy.svg";
import fighting from "../../images/fighting.svg";
import flying from "../../images/flying.svg";
import ghost from "../../images/ghost.svg";
import ground from "../../images/ground.svg";
import ice from "../../images/ice.svg";
import normal from "../../images/normal.svg";
import poison from "../../images/poison.svg";
import psychic from "../../images/psychic.svg";
import rock from "../../images/steel.svg";
import steel from "../../images/steel.svg";
import water from "../../images/water.svg";

const CardPokemon = (props) => {
  const context = useContext(GlobalContext);
  const location = useLocation();
  const navigate = useNavigate();

  const colorCard = () => {
    switch (props.pokemon.types[0].type.name) {
      case "grass":
        return "#729F92";
      case "fire":
        return "#EAAB7D";
      case "water":
        return "#71C3FF";
      case "poison":
        return "#AD61AE";
      case "flying":
        return "#6892B0";
      case "bug":
        return "#76A866";
      case "normal":
        return "#BF9762";
      case "dark":
        return "#5C5365";
      case "dragon":
        return "#0A6CBF";
      case "eletric":
        return "#F4D23B";
      default:
        return "#729F92";
    }
  };

  return (
    <>
      <MainCard key={props.pokemon.name} colorCard={colorCard} >
        <CardTop>
          <div>
            <p>
              #
              {props.pokemon.id < 10
                ? "0" + String(props.pokemon.id)
                : props.pokemon.id}
            </p>
            <h2>{props.pokemon.name}</h2>
            <span>
              <CardType >
                {props.pokemon.types.map((type) => {
                  switch (type.type.name) {
                    case "grass":
                      return <img src={grass} alt={type.type.name} />;
                    case "fire":
                      return <img src={fire} alt={type.type.name} />;
                    case "water":
                      return <img src={water} alt={type.type.name} />;
                    case "poison":
                      return <img src={poison} alt={type.type.name} />;
                    case "flying":
                      return <img src={flying} alt={type.type.name} />;
                    case "bug":
                      return <img src={bug} alt={type.type.name} />;
                    case "normal":
                      return <img src={normal} alt={type.type.name} />;
                    case "dark":
                      return <img src={dark} alt={type.type.name} />;
                    case "dragon":
                      return <img src={dragon} alt={type.type.name} />;
                    case "eletric":
                      return <img src={eletric} alt={type.type.name} />;
                    case "fairy":
                      return <img src={fairy} alt={type.type.name} />;
                    case "fighting":
                      return <img src={fighting} alt={type.type.name} />;
                    case "ghost":
                      return <img src={ghost} alt={type.type.name} />;
                    case "ground":
                      return <img src={ground} alt={type.type.name} />;
                    case "ice":
                      return <img src={ice} alt={type.type.name} />;
                    case "psychic":
                      return <img src={psychic} alt={type.type.name} />;
                    case "rock":
                      return <img src={rock} alt={type.type.name} />;
                    case "steel":
                      return <img src={steel} alt={type.type.name} />;
                    default:
                      return <img src={""} alt={type.type.name} />;
                  }
                })}
              </CardType>
            </span>
          </div>
          <div>
            <SpriteOficialPokemon
              src={
                props.pokemon.sprites?.other["official-artwork"].front_default
              }
              alt="pokemon"
            />
          </div>
        </CardTop>
        <CardBottom>
          <span>
            <a
              onClick={() =>
                goToDetailsPokemonPage(navigate, props.pokemon.name)
              }
            >
              Detalhes
            </a>
          </span>
          {location.pathname === "/" ? (
            <AddPokemon
              onClick={() => context.addPokemonPokedex(props.pokemon)}
            >
              Capturar!
            </AddPokemon>
          ) : (
            <ButtonDeletePokemon
              onClick={() => context.removePokemonPokedex(props.pokemon)}
            >
              Excluir!
            </ButtonDeletePokemon>
          )}
        </CardBottom>
      </MainCard>
    </>
  );
};

export default CardPokemon;
