import "./App.css";
import "./output.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SliderMain from "./components/SliderMain";
import HeroCard from "./components/HeroCard";
import CardSlider from "./components/CardSlider";



function App() {
 
  return (
    <>
      <Navbar />
      <Hero />
      <SliderMain />
      <CardSlider/>
    </>
  );
}

export default App;
