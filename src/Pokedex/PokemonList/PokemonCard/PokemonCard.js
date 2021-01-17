import React from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import { POKEMON_IMAGE } from "../../../constants";
import './PokemonCard.scss';

const PokemonCard = ({ pokemon }) => {
  return (
    <Card elevation={4} className="pokemon-card">
      <Grid
        container
        direction="column"
        alignItems="center"
        className="pokedex-pokemon-card"
      >
        <span>{`#${pokemon.entry_number}`}</span>
        <img src={`${POKEMON_IMAGE}/${pokemon.entry_number}.png`} />
        <span>{`Name: ${pokemon.pokemon_species.name}`}</span>
      </Grid>
    </Card>
  );
};

export default PokemonCard;
