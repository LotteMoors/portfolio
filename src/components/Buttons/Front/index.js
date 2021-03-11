import React from "react";

import jsIcon from "./icons/Jsicon.png";
import htmlIcon from "./icons/htmlIcon.png";
import reactIcon from "./icons/reactIcon.png";
import sassIcon from "./icons/sassIcon.png";
import cssIcon from "./icons/cssIcon.png";

import Buttons from "../Technical";

const Front = () => {
  const buttons = [
    {
      label: "Javascript",
      onMouseOver: (e) => {
        return (
          (e.target.style.backgroundImage = `url(${jsIcon})`),
          (e.target.style.padding = "25px")
        );
      },
    },
    {
      label: "React",
      onMouseOver: (e) => {
        return (
          (e.target.style.backgroundImage = `url(${reactIcon})`),
          (e.target.style.padding = "25px")
        );
      },
    },
    {
      label: "Sass",
      onMouseOver: (e) => {
        return (
          (e.target.style.backgroundImage = `url(${sassIcon})`),
          (e.target.style.padding = "25px")
        );
      },
    },
    {
      label: "CSS",
      onMouseOver: (e) => {
        return (
          (e.target.style.backgroundImage = `url(${cssIcon})`),
          (e.target.style.padding = "25px")
        );
      },
    },
    {
      label: "HTML",
      onMouseOver: (e) => {
        return (
          (e.target.style.backgroundImage = `url(${htmlIcon})`),
          (e.target.style.padding = "25px")
        );
      },
    },
  ];

  return (
    <div>
      {buttons.map((btn, index) => {
        return (
          <Buttons
            key={index}
            label={btn.label}
            style={btn.style}
            onMouseOver={btn.onMouseOver}
          />
        );
      })}
    </div>
  );
};

export default Front;
