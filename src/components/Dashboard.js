import { Button, Container } from "react-bootstrap";
import NavBarDash from "./NavBarDash";
import TransactionTask from "./TransactionTask";
import Groups from "./Groups";

//import UpdateProfile from './UpdateProfile'

export default function Dashboard() {
  return (
    <>
      <div>
        <NavBarDash />
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <div class="row">
              <Container>
                <div class="card">
                  <div class="card-header bg-secondary">
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
                <div className="card-header bg-secondary">
                  <button type="button" class="btn btn-secondary btn-sm">
                    Recent
                  </button>
                  <button type="button" class="btn btn-secondary btn-sm">
                    My Transactions
                  </button>
                </div>
                <div class="card-body">
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
