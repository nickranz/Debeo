import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { addMember, addTeam, setAdmin } from "../functions";
import { useAuth } from "../contexts/AuthContext1";
import NavBarDash from "./NavBarDash";
import { useNavigate } from "react-router-dom";

export default function CreateGroup() {
  const groupNameRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState([
    { id: 1, userName: "", email: "" },
  ]);

  // function to add a new input form
  const addForm = () => {
    setFormValues((prevValues) => [
      ...prevValues,
      { userName: "", email: "" }, // initialize the values as empty strings
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
    // console.log(formValues);
    // console.log("user: ", currentUser.email);

    try {
      // console.log("currentEmail:", currentUser.email);

      setError("");
      setLoading(true);
      addTeam(groupNameRef.current.value);
      setAdmin(groupNameRef.current.value, currentUser.email);
      for (let i = 0; i < formValues.length; i++) {
        console.log("formVal: ", formValues.at(i));
        addMember(
          groupNameRef.current.value,
          formValues.at(i).userName,
          formValues.at(i).email
        );
      }

      // await login(emailRef.current.value, passwordRef.current.value);
      navigate("/Dashboard");
    } catch (error) {
      setError("Failed to create group");
    }
    setLoading(false);
  };

  return (
    <>
      <NavBarDash />
      {/* {console.log("email", currentUser.email)} */}
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
                    placeholder="Enter Group Name"
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
                        placeholder="Enter Member's Name"
                        name="userName"
                        value={form.userName}
                        className="mb-1"
                        onChange={(event) => handleInputChange(index, event)}
                      />
                      <Form.Control
                        type="text"
                        placeholder="Enter Member's Email"
                        name="email"
                        value={form.email}
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
