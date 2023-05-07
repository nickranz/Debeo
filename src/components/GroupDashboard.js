import { Button, Card, Container, ListGroup } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import NavBarDash from "./NavBarDash";
import Task from "./Task";
import TransactionTask from "./TransactionTask";
import bobby from "../exampleData/teamMembers.json";
import { getTeamMembers } from "../functions";
// import Groups from "./Groups";

//import UpdateProfile from './UpdateProfile'

export default function GroupDashboard() {
  const [activeButton, setActiveButton] = useState("expense");
  var membersList = getTeamMembers("nick's");
  // const membersList = ["Bob", "Nicolas"];

  console.log("membersList: ", membersList);
  setTimeout(() => {
    console.log("bil", membersList); // This should log the fully populated array
    //Render MyComponent here with membersList as a prop
  }, 1000);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div>
        <NavBarDash name="Team: Turtle" />
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-3">
            <div class="row">
              <Container>
                <div class="card">
                  <div class="card-header bg-secondary">
                    Team Members
                    <Button
                      size="sm"
                      style={{ float: "right" }}
                      href="/addMember"
                    >
                      +
                    </Button>
                  </div>
                  <ListGroup className="text-center">
                    {bobby.map((user) => (
                      <ListGroup.Item key={user.user}>
                        {user.user}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              </Container>
            </div>
            <div class="row mb-4"></div>
            <div class="row"></div>
          </div>
          <div class="col-lg-6">
            <Container>
              <div class="card w-51">
                <div class="card-header bg-secondary">
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm"
                    onClick={() => handleButtonClick("expense")}
                  >
                    Expense
                  </button>

                  <button
                    type="button"
                    class="btn btn-secondary btn-sm"
                    onClick={() => handleButtonClick("task")}
                  >
                    Items
                  </button>
                  <Button
                    size="sm"
                    style={{ float: "right" }}
                    href="/addReciept"
                  >
                    Add Reciept
                  </Button>
                  {/* <button type="button" class="btn btn-secondary btn-sm">
                    My Transactions
                  </button> */}
                </div>
                <div class="card-body">
                  {activeButton === "task" && <TransactionTask />}
                  {activeButton === "expense" && (
                    <div>Expense Info...(still a work in progress)</div>
                  )}
                  {/* <Card className="mb-3">
                    <TransactionTask />
                  </Card> */}
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
