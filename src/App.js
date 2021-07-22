import React from "react";
import './App.css';
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide'
import  {Parallax}  from "react-parallax";
import Container from "react-bootstrap/Container";
import Particles from "react-particles-js";

//components
import {MyNavbar} from "./components/mynavbar"
import  {MyCarousel}  from './components/my-carousel/my_carousel';
import  {TitleMessage}  from './components/title-message/title_message';
import {About} from './pages/About/about'
import Skills from './pages/About/Skills/skills'
import Experience from "./pages/experience/experience";
import ProjectTimeline from "./components/project-timeline/project_timeline";
import Contact from "./pages/ContactForm/ContactForm";
import FooterPanel from "./components/Footer/footer";
import { particlesOptions } from "./ParticleOptions";



const App = () => {
  return (
    <div style={{ position: "relative" }}>
    <MyCarousel/>
    <TitleMessage/>
    <MyNavbar/>
    <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> 
    <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt="bg"
          strength={100}
        >
          
            <Container className="container-box rounded">
              <Slide bottom duration={500}>
              <About/>
              </Slide>
            </Container>
          
          </Parallax>
    </div>
    {/*skills*/}
    <div>
      
          
            <Container className="container-box rounded">
              <Fade duration={500}>
              <Skills/>
              </Fade>
            </Container>
          
         
    </div>

{/*experience*/}
    <div>
      
          
            <Container className="container-box rounded">
              <Fade duration={500}>
              <Experience/>
              </Fade>
            </Container>
          
         
    </div>

    <div>
      
          
            <Container className="container-box rounded">
              <Fade duration={500}>
              <ProjectTimeline/>
              </Fade>
            </Container>
          
         
    </div>

    <div>
      
          
            <Container className="container-box rounded">
              <Fade duration={500}>
              <Contact/>
              </Fade>
            </Container>
          
         
    </div>

    <div>
      
          
            <Container className="container-box rounded">
              <Fade duration={500}>
              <FooterPanel/>
              </Fade>
            </Container>
          
         
    </div>
    </div>
  );
}

export default App;
