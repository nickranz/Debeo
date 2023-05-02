import React from "react";
import { Button, Container, Row } from "react-bootstrap";

export default function Groups(props) {
  return (
    <Container>
      <Row>
        <Button
          variant="primary"
          size="sm"
          className="mb-2"
          href="/GroupDashBoard"
        >
          {props.name}
        </Button>
      </Row>
    </Container>
  );
}
