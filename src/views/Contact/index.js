import React from "react";
// import { Grow, Grid } from "@material-ui/core";
// import { useDispatch } from "react-redux";

// import honey from './background/honeycomb3.png'
import Title from "../../components/Title";
import NavBar from "../../components/NavBar";
import Info from "../../components/Contact/Info/index";
// import { getPosts } from "../../actions/posts";
// import Posts from "../../components/Contact/Posts/Posts";
// import Form from "../../components/Contact/Form/Form";
import Containers from "../../components/Containers";

const Contact = () => {
 
  // const content = {
  //   display:'flex',
  //   flexDirection:'row',
  //   justifyContent:'space-around',
  //   paddingTop: 20  
   
  // }  

  // const background = {
  //   width:'100%',
  //    backgroundImage:`url(${honey})`,
  // }

  // const messages = {
  //   width:'90%',
  //   margin:'0 auto'  
  // }


  // const [currentId, setCurrentId] = useState(0);
  // const dispatch = useDispatch();
  

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId, dispatch]);

  return (
    <div style={Containers.Main}>
      <NavBar />
      <div style={Containers.LightBox}> 
       <h2 style={Title.Light}>Contact</h2>            
      <Info />
      </div>
        
      {/* <h1 style={Containers.TitleDark}> Leave a message!</h1> */}
      {/* <div style={background}>
      <div style={messages}> 
      <Grow in>
               
          <Grid container style={content} alignItems="stretch" spacing={3} >
            <Grid  item xs={12} sm={3}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
          
        
      </Grow>
      </div>
      </div> */}
    </div>
  );
};

export default Contact;
