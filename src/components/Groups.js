import React from "react";
import { Button, Container, Row,} from "react-bootstrap";

export default function Groups() {
  return (
    <Container>
      <Row>
        <Button variant="primary" size="sm" className="mb-2" href = "/GroupDashBoard">
          Team Turtles
        </Button>
      </Row>
    </Container>
  );
}
