import React from "react";
import Wrapper from './Wrapper';

function Skills() {
    return (
      <Wrapper>
      <div className="table-responsive">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <th>HTML</th>
                <th>MySQL</th>
                <th>jQuery</th>
              </tr>
              <tr>
                <th>Bootstrap</th>
                <th>Tests</th>
                <th>APIs</th>
              </tr>
              <tr>
                <th>CSS</th>
                <th>Sass</th>
                <th>Node.JS</th>
              </tr>
              <tr>
                <th>JavaScript</th>
                <th>MongoDB</th>
                <th>React</th>
              </tr>
            </tbody>
          </table>
      

          <div className="resumeWrapper">
          <a
            type="submit"
            className="Resume"
            // onClick={(event) => (window.location.href = "contact")}
            href="https://docs.google.com/document/d/1GahBznAAflaid6UP-R_zP74ppyPfLa_HjXKYtex22wQ/edit?usp=sharing" 
            rel="noopener noreferrer" 
            target="_blank"
            >
            VIEW MY RESUME
            </a>
      </div>
      </div> 
      </Wrapper>
    );
  }
  
  export default Skills;
