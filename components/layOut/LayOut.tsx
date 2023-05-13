import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui'

interface props {
    children: React.ReactNode,
    title?: string,
}

const origin = (typeof window === 'undefined')? '': window.location.origin

export const LayOut: FC<props> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title || "Pokemon App"}</title>
            <meta name="author" content="Brandon Cavichioni"/>
            <meta name="description" content={`informacion del pokemon ${title}`} />
            <meta name="keywords" content={`${title}. pokemon, pokedex`}/>
            <meta property="og:title" content={`infromacion sobre ${title} `} />
            <meta property="og:description" content={`Pokedex,mostrando informacion de ${title}`}  />
            <meta property="og:image" content={`${origin}/img/banner.png `}/>
        </Head>
        <Navbar/>
        <main style={{padding: '0px 20px'}}>
            {children}
        </main>
    </>
  )
}
