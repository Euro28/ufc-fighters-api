import { Box, Heading, Container, Center } from "@chakra-ui/react";
import RequestMaker from "../components/requestMaker";

export default function Home() {
  return (
    <>
      <body style={{ background: "#222" }}>
        <Box height="1000px" backgroundImage="/background.jpg">
          <Container
            backgroundColor="#F0EEE1"
            maxWidth="66.666%"
            fontFamily="Tahoma, serif"
            color="#333"
          >
            <Heading as="h3" size="lg" fontFamily="Tahoma">
              How do I use this?
            </Heading>
            All the fighter information can be accessed throgh the REST API,
            take a look at the documentation if you need any help. You can try
            querying the API with the search bar below, simply input a name and
            the api will try to match the most popular fighter, for example if
            you input khabib althrough there are multiple in the UFC only Khabib
            Nurmagamedov will be chosen. For the sake of brevity only the most
            recent fight is shown in the below helper tool. While the API
            response will contain all fights from mid 2010s
            <RequestMaker />
          </Container>
          <Heading>TODO LIST</Heading>
          Center the request bar, center the pre and give it a border and set
          the internal colour to white , add a section explaning why and what it
          is, add a copyright section
        </Box>
      </body>
    </>
  );
}
