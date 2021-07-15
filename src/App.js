import './App.css';

//components
import {MyNavbar} from "./components/mynavbar"
import  {MyCarousel}  from './components/my-carousel/my_carousel';
import  {TitleMessage}  from './components/title-message/title_message';

const App = () => {
  return (
    <div>
    <MyNavbar/>
    <MyCarousel/>
    <TitleMessage/>
    </div>
  );
}

export default App;
