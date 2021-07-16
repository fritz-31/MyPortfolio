import React from "react";
import './App.css';
import Fade from "react-reveal/Fade";
import  {Parallax}  from "react-parallax";
import Container from "react-bootstrap/Container";

//components
import {MyNavbar} from "./components/mynavbar"
import  {MyCarousel}  from './components/my-carousel/my_carousel';
import  {TitleMessage}  from './components/title-message/title_message';
import {About} from './pages/About/about'


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
    <MyNavbar/>
    <MyCarousel/>
    <TitleMessage/>
    <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt="bg"
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
              <About/>
              </Fade>
            </Container>
          </div>
          </Parallax>
    </div>
    </div>
  );
}

export default App;
