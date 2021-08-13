import React from 'react'
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Tilt from "react-tilt";
import Card from "react-bootstrap/Card";
import L_SAMSUNG from "../../assets/img/experience/SAMSUNG.svg";
import "./experience.css";

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_SAMSUNG} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">SAMSUNG PRISM</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Research Intern</strong>
                    <br />
                    <strong>Project:</strong> DNN Development for Human Pose Estimation
                    <br />
                    <strong>Duration:</strong> July 2021 - Present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developing</strong> deep neural network for pose estimation of human beings.</li>
                      <li><strong>Using</strong> MPII Dataset for extraction of features from different human poses.
                      </li>
                      <li><strong>Improving</strong> accuracy of the model. 
                      </li>
                      
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
        
    



