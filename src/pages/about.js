import React from "react";
import Navbar from './Navbar';
import aboutPic from './aboutImg.jpg';

export default function Blogs(){

    return(
        <div className="about">
            <Navbar/>
            <header className="blogTitle">
                <p>About</p>
            </header>
            <img src={aboutPic} className="aboutImg" alt="blogImage" />
            <div className="yap">
                <p>Hello! My name is Ted and I'm a "happy" 2nd year Engineering Science student at the University of Toronto. 
                    I am planning to specialize in Machine Intelligence in my program. <br></br><br></br> 
                    I really think its not that deep, just balance three things: Academics, Athletics, and Mental Health/Mindfullness. 
                    Academics is for finding out what you want to do with your life, athletics is for finding out who you want to be in 
                    life and mental health/mindfullness is for ensuring you achieve whatever you figure out. Maybe that was a little deep
                    after all. 
                    
                </p>
            </div>
        </div>
    );
}

