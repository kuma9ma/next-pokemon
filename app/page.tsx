
import { getAllPokemon, getPokemon } from "./lib/pokeApi";
import PokemonGrid from "./components/PokemonGrid";

export default async function Home() {
  // ポケモンリストを取得
  const pokemonList = await getAllPokemon();

  return (
    <>
      <PokemonGrid pokemonList={pokemonList} />
    </>
  );
}
