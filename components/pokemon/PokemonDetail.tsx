import { PokemonDetail as pokemon }  from '@/interfaces'
import { favorites } from '@/utils'
import { Card, Grid, Text, Container, Button, Image } from '@nextui-org/react'
import React, { FC, useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
interface Props {
    pokemon: pokemon
}

export const PokemonDetail: FC<Props> = ({pokemon}) => {
  const [exists, setExist] = useState(false);
  useEffect(() => {
    console.log(pokemon)
    setExist(favorites.existInFavorites(pokemon.id))
  },[])
  
  const addRemovefavorites = () => {
    favorites.toggleFavorites(pokemon.id);
    setExist(!exists);
    if(exists) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin:{
        x:1,
        y:0
      }
    })
  }

  console.log(exists)
  
  return (
    <Grid.Container css={{marginTop: '5px'}} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{pading: '38px'}}>
            <Card.Body>
              <Card.Image alt={`{pokemon.name}`} src={pokemon?.sprites?.other?.dream_world?.front_default || '/image.png'}/>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8} >
          <Card>
            <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
              <Text h1 transform="capitalize">{pokemon.name}</Text>
              <Button onPress={addRemovefavorites} color='gradient' ghost={!exists}>{exists? 'Eliminar de favoritos': 'Guardar en favoritos'}</Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites: </Text>
              <Container direction="row" display="flex">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
  )
}
