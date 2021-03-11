import styled from "styled-components";

export const Box = styled.div`
  max-width:90%;
  width:100%;
  height:auto;
  margin: 25px auto;
  padding:15px;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
`
export const Text = styled.h1`  
  margin: auto;  
  z-index:3;
  :hover{
    opacity:1;
  }
`

export const Layer = styled.div`   
  margin: 0 auto;
  width: 100%;
  max-width: 18%; 
  
  font-family: "Roboto", "sans serif";
  height: 100%;
  min-height:50vh;
  border-radius: 3px;  
  transition: 0.5s ease all;  
  background-position:center;
  background-size:cover;
  :hover{
    color:white;
  }
`

export const Card = styled.div`  
  display: flex;
  justify-content:center;    
  margin: 0 auto;
  width: 100%;
  max-width: 100%; 
  background-color: transparent;
  color: transparent;
  font-family: "Roboto", "sans serif";
  height: 100%;
  min-height:50vh;
  border-radius: 3px;  
  transition: 0.5s ease all;  
  background-position:center;
  background-size:cover;
  :hover {
    background-color:rgba(239,238,240,0.3);
    color:black;
  }  
 

  @media only screen and (max-width: 768px) {
    width:100%;
    max-width:90%;
    margin:10px auto;
    min-height:60vh;
  }

`;


