import React from "react";

import NavBar from "../../components/NavBar";
import Containers from "../../components/Containers";
import Title from "../../components/Title";
import Cards from "../../components/Cards";
import HoverImages from "../../components/HoverImages";

const Skills = () => {
  return (
    <div style={Containers.Main}>
      <NavBar />
      <div style={Containers.LightBox}>
        <h1 style={Title.Light}> Technical Skills</h1>
        <div style={Containers.Box}>
          <HoverImages />
        </div>
      </div>
      <div>
        <h1 style={Title.Dark}> Interests</h1>        
        <Cards.Interest />
      </div>
    </div>
  );
};

export default Skills;
