import "./Heroimg.css";
import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";
import {Link} from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt={IntroImg}/>
      </div>
      <div className="Content">
        <p> Hi,This is Krishna</p>
        <h1> FrontEnd Developer </h1>
        <Link to="/Projects" className="btn">Projects</Link>
        <Link to="/Contact" className="btn btn-light">Contact</Link>
      </div>
    </div>
  )
}

export default Heroimg;
