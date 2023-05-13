import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "../themes";
import { NextPage } from "next";
type indexLayout = NextPage & {
  getLayout: (page: JSX.Element) => JSX.Element
}

type indexPage = AppProps & {
  Component: indexLayout
}

export default function App({ Component, pageProps }: indexPage) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <NextUIProvider theme={darkTheme}>
     { getLayout(<Component {...pageProps} />)}
    </NextUIProvider>
  );
}
