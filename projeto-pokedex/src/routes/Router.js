import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePokemonPage from "../pages/HomePokemonPage/HomePokemonPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import DetailsPokemonPage from "../pages/DetailsPokemonPage/DetailsPokemonPage";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePokemonPage/>}/>
        <Route path="/pokedex" element={<PokedexPage/>}/>
        <Route path="/:pokemonId" element={<DetailsPokemonPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
