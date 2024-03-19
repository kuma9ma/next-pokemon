
const POKEAPI = "https://pokeapi.co/api/v2/"


//すべてのポケモンの情報を取得
export async function getAllPokemon() {
    const response = await fetch(POKEAPI + "pokemon?limit=151&offset=0");
    const data = await response.json();
    return data.results;
}

//個別のポケモンの情報を取得
export async function getPokemon(name:string){
    const response = await fetch(POKEAPI + "pokemon/" + name);
    const data = await response.json();
    return data;
}