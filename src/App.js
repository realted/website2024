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



