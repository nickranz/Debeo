import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

export default function Task() {
  return (
    <Card style={{ width: "22rem" }}>
      {/* <Card.Header className=" text-center">I'm going to be a task</Card.Header> */}
      <Container>
        <Row>
          <Col>Name of User</Col>
          <Col>Name of Item</Col>
          <Col>Total Cost of Item</Col>
          <Col>Details</Col>
        </Row>
        <Row>
          <Col>Date of Purchase</Col>
        </Row>
        <Row>
          <Col>Merchant Name</Col>
        </Row>
      </Container>
    </Card>
  );
}
