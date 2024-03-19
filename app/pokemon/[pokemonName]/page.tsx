

import PokemonGrid from '@/app/components/PokemonGrid';
import PokemonImage from '@/app/components/PokemonImage';
import PokemonInfo from '@/app/components/PokemonInfo';
import PokemonStats from '@/app/components/PokemonStats';
import { getPokemon } from '@/app/lib/pokeApi';
import Image from 'next/image';
import React from 'react'


async function PokemonPage({ params }: { params: { pokemonName: string } }) {
    const { pokemonName } = params;
    const pokemonObject = await getPokemon(pokemonName);

    return (
        <div>
            <div className="w-1/2 py-5 mx-auto bg-gray-500 rounded-lg">
                <div className="flex justify-center items-center">
                    <div className="flex flex-col items-center mr-10">
                        <h2 className="text-4xl font-bold">
                            <span className="mr-2 font-medium text-xl">No:{pokemonObject.order}</span>
                            {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
                        </h2>
                        <p>{pokemonObject.base_experience}</p>
                        <PokemonImage pokemonObject={pokemonObject} />
                        <PokemonInfo pokemonObject={pokemonObject} />
                    </div>
                    <PokemonStats pokemonObject={pokemonObject} />
                </div>
            </div>
        </div>

    )
}

export default PokemonPage