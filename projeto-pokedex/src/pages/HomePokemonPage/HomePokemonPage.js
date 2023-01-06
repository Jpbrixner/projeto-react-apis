import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import Header from "../../components/Header/Header";
import { MainContainer, DisplayCards } from "../../constants/stylePages";

const HomePokemonPage = () => {

  const context = useContext(GlobalContext)
  const {pokemons}= context

    return (
      <> 
        <Header/>
          <MainContainer>
          <div><h1>Todos Pokemons</h1></div>
          <DisplayCards>
            {pokemons && pokemons
            .sort((a,b)=>{
              if(a?.id > b?.id){
                return 1
              }else{
                return-1
              }
            })
            .map((pokemon)=>( 
            <CardPokemon
            key={pokemon.id}
            pokemon={pokemon}/>
            ))}
          </DisplayCards>  
        </MainContainer>
      </>
    );
  }
  
  export default HomePokemonPage