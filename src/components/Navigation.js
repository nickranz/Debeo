import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState, List } from "react";

import Logo from "../Assets/DEBEO.svg";
import Placeholder from "../Assets/money.png";

import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <nav>
      <Navbar bg="light" expand="lg">
        <div className="nav-logo-container">
          <img
            src={Logo}
            style={{ height: 50, width: 180 }}
            alt="website logo"
          />
        </div>
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Drawer
              open={openMenu}
              onClose={() => setOpenMenu(false)}
              anchor="right"
            >
              <Box
                sx={{ width: 100 }}
                role="presentation"
                onClick={() => setOpenMenu(false)}
                onKeyDown={() => setOpenMenu(false)}
              >
                <List>
                  {menuOptions.map((item) => (
                    <ListItem key={item.text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText> primary={item.text}</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
            <Nav className="me-auto" />
            <div
              class="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div class="btn-group mr-5" role="group" aria-label="First group">
                <Button variant="outline-primary" type="button" href="./">
                  About
                </Button>
                <Button
                  type="button"
                  class="btn btn-danger btn-block"
                  variant="outline-primary"
                  href="./"
                >
                  Developers
                </Button>
                <Button
                  type="button"
                  class="btn btn-danger btn-block"
                  variant="outline-primary"
                  href="./login"
                >
                  Login
                </Button>
                <Button
                  type="button"
                  class="btn btn-danger btn-block"
                  variant="outline-primary"
                  href="./signup"
                >
                  Signup
                </Button>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section class="hero">
        <div class="container">
          <div class="left-col">
            <h1>The FUTURE of modern day expense-handling!</h1>
          </div>

          {/* <img src={Logo} alt="Illustration" class="hero-img" /> */}
        </div>
      </section>

      <section class="features-section">
        <div class="container">
          <ul>
            <li>Handle your expenses!</li>
            <li>Real time collaboration!</li>
            <li>Add friends and family to your groups!</li>
            <li>Other awesome features!</li>
          </ul>
        </div>
        <img src={Placeholder} alt="phone" />
      </section>
    </nav>
  );
};

export default Navigation;
