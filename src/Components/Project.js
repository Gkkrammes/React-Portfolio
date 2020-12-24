import React from "react";
import {Card, Button, CardImg, CardTitle, CardText,CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import Wrapper from './Wrapper';

function Projects(props) {
  return (

    <Wrapper>
    <div className="card">
      <div className="img-container">
        <Card>
          <Button id="project-button" block>{props.name}</Button>
          <CardImg className='projectImage' top width="100%" src='/Images.partyplanner.png' alt="website image"/>
            <CardBody className="content">

              <CardTitle 
                style={{fontSize: "18px", fontWeight: "bold"}}>
                DESCRIPTION:
              </CardTitle>

              <CardText 
                style={{fontSize:"18px"}}> 
                An ultimate party planner that centralizes every step of the party planning process in one application. 
              </CardText>

              <div className="portfolio-link">
                <a
                  className="external-links"
                  id="github"
                  style={{fontSize: "18px", fontWeight: "bold", color:"#1F8832",textAlign:"center"}}
                  tag={Link} href={`https://github.com/Gkkrammes/Project2`}
                  rel="noopener noreferrer" 
                  target="_blank"
                > 
                   GITHUB 
                </a>
                |
                <a
                  className="external-links"
                  id="website"
                  style={{fontSize: "18px", fontWeight: "bold", color:"#1F8832", textAlign:"center"}}
                  tag={Link} 
                  href={`https://peaceful-shore-75888.herokuapp.com/`}
                  rel="noopener noreferrer" 
                  target="_blank"
                  > 
                   DEPLOYED SITEn
                </a>
              </div>

            </CardBody>
        </Card>
      </div>
    </div> 

    </Wrapper>
  );
};
  
  export default Projects;
