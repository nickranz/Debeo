import { Button, Container } from "react-bootstrap";
import NavBarDash from "./NavBarDash";
import TransactionTask from "./TransactionTask";
import Groups from "./Groups";
import { useState } from "react";
import { textAlign } from "@mui/system";

//import UpdateProfile from './UpdateProfile'

export default function Dashboard() {
  const [activeButton, setActiveButton] = useState("expense");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <>
      <div className="">
        <NavBarDash />
      </div>
      <div class="row mb-5" />
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-2" />
          <div class="col-sm-5">{/* <h1>Dashboard</h1> */}</div>
        </div>
        <div class="row mb-3" />
        <div class="row">
          <div class="col-sm-2" />
          <div class="col-sm-2">
            <div class="row">
              <Container>
                <div class="card">
                  <div class="card-header bg-info">
                    Groups
                    <Button
                      size="sm"
                      style={{ float: "right" }}
                      href="/Dashboard/CreateGroup"
                    >
                      +
                    </Button>{" "}
                  </div>
                  <div class="card-body">
                    <Groups name="Turtle" />
                    <Groups name="Lion" />
                  </div>
                </div>
              </Container>
            </div>
            <div class="row mb-4"></div>
            <div class="row">
              <Container>
                <div class="card">
                  <div class="card-header bg-info">Transaction History</div>
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
                <div className="card-header bg-info">
                  <button
                    type="button"
                    class="btn btn-info btn-sm"
                    onClick={() => handleButtonClick("expense")}
                  >
                    Recent
                  </button>
                  <button
                    type="button"
                    class="btn btn-info btn-sm"
                    onClick={() => handleButtonClick("task")}
                  >
                    My Transactions
                  </button>
                </div>
                <div class="card-body">
                  {activeButton === "task" && <TransactionTask />}
                  {activeButton === "expense" && (
                    <div style={{ textAlign: "center" }}>No recent info</div>
                  )}
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
