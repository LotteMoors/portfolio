import styled from "styled-components";

export const Full = styled.div`
  min-height: 80vh;
  height: 100%;
  max-height: 100vh;
  width: 100%;
  max-width: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-family: "Roboto", "sans serif";
`;

export const Container = styled.div`
  height: 70vh;
  width: 200vh;
  max-width: 200vh;
  margin-left: 15vh;
  background-color: transparent;
  display: flex;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 1024px) {
    
    height:auto;
    display: flex;
    margin:0 auto;
    flex-direction: column;
  }
`;

export const Welcome = styled.div`
  background-color: rgb(0, 0, 0);
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px;
  width: 65vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  height: 25vh;
  @media only screen and (max-width: 1024px) {
    position: relative;
    width: 100%;
    margin: 2vh auto;
  }
`;

export const Info = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 3px;
  margin: 0 35vh;
  margin-top: 12vh;
  margin-right: 25vh;
  height: 58vh;
  width: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    position: relative;
    width: 100%;
    max-width:100%;
    margin: 0 auto;
    max-height: auto;
    height:auto;
    flex-direction: column-reverse;    
  }
`;

export const Text = styled.h1`
  margin: 0 auto;
`;

export const List = styled.ul`
  margin: 0 auto;
  width: 80vh;
  display: flex;
  height: 100%;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  color: black;
  padding-top: 3vh;
  @media only screen and (max-width: 1024px) {    
    width: 100%;
    max-width:100%;
    height:100%;
    margin: 25px auto;
    max-height: 60vh;
  }
`;

export const ButtonGroup = styled.div`
  width: 100vh;
  margin: 0 auto;
  margin-left: 39vh;
  height: 20vh;
  color: white;
  background-color: transparent;
  display: flex;
  
  flex-direction: row;
  align-items: center;
  
  @media only screen and (max-width: 1024px) {
    display:flex;
    justify-content: center;
    align-items:center;
    
    height:30vh;
    width: 100%;
    max-width:60vh;
    margin: 0 auto;     
  }
  @media only screen and (max-width: 750px) {    
    flex-direction: column;  
    padding-bottom:5px; 
  }


`;
export const Button = styled.button`
  font-size: 1.4rem;
  width: 23vh;
  height: 9vh;
  margin: 0 5px;
  color: white;
  background-color: black;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  :hover{
    background-color:#A9BDD7;
    color:black;    
  }


  @media only screen and (max-width: 750px) {    
    width:55vh;
    margin: 5px auto;  
   
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  margin-bottom: 5vh;
`;

export const Bold = styled.li`
  font-size: 1.8rem;
  font-weight: 900;
  @media only screen and (max-width: 1024px) {
   margin-left:5vh;
  }
`;

export const Small = styled.h1`
  font-size: 1.8rem;
  font-weight: 300;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

export const Tiny = styled.p`
  font-size: 0.8rem;
  margin: 5px 5px;
`;
