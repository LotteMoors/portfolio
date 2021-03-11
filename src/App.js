import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


import Home from "./views/Home";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Contact from "./views/Contact";


const App = () => {

  return (
    
      <Router>
        
         <Switch>
            <Route path="/" exact component={Home} />            
            <Route path="/Skills" component={Skills} />            
            <Route path="/Projects" component={Projects} />            
            <Route path="/Contact" component={Contact} />
          </Switch>      

      </Router>
    
  );
};

export default App;
