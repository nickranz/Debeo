import React, { useRef, useState } from "react";
import {Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext1";
import NavBarDash from "./NavBarDash";
import ItemInfo from "./ItemInfo"

export default function AddReciept() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <NavBarDash />
      </div>
      <Container>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-lg-10 col-xl-8 mx-auto">
              <div class="my-4">
                <Form>
                  <div class="row mt-1 align-items-center">
                      <h4 class="mb-1">Add Reciept</h4>
                    </div>
                    <hr class="my-4" />
                    <div class="form-row">
                        <Form.Group class="col-md-6">
                            <label for="date">Date Created</label>
                            <input type="text" id="date" class="form-control" placeholder="05/08/2023" />
                        </Form.Group>
                        <div class="row mb-4" />
                        <Form.Group class="col-md-6">
                            <label for="merchant">Merchant</label>
                            <input type="text" id="merchant" class="form-control" placeholder="Walmart" />
                        </Form.Group>
                        <div class="row mb-4" />
                        <Form.Group class="col-md-6">
                            <label for="purchaser">Purchased By</label>
                            <input type="text" id="purchaser" class="form-control" placeholder="Jack Sparrow" />
                        </Form.Group>
                    </div>
                    <ItemInfo />
                    <div class="row mb-4"/>
                  <Button disabled={loading} class="btn btn-primary" type="submit">
                    Submit
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
