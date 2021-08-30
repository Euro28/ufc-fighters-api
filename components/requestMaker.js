import {
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import initial from "../public/initialFighter.json";

export default function RequestMaker() {
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState();

  useEffect(() => {
    setQueryResult(initial);
  }, []);

  const requestFighter = async (e, name) => {
    e.preventDefault();

    const fighterData = await fetch(`/api/fighters/${name}`);
    let data = await fighterData.json();
    if (!data.message) {
      data.fights = data.fights.slice(0, 1);
    }

    setQueryResult(data);
  };

  return (
    <div>
      <form onSubmit={(e) => requestFighter(e, query)}>
        <InputGroup
          marginRight="auto"
          marginLeft="auto"
          width="900px"
          marginTop="8"
        >
          <InputLeftAddon borderColor="grey">
            https://ufc-fighters-api.vercel.app/api/fighters/
          </InputLeftAddon>
          <Input
            border="1px"
            borderColor="grey"
            placeholder=" Jon Jones"
            variant="filled"
            maxWidth="500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            variant="solid"
            colorScheme="blackAlpha"
            type="submit"
            position="relative"
            left="10px"
          >
            Request
          </Button>
        </InputGroup>
      </form>
      <div>
        <Heading
          as="h3"
          size="md"
          marginRight="auto"
          marginLeft="auto"
          position="relative"
          left="110px"
          top="20px"
        >
          Result:
        </Heading>
        <pre
          style={{
            padding: "14px",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "40px",
            maxHeight: "340px",
            overflowY: "scroll",
            fontSize: "11px",
            border: "2px solid grey",
            backgroundColor: "white",
            width: "900px",
          }}
        >
          {JSON.stringify(queryResult, null, 8)}
        </pre>
      </div>
    </div>
  );
}
