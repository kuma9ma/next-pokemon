"use client";

import { Progress } from '@/components/ui/progress'
import React, { useEffect, useState } from 'react'

const PokemonStats = ({ pokemonObject }: any) => {

    

    return (
        <div>
            {pokemonObject.stats.map((pokemonStats: any) => {
                const stats = pokemonStats.base_stat;


                return (
                    <div key={pokemonObject.id} className="mb-3">
                        <p>{pokemonStats.stat.name}:{pokemonStats.base_stat}</p>
                        <Progress value={pokemonStats.base_stat} />
                    </div>);
            })}
        </div>
    )
}

export default PokemonStats