import Image from 'next/image'
import React from 'react'

const PokemonImage = ({pokemonObject,pokemonName} :any) => {
    return (
        <div>
            <Image
                src={pokemonObject.sprites.front_default}
                height="250"
                width="250"
                alt={pokemonName}
                className="border m-5 shadow-md shadow-white rounded-lg" />
        </div>

    )
}

export default PokemonImage