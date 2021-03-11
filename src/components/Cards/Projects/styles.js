import styled from "styled-components";

export const Card = styled.div`
  margin: 5px auto;
  width: 100%;
  max-width: 80%;
  background: rgb(116, 68, 8);
  background: linear-gradient(
    90deg,
    rgba(116, 68, 8, 1) 14%,
    rgba(134, 80, 14, 1) 62%,
    rgba(156, 97, 14, 1) 93%
  );
  color: white;
  font-family: "Roboto", "sans serif";
  height: auto;
  min-height: 35vh;
  border-radius: 3px;
  display: flex;
  flex-direction: row;  
  transition: 0.6s ease all;
  transform: scale(0.9);
  :hover {
    transform: scale(1);
  }


 
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ProjectImg = styled.img`
  border-radius: 5px;
  width: 100%;
  max-width: 80%;
  height: 100%;
  transition: 0.7s ease all;
  opacity: 0.8;
  filter: blur(2px);
  :hover {
    max-width: 100%;
    opacity: 1;
    filter: blur(0px);
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    
    filter: blur(0px);        
  }
`;
export const Link = styled.a`
  border-radius: 5px;
  width: 100%;
  max-width: 40%;
  max-height: auto;
  transition: 0.7s ease all;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    height: 40vh;
  
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  text-align:center;
  margin: 0 auto;
  width: 100%;
  padding: 0px;
  height: auto;
  @media only screen and (max-width: 768px) {
  }
`;

export const List = styled.div`
  margin: 10px auto;  
  padding:15px;
  display: flex;
  flex-direction: column;
  justify-content: center;  
`;
export const ListItem = styled.div`
  margin: 0 auto;
  width: auto;
  max-width:80%;
 
`;

export const CardTitle = styled.h1`
  font-size: 2rem;
  display: flex;
  padding-bottom:5px;
  border-bottom:3px solid #DC7500;
  flex-wrap: wrap;
  justify-content:center;
  text-align:center;
  margin: 0 auto;
  margin-bottom: 5px;
  height: auto;
`;

export const Content = styled.h3`
  font-size: 1.3rem;
  max-width: 75%;
  width:100%;
  display: flex;
  flex-wrap: wrap;
  margin: 15px auto;
  padding: 10px;
  height: auto;
`;

export const Tools = styled.h3` 
font-size: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  
`;

export const Button = styled.button`
  font-size: 1.1rem;
  padding:8px;
  border-radius:3px;
  background-color:black;
  color:white;
  margin: 0 auto;
  margin-bottom:5px;
  margin-right:5px;
  width: 18vh;
  border: none;
  :hover{
    background-color:#DC7500;
    color:black;
  }
`;
