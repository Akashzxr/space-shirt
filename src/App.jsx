import "./App.css";
import "./output.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SliderMain from "./components/SliderMain";
import CardSlider from "./components/CardSlider";
import Gallery from "./components/Gallery";



function App() {
 
  return (
    <>
      <Navbar />
      <Hero />
      <SliderMain />
      <CardSlider/>
      <Gallery/>
    </>
  );
}

export default App;
