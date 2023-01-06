import { useEffect, useState } from "react";
import axios from "axios";
import Router from "./routes/Router";
import { BASE_URL } from "./constants/url";
import { GlobalStyled } from "./GlobalStyle";
import { GlobalContext } from "./context/GlobalContext";
import Modal from "./components/Modal/Modal";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [action, setAction] = useState("");
  const [detailPokemon, setDetailPokemon] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    browserPokemon();
  }, []);

  const browserPokemon = async () => {
    let i = 1;

    const auxPokemon = [...new Set(pokemons)];

    if (pokemons.length > 0) {
      return;
    } else {
      while (i <= 20) {
        try {
          const response = await axios.get(`${BASE_URL}/${i}`);
          auxPokemon.push(response.data);
          setPokemons(auxPokemon);
          setDetailPokemon(auxPokemon);
        } catch (error) {
          console.log(error);
        }
        i++;
      }
    }
  };

  function addPokemonPokedex(pokemonAdd) {
    setShowModal(true);
    setAction("add");
    const pokemonOnList = pokemons.filter(
      (pokemon) => pokemon.id !== pokemonAdd.id
    );

    const newBrowserPokedex = [...pokedex, pokemonAdd];
    setPokedex(newBrowserPokedex);
    setPokemons(pokemonOnList);
  }

  function removePokemonPokedex(pokemonAdd) {
    setShowModal(true);
    setAction("remove");
    const pokemonOnPokedex = pokedex.filter(
      (pokemon) => pokemon.id !== pokemonAdd.id
    );

    const newBrowserPokelist = [...pokemons, pokemonAdd];
    setPokedex(pokemonOnPokedex);
    setPokemons(newBrowserPokelist);
  }

  const context = {
    pokemons,
    setPokemons,
    detailPokemon,
    setDetailPokemon,
    pokedex,
    setPokedex,
    addPokemonPokedex,
    removePokemonPokedex,
    action,
    setAction,
    showModal,
    setShowModal,
  };

  return (
    <>
      <GlobalStyled />
      <GlobalContext.Provider value={context}>
        <Router />
        {showModal ? <Modal action={action} /> : ""}
      </GlobalContext.Provider>
    </>
  );
}

export default App;
