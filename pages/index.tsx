import { pokeAPI } from "@/api";
import { LayOut } from "@/components/layOut";
import { PokemonCard } from "@/components/pokemon";
import { Pokemon, PokemonListResponse } from "@/interfaces";
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { GetStaticProps, NextPage } from 'next'

interface Props {
  pokemons: Pokemon[];
}
export default function Home({pokemons}: Props) {
  return (
    <>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
         <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))}
        
      </Grid.Container>
    </>
  )
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return (
    <LayOut title='Listado de Pokemons'>
      {page}
    </LayOut>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await pokeAPI.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemons: Pokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1 ,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))
  return {
    props: {
      pokemons
    }
  }
}