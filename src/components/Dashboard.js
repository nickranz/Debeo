import React, { useState } from "react";
import { Card, Button, Alert, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext1";
import { getAuth, signOut } from "firebase/auth";
import NavBarDash from "./NavBarDash";
//import UpdateProfile from './UpdateProfile'

export default function Dashboard() {
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
    <>
      <div>
        <NavBarDash />
      </div>
      <Container>
        <div>
          <ul>hi</ul>
        </div>
      </Container>
    </>
  );
}
