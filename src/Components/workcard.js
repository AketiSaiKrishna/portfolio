import './workcard.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

 
 const Workcard = (props) => {
   return (
     <div className= "work-container">
        <div className='project-container'>
            <div className='project-card'>
                <img src={props.imgsrc} alt="image"/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='project-details'>
                    <p>{props.text}</p>
                    <div className='pro-btns'>
                        <NavLink to={props.view} className='btn'>view</NavLink>
                        <NavLink to={props.source} className='btn'>Source</NavLink>
                    </div>
                </div>
            </div>
        </div> 
     </div>
   )
 }
 
 export default Workcard;



 