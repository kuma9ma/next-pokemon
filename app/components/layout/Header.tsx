import React from 'react'
import ToggleButton from "./ToggleButton"
import Link from 'next/link'

const Header = () => {

    return (
        <div>
            <header className="flex justify-between items-center mx-3 my-2">
                <Link
                    className="text-2xl font-bold transition hover:opacity-95 hover:scale-95 duration-300"
                    href="/">
                    Pokemon Illustrated Book
                </Link>
                <ToggleButton />
            </header>
        </div>
    )
}

export default Header