import React from "react";
import { Container, Box, TextBox, ImageBox, H1 } from "./Styles";
import "./App.css";

const imageVariants = {
  beforeHover: {},
  onHover: { scale: 1.4 },
};

const textVariants = {
  beforeHover: { opacity: 0 },
  onHover: { opacity: 1 },
};

const H1Variants = {
  initial: { y: -100 },
  animate: { y: 0, transition: { delay: 0.7 } },
};

function App() {
  return (
    <div className="App">
      <Container>
        <H1 variants={H1Variants}>
          Hover over the box to see the magic happen 🌠
        </H1>
        <Box initial="beforeHover" whileHover="onHover">
          <ImageBox variants={imageVariants} />
          <TextBox variants={textVariants}>
            {" "}
            Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat
            tbh semiotics artisan synth stumptown gastropub cornhole celiac
            swag.{" "}
          </TextBox>
        </Box>
      </Container>
    </div>
  );
}

export default App;
