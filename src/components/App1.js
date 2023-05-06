import React from "react";
import Signup1 from "./Signup1";

import { AuthProvider1 } from "../contexts/AuthContext1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./Settings";
import HomeScreen from "./HomeScreen";
import CreateGroup from "./CreateGroup";
import GroupDashboard from "./GroupDashboard";
import AddReciept from "./AddReciept";
import Test from "./Test";

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
            <Route
              path="/dashboard/creategroup"
              element={
                <PrivateRoute>
                  <CreateGroup />
                </PrivateRoute>
              }
            />
            <Route
              path="/groupdashboard"
              element={
                <PrivateRoute>
                  <GroupDashboard />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/Test" element={<Test />} />

            <Route
              path="/Settings"
              element={
                <PrivateRoute>
                  <UpdateProfile />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/AddReciept"
              element={
                <PrivateRoute>
                  <AddReciept />
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
