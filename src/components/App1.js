import React from "react";
import Signup1 from "./Signup1";
import { Container } from "react-bootstrap";
import { AuthProvider1 } from "../contexts/AuthContext1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";
import HomeScreen from "./HomeScreen";

function App() {
  return (
    <>
      <Container
        className="d-flex align-items-center 
        justify-content-center "
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider1>
              <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                <Route path="/signup" element={<Signup1 />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/updateProfile"
                  element={
                    <PrivateRoute>
                      <UpdateProfile />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </AuthProvider1>
          </Router>
        </div>
      </Container>
    </>
  );
}

export default App;
