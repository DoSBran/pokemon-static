import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import NextLink from 'next/link';

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <NextLink href="/" replace passHref> 
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
          alt="icono"
          width={70}
          height={70}
        />
      </NextLink>

      <NextLink href="/" replace passHref>
        <span style={{flexDirection: 'row', display: 'flex'}}>
        <Text color="white" h3>
          P
        </Text>
        <Text color="white" h3>
          okemons
        </Text>
        </span>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref replace>
        <Text color="white">Favoritos</Text>
      </NextLink>
    </div>
  );
};
