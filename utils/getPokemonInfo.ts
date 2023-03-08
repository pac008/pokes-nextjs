import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

export const getPokemonInfo = async (param: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${param}`);
  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: {
      front_default: data.sprites.front_default,
      back_default: data.sprites.back_default,
      back_shiny: data.sprites.back_shiny,
      other: {
        dream_world: {
          front_default: data.sprites.other?.dream_world.front_default
        }
      }
    },
  };
  return pokemon;
};
