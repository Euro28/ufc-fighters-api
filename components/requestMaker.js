import {
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

export default function RequestMaker() {
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState();

  const requestFighter = async (e, name) => {
    e.preventDefault();

    const fighterData = await fetch(`/api/fighters/${name}`);
    let data = await fighterData.json();
    data.fights = data.fights.slice(0, 3);

    setQueryResult(data);
  };

  return (
    <div>
      <Heading as="h3"> Try it Now</Heading>
      <form onSubmit={(e) => requestFighter(e, query)}>
        <InputGroup>
          <InputLeftAddon>website/api/fighters</InputLeftAddon>
          <Input
            placeholder=" Jon Jones"
            variant="filled"
            maxWidth="550"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <InputRightAddon>
            <Button variant="solid" colorScheme="blackAlpha" type="submit">
              Request
            </Button>
          </InputRightAddon>
        </InputGroup>
      </form>
      <div>
        <pre style={{ maxHeight: "340px", overflowY: "scroll" }}>
          {JSON.stringify(queryResult, null, 2)}
        </pre>
      </div>
    </div>
  );
}
