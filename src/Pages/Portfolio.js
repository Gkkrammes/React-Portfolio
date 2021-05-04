import React, { Component } from 'react';
import Project from '../Components/Project'
import projects from "../projects.json";
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';


class MyPortfolio extends Component {

    state = {
        projects
    };

render () {
return (
    
    <div>
    <Header
          header="PROJECTS"
        />
    <Wrapper>
        {projects.map(project => (
            <Project
                key={project.id}
                id={project.id}
                name={project.name}
                description={project.description}
                github={project.github}
                site={project.site}
            />
        ))}
    </Wrapper>
    </div>
  );
}
}

export default MyPortfolio;





