import React from "react";
import tedYooImage from './webim1.png';
import {Link} from "react-router-dom";

export default function Home() {

  const menuItems = [
    { to: "/projects", className: "gridBox1", label: "Projects", target: "_self"},
    { to: "/blogs", className: "gridBox2", label: "Blogs", target: "_self" },
    { to: "https://github.com/realted", className: "gridBox3", label: "GitHub", target: "_blank" },
    { to: "https://www.linkedin.com/in/ted-yoo1/", className: "gridBox4", label: "LinkedIn", target: "_blank" },
  ];

  return (
    <div className="App">
      <div className="RowTop">
        <img src={tedYooImage} className="profile-image" alt="Ted Yoo" />
        <header className="App-header">
          <p>Hi! I'm Ted</p>
        </header>
      </div>
      <div className="Rect1"></div>

      <div className="topDescBox">
        <header className="desc">
          <p>
            My name is Ted Yoo and I am currently a 2nd Year studying Engineering Science at the University of Toronto. I aspire to study and research either robotics, ECE, or Machine Intelligence.
          </p>
        </header>
      </div>

      <div className="gridSelect">
        {menuItems.map((menuItem, index) => (
          <Link key={index} to={menuItem.to} className={menuItem.className} target={menuItem.target}>
            <div className="descBox">
              <p>{menuItem.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
  }