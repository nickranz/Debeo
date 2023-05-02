import { Button, Card, Container, ListGroup } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import NavBarDash from "./NavBarDash";
import Task from "./Task";
import TransactionTask from "./TransactionTask";
import bobby from "../exampleData/teamMembers.json";
// import Groups from "./Groups";

//import UpdateProfile from './UpdateProfile'

export default function GroupDashboard() {
  return (
    <>
      <div>
        <NavBarDash name="Turtle" />
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
                  <button type="button" class="btn btn-secondary btn-sm">
                    Expense
                  </button>
                  <button type="button" class="btn btn-secondary btn-sm">
                    Items
                  </button>
                  <Button size="sm" style={{ float: "right" }}>
                    Add Reciept
                  </Button>
                  {/* <button type="button" class="btn btn-secondary btn-sm">
                    My Transactions
                  </button> */}
                </div>
                <div class="card-body">
                  {/* <Card className="mb-3">
                    <TransactionTask />
                  </Card> */}
                  <TransactionTask />
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
