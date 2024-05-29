import React from 'react'
import HeroSection from '../components/HeroSection';
import About from '../components/About'
import EventCards from "../components/EventCards";
import Discunt from "../components/Discunt";
import Service from "../components/Service";
import Reviews from "../components/Reviews";
import Team from "../components/Team";
import Blog from "../components/Blog";
// import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <About />
      <EventCards />
      <Discunt />
      <Service />
      <Reviews />
      <Team />
      <Blog />
    </>
  );
}

export default HomePage
