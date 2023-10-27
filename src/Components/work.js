import Workcard from './workcard';
import './workcard.css';
import React from 'react';
import WorkcardData from "./workcardData";


const Work= () => {
  return (
    <div className= "work-container">
       <h1 className='projectr-heading'> Projects </h1>
       <div className='project-container'>
        
        {WorkcardData.map((val, ind)=>{

            return(
                <Workcard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
                />
            );
        })}

       </div> 
    </div>
  )
}

export default Work;
