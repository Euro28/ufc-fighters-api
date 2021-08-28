import "../styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MMA API</title>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />;
      </ChakraProvider>
    </>
  );
}

export default MyApp;
