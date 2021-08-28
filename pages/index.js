import { Heading } from "@chakra-ui/react";
import styles from "../styles/styles.js";
import RequestMaker from "../components/requestMaker";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <RequestMaker/>
        </div>
      </div>
    </>
  );
}
