import React from "react";
import { Link } from "react-router-dom";


import BG from "./background/fibTr.jpg";
import NavBar from "../../components/NavBar";
import {
  Full,
  Welcome,
  Text,
  Info,
  ButtonGroup,
  Button,
  Container,
  List,
  Item,
  Bold,
  Small,
  Tiny,
} from "../../components/Containers/Home";

const Home = () => {
  const Div = {
    minHeight: "100vh",
    maxWidth: "auto",
    height: "100%",
    width: "100%",
    backgroundImage: `url(${BG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <div style={Div}>
      <NavBar />
      <Full>
        <Container>
          <Welcome>
            <Text>Hi there!</Text>
            <Text>Welcome to my portfolio</Text>
          </Welcome>
          <Info>
            <ButtonGroup>
            <Link to="/Contact">
            <Button>
              Contact
            </Button>
            </Link>
            <Link to="/Projects">
            <Button>
              Projects
            </Button>
            </Link>
            <Link to="/Skills">
            <Button>
              Skills
            </Button>
            </Link>
            </ButtonGroup>
            <List>
              <Item>
                <Bold>Who?</Bold>
                <Small>Lotte Moors</Small>
              </Item>
              <Item>
                <Bold>What?</Bold>
                <Small>Front End Developer</Small>
              </Item>
              <Item>
                <Bold>Where?</Bold>
                <Small>
                  Ghent<Tiny>BE</Tiny>
                </Small>
              </Item>
            </List>
          </Info>
        </Container>
      </Full>
    </div>
  );
};

export default Home;
