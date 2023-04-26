import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState, List } from "react";

import Logo from "../Assets/DEBEO.svg";
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
  const [openMenu, setOpenMenu] = useState(false)
  const menuOptions = [
    {
      text:"Home",
      icon:<HomeIcon/>
    },
    {
      text:"About",
      icon:<InfoIcon/>
    },
    {
      text:"Testimonials",
      icon:<CommentRoundedIcon/>
    },
    {
      text:"Contact",
      icon:<PhoneRoundedIcon/>
    },
    {
      text:"Cart",
      icon:<ShoppingCartRoundedIcon/>
    },
  ]

  return (
    // <div className = "navbar-links-container">
    //   <a href="">Home</a>
    //   <a href="">About</a>
    //   <a href="">Testimonials</a>
    //   <a href="">Contact</a>
    //   <a href="">
    <Navbar bg="light" expand="lg">
    <div className="nav-logo-container">
      <img src={Logo}
       style = {{ height: 50, width: 200}}
       alt="website logo" />
    </div>
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
          anchor="right">
            <Box
              sx={{ width: 100}}
              role = "presentation"
              onClick={() => setOpenMenu(false)}
              onKeyDown={() => setOpenMenu(false)}
              >
                <List>
                  {menuOptions.map((item) => (
                    <ListItem key = {item.text} disablePadding>
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

          <Nav>
            <Nav.Link href="./login">Login</Nav.Link>{" "}
            <Button variant="primary" href="./signup">
              Signup
            </Button>
            {/* <Nav.Link href="./signup">Signup</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
