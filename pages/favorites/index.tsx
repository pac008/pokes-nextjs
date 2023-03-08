import React, { useEffect, useState } from "react";
import { Layout } from "@/components/layouts";
import { pokemons } from "@/utils";
import { NoFavorite } from "@/components/ui";
import { FavoritePokemons } from "@/components/pokemon/FavoritePokemons";

const FavoritePage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(pokemons());
  }, []);

  return (
    <Layout title="Pokemons - favorites">
      {favoritePokemons.length === 0 ? (
        <NoFavorite />
      ) : (
        <FavoritePokemons favoritePokemonIds={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritePage;
