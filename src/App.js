import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';


import React from 'react';
import './App.css';

export default function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}



{/*
<a
className="App-link"
href="https://drive.google.com/file/d/12AK-qRWreXqj3JOBNNbF-U6W69YMEzwO/view?usp=drive_link"
target="_blank"
rel="noopener noreferrer"
>
My Resume
</a>

*/}



