import React, { useState } from "react";

import {Img} from '../styles'
import backEnd from "../img/backEnd.png";
import backT from "../img/backEndT.png";


const BackImage = () => {
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
        <img style = {{width:250, height:280}} src = {hover ?  `${backT}` : `${backEnd}`} alt=""/>
      </Img>
 
  );
};

export default BackImage;
