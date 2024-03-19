"use client";

import { Progress } from '@/components/ui/progress'
import React, { useEffect, useState } from 'react'

const PokemonStats = ({ pokemonObject }: any) => {


    return (
        <div>
            {pokemonObject.stats.map((pokemonStats: any) => {
                const stats = pokemonStats.base_stat;
                const [progress, setProgress] = useState(5)

                useEffect(() => {
                    const timer = setTimeout(() => setProgress(stats), 500)
                    return () => clearTimeout(timer)
                }, [])

                return (
                <div className="mb-3">
                    <p>{pokemonStats.stat.name}:{pokemonStats.base_stat}</p>
                    <Progress value={progress} />
                </div>);
            })}
        </div>
    )
}

export default PokemonStats