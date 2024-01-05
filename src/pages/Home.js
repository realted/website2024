import React from "react";
import tedYooImage from './webim1.png';
import {Link} from "react-router-dom";

export default function Home() {

    return (  
      <div className = "App">
        <div className="RowTop">
          <img src={tedYooImage} className="profile-image" alt="Ted Yoo" />
          <header className="App-header">
            <p>Hi! I'm Ted</p>
          </header>  
        </div>
        <div className="Rect1"></div>
  
        <div className="topDescBox">
          <header className="desc">
              <p>My name is Ted Yoo and I am currently a 2nd Year studying
                Engineering Science at University of Toronto. I aspire to 
                  study, and research either robotics, ECE, or Machine Intelligence </p>
          </header>  
        </div>
  
        <div className="gridSelect"> 
            <Link to="/projects" className="gridBox1" target = "_self" >    
                <div className="descBox">
                    <p> Projects </p>
                </div>
            </Link>

          <div className="gridBox2">
            <header className="descBox">
              <p> Blogs </p>
            </header>
          </div>
          <div className="gridBox3">
            <header className="descBox">
              <p> GitHub </p>
            </header>
          </div>
          <div className="gridBox4">
            <header className="descBox">
              <p> LinkedIn </p>
            </header>
          </div>
        </div>
      </div>
    );
  }