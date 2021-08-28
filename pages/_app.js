import "../styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MMA API</title>
      </Head>
      <ChakraProvider>
        <Navbar/>
        <Component {...pageProps} />;
      </ChakraProvider>
    </>
  );
}

export default MyApp;
