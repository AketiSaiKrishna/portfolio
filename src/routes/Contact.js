import React from 'react';
import Footer from '../Components/Footer';
import Navbar from "../Components/Navbar";
import Heroimg2 from '../Components/Heroimg2';
import Contactcom from '../Components/contact';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT" text="Lets Have a Chat"/>
      <Contactcom/>
      <Footer/>
    </div>
  )
}

export default Contact;
