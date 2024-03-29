import {
  Alert,
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Col,
} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext1";
import { getAuth, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Assets/DEBEO.svg";

const NavBarDash = (props) => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const baby = getAuth();

  // console.log("user: ", currentUser.email);

  async function handleLogout() {
    setError("");

    try {
      await signOut(baby);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Failed to logout");
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/Dashboard">
          <img
            src={Logo}
            style={{ height: 50, width: 180 }}
            alt="website logo"
          />
        </Navbar.Brand>
        <Col className="text-center"></Col>
        <Col className="text-center" style={{ fontSize: "22px" }}>
          <h1>{props.name}</h1>
        </Col>
        <Col className="text-center"></Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" />
          {error && <Alert variant="danger">{error}</Alert>}

          <Nav>
            <NavDropdown title={currentUser.email} id="basic-nav-dropdown">
              <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
              {/* <NavDropdown.Item href="/finances">Finances</NavDropdown.Item> */}
              <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarDash;
