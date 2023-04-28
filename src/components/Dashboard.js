import React, { useState } from "react";
import { Card, Button, Alert, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext1";
import { getAuth, signOut } from "firebase/auth";
import NavBarDash from "./NavBarDash";
import Task from "./Task";
import Groups from "./Groups";

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
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-2">
          </div>
          <div class="col-sm-2">
            <div class="row">
              <Container>
                <div class="card">
                  <div class="card-header bg-secondary">
                    Groups
                  </div>
                  <div class="card-body">
                    <Groups />
                  </div>
                </div>
              </Container>
            </div>
              <div class="row mb-4">
              </div>
            <div class="row">
              <Container>
                <div class="card">
                  <div class="card-header bg-secondary">
                    Transaction History
                  </div>
                  <div class="card-body">
                    Your transaction history will appear here.
                  </div>
                </div>
              </Container>
            </div>
          </div>
            <div class="col-lg-6">
              <Container>
                <div class="card w-51">
                  <div class="card-header bg-secondary">
                    <button type="button" class="btn btn-secondary btn-sm">Recent</button>
                    <button type="button" class="btn btn-secondary btn-sm">My Transactions</button>
                  </div>
                  <div class="card-body">
                    <Task />
                  </div>
                </div>
              </Container>
            </div>
        </div>
      </div>
    </>
  );
}
