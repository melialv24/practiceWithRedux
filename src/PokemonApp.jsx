import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemons";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoading ? "True" : "False"}</span>

      <ul>
        {pokemons.map((pokemon) => (
          <li>{pokemon.name}</li>
        ))}
      </ul>

      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next Page
      </button>
    </>
  );
};
