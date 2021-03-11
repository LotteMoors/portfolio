import React  from "react";
// import axios from "axios";
import {Projects} from './Project'

import {
  Card,
  Button,
  ProjectImg,
  Description,
  CardTitle,
  List,
  ListItem,
  Content,
  Tools,
  Link
} from "./styles";

const Cards = () => {
   
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   getData();
  // }, []);

  // async function getData() {
  //   await axios("http://localhost:5000/projects")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //       setError(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }
  // if (loading) return "Loading...";
  // if (error) return "Error!";

  return (
    <>
      {Projects.map((projects, index) => {
        return (
          
            <Card key={index}>
              <Link  href={projects.website} target="_blank" rel="noreferrer">
                <ProjectImg src={projects.image} alt="g"  />
              </Link>
              <Description>
                <List>
                  <ListItem>
                    <CardTitle >{projects.title}</CardTitle>
                  </ListItem>
                  

                <Content >{projects.content}</Content>

                <Tools >
                  
                  {projects.tools.map((tool, index) => (
                    <Button key={index}>{tool}</Button>
                  ))}
                </Tools>
                </List>
                
              </Description>
            </Card>
          
        );
      })}
    </>
  );
};

export default Cards;
