import React from "react";
import Navigation from "./Navigation";
import { Container } from "react-bootstrap";
import Task from "./TransactionTask";

import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const HomeScreen = () => {
  return (
    <>
      <div>
      <Navigation />
      <div className="home-banner-container" >
          <div className="home-bannerImage-container" >
            <img src = {BannerBackground} alt ="" />
          </div>
      </div>
      
      <Container>
        {/* <Task /> */}
      </Container>

        </div>
    </>
  );
};

export default HomeScreen;
