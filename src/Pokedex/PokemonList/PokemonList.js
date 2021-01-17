import React, { useEffect, useState } from "react";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import PokemonCard from "./PokemonCard/PokemonCard";

import { POKEMON_API_URL } from "../../constants";
import { getCache, setCache } from "../../utils/cache";

import "./PokemonList.scss";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    let pokemonsData = getCache();
    if (!pokemonsData) {
      const request = await axios.get(POKEMON_API_URL);
      const { data } = request;
      pokemonsData = data.pokemon_entries;
      setCache(pokemonsData);
    }
    setPokemons(pokemonsData.slice(0, 100));
    setLoading(false);
  }, []);

  return (
      <Grid container justify="center" spacing={4} className="pokemon-list">
        {loading && (
            <Grid container justify="center" alignItems="center" className="pokemon-list__loading">
                <CircularProgress size={100} />
            </Grid>
        )}
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <Grid item xs={4} md={2}>
              <PokemonCard pokemon={pokemon} />
            </Grid>
          ))}
      </Grid>
  );
};

export default PokemonList;
