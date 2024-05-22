import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import EventCards from "./components/EventCards";
import Discunt from "./components/Discunt";
import Service from "./components/Service";
import Reviews from "./components/Reviews";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="  overflow-hidden">
        <Navbar />
        <HeroSection />
        <About />
        <EventCards />
        <Discunt />
        <Service />
        <Reviews />
        <Team />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
