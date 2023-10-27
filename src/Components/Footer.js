import "./Footer.css";
import React from 'react';
import {FaCodepen, FaGithub, FaHome, FaLinkedin, FaMailBulk,FaPhone } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="Footer">
        <div className="Footer-container">
        <div className="left">
            <div className="location">
               <FaHome size={30} style={{color:'white', marginRight:"2rem"}}/>
            <p>
                Ramachandrapuram<br/>
                Andhra Pradesh <br/>
            </p>
            </div>
            <div classname="phone">
              <h4><FaPhone size={20} style={{color:'white', marginRight:"2rem"}}/>+91 9100710460</h4>
            </div>
            <div classname="email">
              <h4><FaMailBulk size={20} style={{color:'white', marginRight:"2rem"}}/>saikrishnaaketi1@gmail.com</h4>
            </div>
        </div>
        <div className="right">
            <h4 className="Cupid"> Code Cupid</h4>
            <p>
                In the realm of love, I'm a coding whiz,<br/>
                By Debugging hearts with laughter and fizz!<br/>
            </p>
            <div className="Social">
            <Link to="https://github.com/AketiSaiKrishna"><FaGithub size={30} style={{color:'white', marginRight:"1rem"}}/></Link>
            <Link to="https://www.linkedin.com/in/aketisaikrishna/"><FaLinkedin size={30} style={{color:'white', marginRight:"1rem"}}/></Link>
            <Link to="https://codepen.io/aketisaikrishna"><FaCodepen size={30} style={{color:'white', marginRight:"1rem"}}/></Link>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
