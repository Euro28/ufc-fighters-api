import {
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
export default function Home() {
  const well = {
    "min-height": "50px",
    padding: "19px",
    "background-color": "#1c1e22",
    "margin-bottom": "20px",
    border: "1px solid",
    "border-radius": "4px",
    "box-shadow": "inset 0 1px 1px rgb(0 0 0 / 5%)",
  };

  const scrollable = {
    "max-height": "340",
    "overflow-y": "scroll",
    color: "white",
  };
  return (
    <div>
      The below is an MMA API which is a restful data collection, which collates
      fight statistics.
      <Heading as="h2">why make this?</Heading>
      <div
        style={{
          marginLeft: "-15px",
          marginRight: "-15px",
          textAlign: "center",
        }}
      >
        <div style={{ backgroundColor: "#1c1e22", marginBottom: "30px" }}>
          <Heading as="h1" color="whiteAlpha.900">
            MMA API
          </Heading>
        </div>
      </div>
      <Heading as="h3"> Try it Now</Heading>
      <InputGroup>
        <InputLeftAddon>website/api/fighters</InputLeftAddon>
        <Input placeholder=" Jon Jones" variant="filled" maxWidth="550" />
        <InputRightAddon>
          <button>request button</button>
        </InputRightAddon>
      </InputGroup>
      <div style={well}>
        <pre style={scrollable}>test text to go in scrollabnle</pre>
      </div>
    </div>
  );
}
