import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext1";

export default function CreateGroup() {
  const emailRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [memberList, setMemberList] = useState([]);
  const AddMember = () => {
    return (
      <Form.Control type="member" className="mb-1" placeholder="Enter Email" />
    );
  };

  const addBtnClick = () => {
    if (memberList.length < 6) {
      setMemberList(memberList.concat(<AddMember key={memberList.length} />));
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      // await login(emailRef.current.value, passwordRef.current.value);
      navigate("/Dashboard");
    } catch (error) {
      setError("Failed to create group");
    }
    setLoading(false);
  }
  return (
    <>
      <Container
        className="d-flex align-items-center 
        justify-content-center "
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}

              <Card.Header style={{ textAlign: "center" }}>
                Add a Group
              </Card.Header>

              <Form onSubmit={handleSubmit}>
                <Form.Group id="group name">
                  <Form.Label>Group Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    ref={emailRef}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-1" id="group members">
                  <Form.Label>Group Members</Form.Label>
                  {memberList}
                </Form.Group>

                <Button
                  variant="secondary"
                  style={{ margin: 5, float: "right" }}
                  className="w-50"
                  onClick={addBtnClick}
                >
                  add a Member
                </Button>
                <Button disabled={loading} className="w-100" type="submit">
                  Create Group
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
