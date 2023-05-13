import { pokeAPI } from "@/api";
import { PokemonDetail } from "@/interfaces";

export const getPokemonInfo = async(nameOrId: string) => {
  try {
    const { data } = await pokeAPI.get<PokemonDetail>(`/pokemon/${nameOrId}`);
    const pokemon = {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
    return pokemon;
  } catch (error) {
    return null;
  }
    
}
