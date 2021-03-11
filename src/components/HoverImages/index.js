import React from "react";

import BackImage from './HoverImage/Back'
import FrontImage from './HoverImage/Front'


const HoverImages = () => {

  const style = {
    display:'flex',
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:"center"
  }

                        
  return (
    <div style ={style} >
       <FrontImage />    
       <BackImage />    
    </div>
  );
};

export default HoverImages;