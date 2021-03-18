import React from "react";

import Title from "../../components/Title";
import NavBar from "../../components/NavBar";
import Info from "../../components/Contact/Info/index";
import Containers from "../../components/Containers";

const Contact = () => {
 
  return (
    <div >
      <NavBar />
      <div style={Containers.LightBox}> 
       <h2 style={Title.Light}>Contact</h2>            
      <Info />
      </div>        
    
    </div>
  );
};

export default Contact;
