import { pokeAPI } from "@/api";
import { LayOut } from "@/components/layOut";
import { PokemonDetail } from "@/components/pokemon";
import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import { PokemonListResponse, PokemonDetail as pokemon } from "@/interfaces";
import { FC } from "react";
import { getPokemonInfo } from "@/utils";

interface Props {
  pokemon: pokemon;
}

const PokemonsByName: FC<Props> = ({ pokemon }) => {
  return (
    <LayOut title={`Pokemon ${pokemon.name}`} >
      <PokemonDetail pokemon={pokemon} />
    </LayOut>
  );
};

export default PokemonsByName;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeAPI.get<PokemonListResponse>(`/pokemon?limit=151`);
  const pokemons: string[] = data.results.map((pokemon) => pokemon.name);
  return {
    paths: pokemons.map((name) => ({
      params: { name },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const pokemon = await getPokemonInfo(name);

  if(!pokemon){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {
      pokemon
    },
    revalidate: 86400
  };
};
