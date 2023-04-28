import React from "react";
import Signup1 from "./Signup1";

import { AuthProvider1 } from "../contexts/AuthContext1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";
import HomeScreen from "./HomeScreen";
import CreateGroup from "./CreateGroup";

function App() {

  // return <div className = "App"> Hello </div>
  return (
    <>
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
                <Route path="/dashboard/creategroup" element={<CreateGroup />}/>
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
    </>
  );
}

export default App;
