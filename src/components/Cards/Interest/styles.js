import styled from "styled-components";

export const Box = styled.div`
  max-width: 90%;
  width: 100%;
  min-height: 50vh;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1124px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    display: flex;
    flex-direction: row;
  }
`;
export const Text = styled.h1`
  margin: auto;
  z-index: 3;
  :hover {
    opacity: 1;
  }
`;

export const Layer = styled.div`
  margin: 5px 5px;
  width: 80%;
  font-family: "Roboto", "sans serif";
  height: 100%;
  min-height: 45vh;
  max-height: 50vh;
  border-radius: 3px;
  transition: 0.5s ease all;
  background-position: center;
  background-size: cover;
  :hover {
    color: white;
  }
  @media only screen and (max-width: 768px) {
    margin: 10px auto;
    font-size: 1.2rem;
    height:50vh;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    margin: 10px auto;
    width: 45%;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  background-color: transparent;
  color: transparent;
  font-family: "Roboto", "sans serif";
  height: 100%;
  min-height: 45vh;
  border-radius: 3px;
  transition: 0.5s ease all;
  background-position: center;
  background-size: cover;
  :hover {
    background-color: rgba(239, 238, 240, 0.3);
    color: black;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
  }
`;
