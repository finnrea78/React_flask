import React from "react";
import { Container, Button } from "react-bootstrap";

const Welcome = () => {
  const jumbotron = {
    padding: "2Rem 1Rem",
    marginBottom: "2Rem",
    backgroundColor: "#e9ecef",
    borderRadius: ".3Rem",
  };

  return (
    <Container style={jumbotron} className="m-3">
      <h1>Images Gallary</h1>
      <p>Simple application to search and display images using Unsplash API</p>
      <p>
        <Button href="https://unsplash.com/" variant="primary" target="_blank">
          Learn more
        </Button>
      </p>
    </Container>
  );
};

export default Welcome;
