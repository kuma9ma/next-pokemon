import React from 'react'

const PokemonInfo = ({ pokemonObject }: any) => {

    const typeColors: any = {
        normal: 'gray',
        fire: 'red',
        water: 'blue',
        electric: 'yellow',
        grass: 'green',
        ice: 'lightblue',
        fighting: 'orange',
        poison: 'purple',
        ground: 'brown',
        flying: 'skyblue',
        psychic: 'pink',
        bug: 'limegreen',
        rock: 'darkgoldenrod',
        ghost: 'darkviolet',
        dragon: 'indigo',
        dark: 'darkslategray',
        steel: 'slategray',
        fairy: 'hotpink',
    };
    const getBackgroundColor = (typeName: string) => {
        return typeColors[typeName];
    };
    return (
        <div className="flex font-medium">
            <div className="flex mr-3">
                <span className="mr-1">Type:</span>
                <ul className="flex flex-col text-center">
                    {pokemonObject.types.map((pokemonType: any) => {
                        return (
                            <li className="rounded-lg px-1 mb-1"
                                style={{
                                    backgroundColor: getBackgroundColor(pokemonType.type.name)
                                }}
                            >{pokemonType.type.name}</li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <p>Height: {pokemonObject.height}</p>
                <p>Weight: {pokemonObject.weight}</p>
            </div>
        </div>
    )
}

export default PokemonInfo