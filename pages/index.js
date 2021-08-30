import { Box, Heading, Container, Center } from "@chakra-ui/react";
import RequestMaker from "../components/requestMaker";

export default function Home() {
  return (
    <>
      <body >
        <Box height="1000px" backgroundImage="/background.jpg">
          <Container
            backgroundColor="#F0EEE1"
            maxWidth="66.666%"
            fontFamily="Tahoma, serif"
            color="#333"
          >
            <Heading as="h3" size="md" fontFamily="Tahoma">
              My Motivation for making this?
            </Heading>
            <p>
              Personally as a huge fan of MMA and sports betting as well, I have
              gut feelings about certain fighters, and questions like the win
              percentage of fighters as they age, relative to the age of their
              opponents and whether a wrestling or striking style ages better
              are hard to answer so hopefully this API could give some hints
              towards the answers. the database currently only contains fight
              from around early to mid 2010s onwards, possible future work could
              include more organisations be added or even boxers could also be
              added.{" "}
            </p>
            <Heading as="h3" size="md" fontFamily="Tahoma" marginBottom="10px">
              How do I use this?
            </Heading>
            <p>
              All the fighter information can be accessed throgh the REST API,
              take a look at the documentation if you need any help. You can try
              querying the API with the search bar below, simply input a name
              and the api will try to match the most popular fighter, for
              example if you input khabib althrough there are multiple in the
              UFC only Khabib Nurmagamedov will be chosen. For the sake of
              brevity only the most recent fight is shown in the below helper
              tool. While the API response will contain all fights the fighter
              has had in the UFC.
            </p>
            <RequestMaker />
            <Heading as="h3" size="md" fontFamily="Tahoma">
              CopyRight
            </Heading>
            <p>
              The main fight dataset is from kaggle listed{" "}
              <a
                href="https://www.kaggle.com/mdabbert/ultimate-ufc-dataset"
                style={{ color: "blue" }}
              >
                here
              </a>
            </p>
            <p>The project is also open source and carries an MIT license.</p>
            <p>
              Miscellaneous fighter information is web scraped from Sherdog.
            </p>
          </Container>
        </Box>
      </body>
    </>
  );
}
