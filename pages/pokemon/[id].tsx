import { LayOut } from "@/components/layOut";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PokemonDetail as pokemon } from "@/interfaces";
import { PokemonDetail } from "@/components/pokemon/PokemonDetail";
import { getPokemonInfo } from "@/utils";

interface Props {
  pokemon: pokemon;
}

const pokemon: NextPage<Props> = ({ pokemon }) => {
  return (
    <LayOut title={`Pokemon ${pokemon.name}`}>
      <PokemonDetail pokemon={pokemon} />
    </LayOut>
  );
};

export default pokemon;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemonIds = [...Array(151)].map((id, i) => `${i + 1}`);
  return {
    paths: pokemonIds.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {id} = params as {id: string}
  
  return {
    props: {
      pokemon: await getPokemonInfo(id),
    },
  };
};
