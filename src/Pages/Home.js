import React, { Component } from "react";
import '../App.css';
import Skills from '../Components/Skills';
import Header from '../Components/Header';
import Project from '../Components/Project';
import Wrapper from '../Components/Wrapper';
import projects from '../projects.json';


class App extends Component {
    render() {
        return (
        <main>
          <div className="App">
      
            <div className='About'>
              <div className='about-container'>
                <h2>Hello there.</h2>
                  <div className='row'>
                   <p className='about-container-p'>I am a full stack web developer leveraging experience in sales and customer service to build a better and more responsive user experience. I recently earned a professional certificate in full stack coding from Butler University, with recently developed skills in React, JavaScript, Css, and website responsiveness. I am interested in expanding my knowledge and experience to grow into a successful career in UX/UI design.</p>
                  </div>
                </div>
            </div>
      
          <div className='Projects'>

          <Header
          header="FEATURED"
        />

        <Wrapper>
          <Project
            key={projects[0].id}
            id={projects[0].id}
            picture={projects[0].image}
            name={projects[0].name}
            description={projects[0].description}
            tech={projects[0].tech}
            github={projects[0].github}
            site={projects[0].site}
          />

          <Project
            key={projects[1].id}
            id={projects[1].id}
            picture={projects[1].image}
            name={projects[1].name}
            description={projects[1].description}
            tech={projects[1].tech}
            github={projects[1].github}
            site={projects[1].site}
          />
        </Wrapper>

            <div className="buttonWrapper">
              <button
                type="submit"
                id="portfolioButton"
                className="profile btn-lg"
                onClick={(event) => (window.location.href = "/portfolio")}
                >
                VIEW PORTFOLIO
                </button>
              </div>
            </div>
      
            <div className='Skills'>
              <Header
                header="SKILLS"
              />
              <Skills />
              </div>
      
          </div>
        </main>
        );
      }
      }
      export default App;
      