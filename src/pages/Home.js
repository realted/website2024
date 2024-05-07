import React from "react";
import moneyShot from './money.png';
import { FaGithub, FaInstagram, FaLinkedin, FaStrava} from 'react-icons/fa';
import {Link} from "react-router-dom";

export default function Home() {

  const menuItems = [
    { to: "/about", className: "descMain", label: "About", target: "_self"},
    { to: "/blogs", className: "descMain", label: "Blogs", target: "_self" },
    { to: "/projects", className: "descMain", label: "Projects", target: "_self" },
    { to: "/experience", className: "descMain", label: "Experience", target: "_self" },
  ];

  return (
    <div className="App">
      
      <div className="flexLR">

        <div className="flexColumn">
          <div className="name">
            <p>TED <br></br> YOO</p>
          </div>

          {menuItems.map((menuItem, index) => (
            <Link key={index} to={menuItem.to} className={menuItem.className} target={menuItem.target}>
              <div className="descMain">
                <p>{menuItem.label}</p>
              </div>
            </Link>
        ))}
        </div>
        <img src={moneyShot} className="profile-image" alt="Ted Yoo"/>
      </div>

      <div className="socials">
        <a href="https://github.com/realted" className = "social-image" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/its.teddyyyy/" className = "social-image" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/ted-yoo1/" className = "social-image" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://www.strava.com/athletes/126773040" className = "social-image" target="_blank">
          <FaStrava />
        </a>
      </div>
    </div>
  );
  }