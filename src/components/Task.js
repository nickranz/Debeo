import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function Task() {
  return (
      <Card>
        <Card.Body>
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
        </Card.Body>
      </Card>
  );
}
