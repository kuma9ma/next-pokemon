"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ReactPaginate from 'react-paginate';

const PokemonGrid = ({ pokemonList }: any) => {
    const [searchName, setSearchName] = useState("");
    const [filterList, setFilterList] = useState(pokemonList);
    const handleSearch = (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newFilterList = pokemonList.filter(
            (pokemon: any) => pokemon.name.includes(searchName)
        );
        setFilterList(newFilterList);

    }

    return (
        <div>
            <form
                className="flex justify-center w-1/2 mx-auto mb-5"
                onSubmit={handleSearch}
            >
                <Input
                    type="text"
                    className="w-1/2 mr-5"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)} />
                <Button className="hover:scale-95 transition-all duration-300">
                    Search
                </Button>
            </form>

            <div>
                <ul className="grid grid-cols-4 overflow-scroll scroll-auto h-screen border">
                    {filterList.map((pokemon: any) => {
                        return (
                            <li key={pokemon.name}
                                className="m-3 text-center">
                                <Link
                                    href={`/pokemon/${pokemon.name}`}
                                    key={pokemon.name}
                                >
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="hover:scale-105 transition-all duration-300">
                                                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                            </CardTitle>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default PokemonGrid