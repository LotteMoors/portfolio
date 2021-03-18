import React from 'react'

import NavBar from "../../components/NavBar";
import Containers from '../../components/Containers'
import Cards from '../../components/Cards'


const Projects = () => {
    return (
        <div style={{backgroundColor:'black'}}>
            <NavBar />
            <div style = {Containers.TitleDark}>
               Have a look at some of my work
            </div>
            <Cards.Projects/>            
        </div>
    )
}

export default Projects;

