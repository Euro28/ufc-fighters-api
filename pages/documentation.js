import { Box, Heading, Container, Center } from "@chakra-ui/react";
import initial from "../public/initialFighter.json";
export default function Documentation() {
  return (
    <>
      <body>
        <Box height="1000px" backgroundImage="/background.jpg">
          <Container
            backgroundColor="#F0EEE1"
            maxWidth="66.666%"
            fontFamily="Tahoma, serif"
            color="#333"
          >
            <Heading as="h3" size="md" fontFamily="Tahoma" marginBottom="10px">
              Fighters
            </Heading>
            <p>A fighter that has at some point in time fought in the UFC.</p>
            <b>Example request</b>
            <pre
              style={{
                backgroundColor: "white",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              https://ufc-fighters-api.vercel.app/api/fighters/Jon-jones
            </pre>
            <b>Example Response</b>
            <pre style={{ marginTop: "10px", marginBottom: "10px" }}>
              {JSON.stringify(initial, null, 8)}
            </pre>
            <b>Attributes</b>
            <ul style={{ marginLeft: "44px", marginTop: "10px" }}>
              <li>
                <code>name </code>
                <em>string </em>
                -- The name of the fighter.
              </li>
              <li>
                <code>nickname </code>
                <em>string </em>
                -- The nickname of the fighter.
              </li>
              <li>
                <code>association </code>
                <em>string </em>
                -- The gym which the fighter trains at
              </li>
              <li>
                <code>age </code>
                <em>integer </em>
                -- The age of the fighter
              </li>
              <li>
                <code>birthday </code>
                <em>date </em>
                -- The birthday of the fighter
              </li>
              <li>
                <code>nationality </code>
                <em>string </em>
                -- The nationality of the fighter
              </li>
              <li>
                <code>height </code>
                <em>string </em>
                -- The height in feet and inches of the fighter
              </li>
              <li>
                <code>weight </code>
                <em>string </em>
                -- The weight in pounds of the fighter
              </li>
              <li>
                <code>weight_class </code>
                <em>string </em>
                -- The weight class in the UFC in which the fighter competes
              </li>
              <li>
                <code>wins </code>
                <em>object </em>
                -- An object breaking down the different ways the fighter has
                won.
              </li>
              <li>
                <code>losses </code>
                <em>object </em>
                -- An object detailing the all the losses the fighter has.
              </li>
              <li>
                <code>fights </code>
                <em>array </em>
                -- An array which contains every fight the fighter has had.
              </li>
            </ul>
          </Container>
        </Box>
      </body>
    </>
  );
}
