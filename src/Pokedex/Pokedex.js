import React from "react";

import Header from './Header/Header';
import PokemonList from './PokemonList/PokemonList';

const Pokedex = () => {
    return (
    <div className="pokedex">
        <Header />
        <PokemonList />
    </div>
    )
};

export default Pokedex;
