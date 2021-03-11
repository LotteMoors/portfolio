import React, { useState } from "react";

import { Link } from "react-router-dom";
import { HoverBox, Nav, Navbar, HamBox } from "./styles";
import { Spin as Hamburger } from "hamburger-react";

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  const style = {
    color: "white",
    margin: "10px",
  };

  return (
    <Nav>
      <HamBox>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          easing="ease-in"
          color="white"
          padding="5"
          duration={0.4}
          rounded
          label="Show menu"
        />
     
      {isOpen ? (
        <Navbar>
          <HoverBox>
            <Link className="home" to="/">
              <div style={style}>Home</div>
            </Link>
          </HoverBox>
          <HoverBox>
            <Link className="skills" to="/Skills">
              <div style={style}>Skills </div>
            </Link>
          </HoverBox>
          <HoverBox>
            <Link className="projects" to="/Projects">
              <div style={style}>Projects</div>
            </Link>
          </HoverBox>
          <HoverBox>
            <Link className="contact" to="/Contact">
              <div style={style}>Contact</div>
            </Link>
          </HoverBox>
        </Navbar>
      ) : null}
       </HamBox>
    </Nav>
  );
}

export default NavBar;
