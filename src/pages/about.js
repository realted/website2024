import React from "react";
import Navbar from './Navbar';
import aboutPic from './aboutImg.jpg';

export default function Blogs() {

    return (
        <div className="about">
            <Navbar />
            <header className="blogTitle">
                <p>About</p>
            </header>
            <img src={aboutPic} className="aboutImg" alt="blogImage" />
            <div className="yap">
                <p>Hi I'm Ted! I'm Currently a 3rd year Engineering Science student in the ECE stream at the University of Toronto.
                    <br></br><br></br>
                    A bit on life recently, My third year in the ECE stream has been super rewarding because I feel like I made the best possible choice for myself,
                    finding interest in topics such as computer architecture, electronics, and communication. This fails to never inspire me, 
                    and I am curious as to what the future holds for me here. 
                    <br></br><br></br>
                    For me, its not that deep, just balance three things: Academics, Athletics, and Mental Health.
                    Academics: What to do with life, Athletics: Type of person you want to be in life, Mental Health: To keep it going.
                    <br></br><br></br>
                    If you want to reach out to me do so at therealtedyoo@gmail.com!
                </p>
            </div>
        </div>
    );
}

