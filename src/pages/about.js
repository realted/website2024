import React from "react";

import Navbar_about from './Navbar_about';
import aboutPic from './aboutImg.jpg';

export default function About() {
  return (
    <div className="about">
      <div className="flexLR">
        <Navbar_about/>

        <div className="aboutContent">
          <header className="blogTitle">
            <p>About</p>
          </header>

          <img src={aboutPic} className="aboutImg" alt="Ted Yoo" />

          <div className="yap">
            <p>
              Hi I'm Ted! I'm currently a 3rd year Engineering Science student in the ECE stream at the University of Toronto.
              <br /><br />
              A bit on life recently, my third year in the ECE stream has been super rewarding because I feel like I made the best possible choice for myself,
              finding interest in topics such as computer architecture, electronics, and communication. This fails to never inspire me, 
              and I am curious as to what the future holds for me here.
              <br /><br />
              For me, it's not that deep—just balance three things: Academics, Athletics, and Mental Health.
              Academics: What to do with life. Athletics: Type of person you want to be in life. Mental Health: To keep it going.
              <br /><br />
              If you want to reach out to me, do so at therealtedyoo@gmail.com!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
