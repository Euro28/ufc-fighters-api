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
            <Heading as="h3" size="md" fontFamily="Tahoma">
              CopyRight
            </Heading>
            <p>The main fight dataset is from kaggle listed here</p>
            <Heading as="h3" size="md" fontFamily="Tahoma">
              My Motivation for making this?
            </Heading>
            <p>
              Personally as a huge fan of MMA and sports betting as well, I have
              gut feelings about certain fighters, and questions like the win
              percentage of fighters as they age, relative to the age of their
              opponents and whether a wrestling or striking style ages better,
              the database currently only contains fight from around early to
              mid 2010s onwards, possible future work more organisations could
              be added or even boxers could also be added.{" "}
            </p>
          </Container>
        </Box>
      </body>
    </>
  );
}
