import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  pokemons: number[];
}
export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  const router = useRouter()
  
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <Grid key={id} xs={6} sm={3} md={2} xl={1}>
          <Card onPress={() => router.replace(`/pokemon/${id}`)} isHoverable isPressable>  
            <Card.Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            />
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};
