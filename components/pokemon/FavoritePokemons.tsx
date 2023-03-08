import React, { FC } from "react";
import { Grid } from "@nextui-org/react";
import { FavoriteCard } from "./FavoriteCard";

interface Props {
  favoritePokemonIds: number[];
}

export const FavoritePokemons:FC<Props> = ({ favoritePokemonIds }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemonIds.map((id) => (
        <FavoriteCard id={id} key={id} />
      ))}
    </Grid.Container>
  );
};
