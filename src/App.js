import React from 'react';
import tedYooImage from './webim1.png';
import './App.css';

function App() {
  return (
    <div className = "App">
      <div className="RowTop">
        <img src={tedYooImage} className="profile-image" alt="Ted Yoo" />
        <header className="App-header">
          <p>Hi! I'm Ted</p>
        </header>  
      </div>
      <div className="Rect1"></div>
      <header className="desc">
          <p>My name is Ted Yoo and I am currently a 2nd Year studying
             Engineering Science at University of Toronto. I aspire to 
              study, and research either robotics, ECE, or Machine Intelligence </p>
      </header>  
      <div className="gridSelect">
        <div className="gridBox">


        </div>
      </div>
    </div>
  );
}

export default App;



{/*
<p className="App-text1">
Hi, I'm Ted. This is my personal website. Feel free to explore!
</p>
<a
className="App-link"
href="https://drive.google.com/file/d/12AK-qRWreXqj3JOBNNbF-U6W69YMEzwO/view?usp=drive_link"
target="_blank"
rel="noopener noreferrer"
>
My Resume
</a>

*/}



