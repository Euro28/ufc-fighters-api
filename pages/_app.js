import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/navbar.js";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MMA API</title>
      </Head>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />;
      </ChakraProvider>
    </>
  );
}

export default MyApp;
