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
    fallback: 'blocking',
  };
};


export const getStaticProps: GetStaticProps = async ({params}) => {
  const {id} = params as {id: string}
  const pokemon = await getPokemonInfo(id);

  if(!pokemon){
    return {
      redirect: {
        destination: '/',  
        permanent: false,
      }
    }
  }

  return {
    props: {
      pokemon: pokemon,
    },
    revalidate: 86400
  };
  
  
};
