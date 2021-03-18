import styled from "styled-components";

export const HoverBox = styled.div`
  color: #000;
  :hover {
    background-color: rgba(100, 100, 100, 0.6);
    cursor: pointer;
    color: black;
    width: 25vh;
    border-radius: 2px;
    text-align: center;
    padding: 20px;
  }
`;

export const HamBox = styled.nav`  
  margin:20px;
  margin-left:40px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  font-size: 20px;
  min-height: auto;
  background-color: rgba(0,0,0);
`;

export const Navbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 5px 5px;
  
  font-size: 22px;
  @media (max-width: 750px) {
    margin: 5px auto;
  }
`;

const Styles = { HoverBox, Nav, Navbar, HamBox };

export default Styles;
