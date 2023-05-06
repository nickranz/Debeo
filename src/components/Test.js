import React, { useState, useRef } from "react";
import { Container, Form, Card, Button, Alert } from "react-bootstrap";
import { addMember, addTeam } from "../functions";

export default function Test() {
  const groupNameRef = useRef();
  const [formValues, setFormValues] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // function to add a new input form
  const addForm = () => {
    setFormValues((prevValues) => [
      ...prevValues,
      { input1: "" }, // initialize the values as empty strings
    ]);
  };

  // function to handle changes in the input values
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newValues = [...formValues];
    newValues[index][name] = value;
    setFormValues(newValues);
  };

  // function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);

    try {
      setError("");
      setLoading(true);
      addTeam(groupNameRef.current.value);
      console.log("groupName:", groupNameRef.current.value);
      for (let i = 0; i < formValues.length; i++) {
        console.log("formVal: ", formValues.at(i));
        addMember(
          groupNameRef.current.value,
          formValues.at(i).input1,
          formValues.at(i).input1
        );
      }

      // await login(emailRef.current.value, passwordRef.current.value);
      // navigate("/Dashboard");
    } catch (error) {
      setError("Failed to create group");
    }
    setLoading(false);
  };

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
                    ref={groupNameRef}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-1" id="group members">
                  <Form.Label>Group Members</Form.Label>
                  {formValues.map((form, index) => (
                    <div key={index}>
                      <Form.Control
                        type="text"
                        name="input1"
                        value={form.input1}
                        className="mb-1"
                        onChange={(event) => handleInputChange(index, event)}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Button
                  onClick={addForm}
                  variant="secondary"
                  style={{ margin: 5, float: "right" }}
                  className="w-50"
                >
                  Add Member
                </Button>

                <Button type="submit" className="w-100">
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
