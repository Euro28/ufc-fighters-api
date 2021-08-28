import { Heading } from "@chakra-ui/react";
import styles from "../styles/styles.js";
import RequestMaker from "../components/requestMaker";
import Navbar from "../components/navbar.js";

export default function Home() {
  return (
    //<div>
    //<div style={styles.centerRow}>
    //<div style={styles.jumbotron}>
    //<Heading as="h1" color="whiteAlpha.900">
    //MMA API
    //</Heading>
    //</div>
    //</div>
    <>
      <body>
        <div>
          <Navbar />
          <div
            style={{
              display: "block",
              marginRight: "-15px",
              marginLeft: "-15px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "16.66666667%",
                float: "left",
                position: "relative",
                minHeight: "1px",
                paddingRight: "15px",
                paddingLeft: "15px",
                boxSizing: "border-box",
                display: "block",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "red",
                boxShadow: "10px 10px 5px rgb(70 70 70)",
                width: "66.666667%",
                float: "left",
                position: "relative",
                minHeight: "1px",
                paddingRight: "15px",
                paddingLeft: "15px",
                display: "block",
                boxSizing: "border-box",
              }}
            >
              <div style={{ paddingTop: "10px" }}>
                <p>
                  The format should be from mma api with a main content section,
                  the sections should include why make it, how does it work, and
                  give an example request maker, include copyright section
                </p>
              </div>
              <hr
                style={{
                  marginTop: "23px",
                  marginBottom: "20px",
                  height: "1px",
                  backgroundColor: "#3f3f3f",
                  border: 0,
                  boxSizing: "content-box",
                  display: "block",
                  marginBlockStart: "0.5em",
                  marginBlockEnd: "0.5em",
                  marginInlineStart: "auto",
                  marginInlineEnd: "auto",
                  //borderTop: "1px solid #eee",
                }}
              />
              <div>
                <Heading as="h3"> Why make this ?</Heading>
                <p> this is some text</p>
                <p> this is some more text</p>
              </div>
              <hr
                style={{
                  marginTop: "23px",
                  marginBottom: "20px",
                  height: "1px",
                  backgroundColor: "#3f3f3f",
                  border: 0,
                  boxSizing: "content-box",
                  display: "block",
                  marginBlockStart: "0.5em",
                  marginBlockEnd: "0.5em",
                  marginInlineStart: "auto",
                  marginInlineEnd: "auto",
                  //borderTop: "1px solid #eee",
                }}
              />
              <div>
                <Heading as="h3"> CopyRight</Heading>
                <p> Makes use of a kaggle dataset for fight information,
                also webscrapes sherdog for fighter information</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
    //</div>
  );
}
