import React from "react";

import mongoIcon from "./icons/mongoIcon.png";
import expressIcon from "./icons/expressIcon.png";
import nodeIcon from "./icons/nodeIcon.png";


import Buttons from "../Technical";

const Back = () => {



  const buttons = [
    {
      style:{
        backgroundImage: `url(${nodeIcon})`,      
      }
    },
    {
      style: {
        backgroundImage: `url(${expressIcon})`,      
      }
    },
    {
      style: {
        backgroundImage: `url(${mongoIcon})`,
      }      
    }
  ];

  return (
    <div>
      {buttons.map((btn, index) => {
        return (
          <Buttons
            key={index}
            style={btn.style}
          />
        );
      })}
    </div>
  );
};

export default Back;
