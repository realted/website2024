import React from "react";
import moneyShot from './money.png';
import iggray from './iggray.png';
import linkedingray from './linkedingray.png';
import githubgray from './githubgray.png';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {Link} from "react-router-dom";

export default function Home() {

  const menuItems = [
    { to: "", className: "descMain", label: "About", target: "_self"},
    { to: "/blogs", className: "descMain", label: "Blogs", target: "_blank" },
    { to: "/projects", className: "descMain", label: "Projects", target: "_blank" },
    { to: "", className: "descMain", label: "Experience", target: "_blank" },
  ];

  const socialItems = [
    { to: "https://www.instagram.com/its.teddyyyy/", className: "socials", src: iggray, target: "_blank"},
    { to: "https://www.linkedin.com/in/ted-yoo1/", className: "socials", src: linkedingray, target: "_blank" },
    { to: "https://github.com/realted", className: "socials", src: githubgray, target: "_blank" },
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
      </div>
    </div>
  );
  }