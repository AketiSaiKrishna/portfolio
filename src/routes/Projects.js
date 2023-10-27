import React from 'react';
import Footer from '../Components/Footer';
import Navbar from "../Components/Navbar";
import Heroimg2 from '../Components/Heroimg2';
import Pricingcard from '../Components/Pricingcard';
import Work from '../Components/work';

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="Projects" text="some of my recent works  "/>
      <Work/>
      {/* <Pricingcard/> */}
      <Footer/>
    </div>
  )
}

export default Projects;
