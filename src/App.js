import React from 'react';
import './App.css';


import About from './routes/About';
import Contact from './routes/Contact';
import Projects from './routes/Projects';
import Home from './routes/Home';

import { Routes, Route} from 'react-router-dom';

function App() {
  return (
         <>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
         </Routes>
         </>
  );
}

export default App;
