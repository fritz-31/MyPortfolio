import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/img/profile/ProfilePic.webp'
import Button from "react-bootstrap/Button";
import './about.css'

export const About = () => {
    return (
        <div id="about">
        
        <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                {/*Profile Pic*/}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                        <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                        </Row>
                    </Col>
                    {/*About Me description*/}
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                            {/*description*/ }
                            Hi there! I am <strong>&nbsp;Ritwik Srivastava</strong>
                <br />A passionate programmer and a tech enthusiast, born and brought up in India. I am an Android Developer, a Full Stack Web Developer and an aspiring Data Scientist.
                <br />
                I am currently pusuing my bachelors in <strong> Computer Science & Engineering </strong>&nbsp; from <strong> Indian Institute of Information Technology, Kurnool.</strong>
                <br />
                My goal is always driven towards striving towards betterment and perfection through hard and smart work.
                <br />
                Along with that, I am a fast learner, a good team worker with exceptional mangerial skills.
                <br />I love learning about new technologies, what problems are they solving and how can I use them to build better and scalable products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1DGdD3lp36tRF94J4jx37dOoEcnDghWYR/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/fritz-31" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/ritwik-srivastava-6b9602195/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
            </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
                        