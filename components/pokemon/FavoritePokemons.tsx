import { Card, Grid } from "@nextui-org/react";
import React from "react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

export const FavoritesPokemons = ({ pokemons }: { pokemons: number[] }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemon key={id} id={id} />
      ))}
    </Grid.Container>
  );
};
