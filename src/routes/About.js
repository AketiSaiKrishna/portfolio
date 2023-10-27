import React from 'react';
import Footer from '../Components/Footer';
import Navbar from "../Components/Navbar";
import Heroimg2 from '../Components/Heroimg2';
import AboutContent from '../Components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT" text="I'm a frindly FrontEnd Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
