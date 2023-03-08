import { GetStaticProps, NextPage } from "next";
import { Inter } from "next/font/google";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { Layout } from "@/components/layouts/Layout";
import { pokeApi } from "@/api";
import { PokemonListResp, SmallPokemon } from "@/interfaces";
import { PokemonCard } from "@/components/pokemon";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  pokemons: SmallPokemon[];
}

const Homepage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title="listado de pokes">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResp>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => {
    return {
      ...poke,
      id: i + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        i + 1
      }.png`,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default Homepage;
