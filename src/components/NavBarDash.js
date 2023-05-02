import { Alert, Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext1";
import { getAuth, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBarDash = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const baby = getAuth();

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
        <Navbar.Brand href="/Dashboard">Debeo</Navbar.Brand>
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
