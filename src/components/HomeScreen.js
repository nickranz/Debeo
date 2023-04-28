import React from "react";
import Navigation from "./Navigation";
import { Container } from "react-bootstrap";
import Task from "./Task";

const HomeScreen = () => {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <Container>
        <Task />
      </Container>
    </>
  );
};

export default HomeScreen;
