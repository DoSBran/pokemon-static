import { LayOut } from "@/components/layOut";
import { FavoritePokemons, NoFavorites } from "@/components/pokemon";
import { Grid } from '@nextui-org/react';
import { useEffect, useState } from "react";
import {favorites} from "@/utils";

export default function FavotitePokemons () {
    const [pokemons, setPokemons] = useState<number[]>([]);
    
    useEffect(() => {
        setPokemons(favorites.pokemons)
    },[])
    return(
        <LayOut>
            {pokemons.length !== 0
            ?(<FavoritePokemons pokemons={pokemons}/>)
            :(<NoFavorites/>)}
        </LayOut>
    )
}