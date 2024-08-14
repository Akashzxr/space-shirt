import "./App.css";
import "./output.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SliderMain from "./components/SliderMain";
import CardSlider from "./components/CardSlider";
import Gallery from "./components/Gallery";
import Ending from "./components/Ending";



function App() {
 
  return (
    <>
      <Navbar />
      <Hero />
      <SliderMain />
      <CardSlider/>
      <Gallery/>
      <Ending/>
    </>
  );
}

export default App;
