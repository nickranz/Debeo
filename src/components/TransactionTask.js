import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import reciept from "../exampleData/data2.json";

export default function TransactionTask() {
  return (
    <Card style={{ width: "29rem" }}>
      {/* <Card.Header className=" text-center">I'm going to be a task</Card.Header> */}
      <Card.Header>This is user's transactions task.</Card.Header>
      <Container>
        <Row>
          <Col> Nick paid Mike {reciept.total}</Col>
          {/* <Col>Name of User</Col>
          <Col>{reciept.description}</Col>
          <Col>Total Cost of Item {reciept.total}</Col>
          <Col>Details</Col> */}
        </Row>
        <Row>
          <Col style={{ fontSize: "10px" }}>{reciept.date}</Col>
        </Row>
        <Row>
          <Col style={{ fontSize: "10px" }}>{reciept.description}</Col>
        </Row>
      </Container>
    </Card>
  );
}
