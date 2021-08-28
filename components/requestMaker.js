import {
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import styles from "../styles/styles.js";

export default function RequestMaker() {
  return (
    <div>
      <Heading as="h3"> Try it Now</Heading>
      <InputGroup>
        <InputLeftAddon>website/api/fighters</InputLeftAddon>
        <Input placeholder=" Jon Jones" variant="filled" maxWidth="550" />
        <InputRightAddon>
          <button>request button</button>
        </InputRightAddon>
      </InputGroup>
      <div style={styles.well}>
        <pre style={styles.scrollable}>{JSON.stringify(styles.well)}</pre>
      </div>
    </div>
  );
}
