import React, { useState } from "react";

import {Img} from '../styles'
import frontEnd from "../img/frontEnd.png";
import frontT from "../img/frontEndT.png";

const FrontImage = () => {
  const [hover, setHover] = useState(false);



  return (    
      <Img
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <img style = {{width:250, height:280}} src = {hover ?  `${frontT}` : `${frontEnd}`} alt=""/>
      </Img>    

  );
};

export default FrontImage;
