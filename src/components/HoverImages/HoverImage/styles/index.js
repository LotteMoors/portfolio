import styled from "styled-components";

export const Img = styled.div`
    display: flex;
    flex-direction: row;
    color: black;
    padding: 15px;
    margin: 0px 35px;
    border-radius: 45px;
    height: auto;
    width: auto;
    background-size: cover;
    transition: 0.5s ease all;
    :hover {
      box-shadow: 10px 15px rgba(0, 0, 0, 0.225);
      transform: translateY(-10px) translateX(-10px) scale(1.1);
      
    }
  `;



