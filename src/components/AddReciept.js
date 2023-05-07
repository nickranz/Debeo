import React, { useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext1";
import NavBarDash from "./NavBarDash";
import ItemInfo from "./ItemInfo";

export default function AddReciept() {
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [receiptList, setreceiptList] = useState([]);
  const AddMember = () => {
    return <ItemInfo />;
  };

  const addBtnClick = () => {
    if (receiptList.length < 6) {
      setreceiptList(
        receiptList.concat(<AddMember key={receiptList.length} />)
      );
    }
  };

  // function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      // console.log("currentEmail:", currentUser.email);

      setError("");
      setLoading(true);

      navigate("/GroupDashBoard");
    } catch (error) {
      setError("Failed to create group");
    }
    setLoading(false);
  };

  return (
    <>
      <div>
        <NavBarDash />
      </div>
      <Container>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 mx-auto">
              <div className="my-4">
                <Form onSubmit={handleSubmit}>
                  <div className="row mt-1 align-items-center">
                    <h4 className="mb-1">Add Receipt</h4>
                  </div>
                  <hr className="my-4" />
                  <div className="form-row">
                    <Form.Group className="col-md-6">
                      <label id="date">Date Created</label>
                      <input
                        type="text"
                        id="date"
                        className="form-control"
                        placeholder="05/08/2023"
                      />
                    </Form.Group>
                    <div className="row mb-4" />
                    <Form.Group className="col-md-6">
                      <label id="merchant">Merchant</label>
                      <input
                        type="text"
                        id="merchant"
                        className="form-control"
                        placeholder="Walmart"
                      />
                    </Form.Group>
                    <div className="row mb-4" />
                    <Form.Group className="col-md-6">
                      <label id="purchaser">Purchased By</label>
                      <input
                        type="text"
                        id="purchaser"
                        className="form-control"
                        placeholder="Jack Sparrow"
                      />
                    </Form.Group>
                  </div>
                  {receiptList}
                  <ItemInfo />
                  <div className="row mb-4" />
                  <Button
                    disabled={loading}
                    className="btn btn-primary"
                    type="submit"
                  >
                    Submit
                  </Button>
                  <Button
                    disabled={loading}
                    type="submit"
                    className="btn btn-primary mx-2"
                    onClick={addBtnClick}
                  >
                    Add another item
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
