import { Pokemon } from '@/interfaces'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props {
    pokemon: Pokemon
}
export const PokemonCard: FC<Props>= ({pokemon}) => {
    const {id,name,image} = pokemon;
    const router = useRouter();

    const selectPokemon = () => {
        router.push(`/name/${pokemon.name}`)
    }
  return (
    <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={1}>
    <Card onClick={selectPokemon} isHoverable isPressable>
      <Card.Body>
        <Card.Image
          src={image}
          width={"100%"}
          height={140}
        />
      </Card.Body>
      <Card.Footer>
        <Row justify="space-between">
          <Text transform="capitalize" >{name}</Text>
          <Text>#{id}</Text>
        </Row>
      </Card.Footer>
    </Card>
  </Grid>      
  )
}
