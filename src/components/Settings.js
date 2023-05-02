import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext1";
import NavBarDash from "./NavBarDash";

export default function Settings() {
  const emailRef = useRef();
  const { currentUser } = useAuth();
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
      <div>
        <NavBarDash />
      </div>
      <Container>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-lg-10 col-xl-8 mx-auto">
              <div class="my-4">
                <Form>
                  <div class="row mt-1 align-items-center">
                      <h4 class="mb-1">User Profile</h4>
                      <h7 class="mb-1">{currentUser.email}</h7>
                    </div>
                    <hr class="my-4" />
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="firstname">First name</label>
                            <input type="text" id="firstname" class="form-control" placeholder="Jack" />
                        </div>
                        <div class="row mb-4" />
                        <Form.Group class="col-md-6">
                            <label for="lastname">Last name</label>
                            <input type="text" id="lastname" class="form-control" placeholder="Sparrow" />
                        </Form.Group>
                    </div>
                    <div class="row mb-4" />
                    <Form.Group>
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="jacksparrow@email.com" />
                    </Form.Group>
                    <div class="row mb-4" />
                    <div class="form-group">
                        <label for="inputAddress5">Address</label>
                        <input type="text" class="form-control" id="inputAddress5" placeholder="P.O. Box 464, 5975 Eget Avenue" />
                    </div>
                    <div class="row mb-4" />
                    <div class="form-row">
                        <Form.Group class="col-md-6">
                            <label for="inputCompany5">Company</label>
                            <input type="text" class="form-control" id="inputCompany5" placeholder="Company Ltd" />
                        </Form.Group>
                        <div class="row mb-4" />
                        <Form.Group class="col-md-4">
                            <label for="inputState5">State</label>
                            <input type="text" class="form-control" id="inputState5" placeholder="Virginia" />
                        </Form.Group>
                        <div class="row mb-4" />
                      <Form.Group class="col-md-2">
                        <label for="inputZip5">Zip</label>
                        <input type="text" class="form-control" id="inputZip5" placeholder="12345" />
                      </Form.Group>
                    </div>
                    <hr class="my-4" />
                    <div class="row mb-4">
                      <div class="col-md-6">
                        <Form.Group>
                          <label for="inputPassword4">Old Password</label>
                          <input type="password" class="form-control" id="inputPassword5" />
                        </Form.Group>
                        <div class="row mb-4" />
                        <Form.Group>
                          <label for="inputPassword5">New Password</label>
                          <input type="password" class="form-control" id="inputPassword5" />
                        </Form.Group>
                        <div class="row mb-4" />
                        <Form.Group>
                          <label for="inputPassword6">Confirm Password</label>
                          <input type="password" class="form-control" id="inputPassword6" />
                        </Form.Group>
                      </div>
                    <div class="col-md-6">
                      <p class="mb-2">Password requirements</p>
                      <p class="small text-muted mb-2">To create a new password, you have to meet all of the following requirements:</p>
                      <ul class="small text-muted pl-4 mb-0">
                        <li>Minimum 8 character</li>
                        <li>At least one special character</li>
                        <li>At least one number</li>
                        <li>Can’t be the same as a previous password</li>
                      </ul>
                    </div>
                  </div>
                  <Button disabled={loading} class="btn btn-primary" type="submit">
                    Save Changes
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
