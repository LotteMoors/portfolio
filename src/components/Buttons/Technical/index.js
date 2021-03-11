// import { useState } from "react";
import styled from "styled-components";

const Buttons = (props) => {
  // const [hover, setHover] = useState(false);
  const { label, style,  } = props;

  const TekBtn = styled.button`
   
    color: black;
    padding: 15px;
    margin: 0px 10px;
    border-radius: 15px;
    height: 50px;
    width: 80px;
    
    :hover {      
      height: 80px;
      width: 80px;
      background-size: cover;
      color: transparent;
    }
  `;

  return (
    <TekBtn
      // onMouseEnter={() => {
      //   setHover(true);
      // }}
      // onMouseLeave={() => {
      //   setHover(false);
      // }}
      style={style}
      // onMouseOver={hover ? onMouseOver : null}
    >
      {label}
    </TekBtn>
  );
};

export default Buttons;
