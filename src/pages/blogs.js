import React from "react";
import {Link} from "react-router-dom";
import { IoMdHome } from "react-icons/io";

const navbar = [
    { to: "/about", className: "navHeader", label: "About"},
    { to: "/blogs", className: "navHeader", label: "Blogs"},
    { to: "/projects", className: "navHeader", label: "Projects"},
    { to: "/experience", className: "navHeader", label: "Experience" },
  ];



export default function Blogs(){
    const blogContent = [
        {blog: "y2 and running", written: "Written: 1/7 '24", read: "Read: 10 mins",
          to: "https://therealtedyoo.substack.com/p/y2-eng-sci-and-running"},
        {blog: " TBD ", written: "Written: TBD", read: "Read: TBD",
          to: ""},
        {blog: "TBD", written: "Written: TBD", read: "Read: TBD",
          to: ""},
        {blog: "TBD", written: "Written: TBD", read: "Read: TBD",
          to: ""}
    ];
    
    return (

        <div className="blogs">
            <div className = "topNav">
                <Link to="/home" target="_self">
                <div className="homeIcon">
                    <IoMdHome />
                </div>
                </Link>
                {navbar.map((element, index) => (
                <Link  key = {index} to={element.to} className="navHeader" target="_self">
                    <header className = "navHeader">
                    {element.label}
                    </header>
                </Link>
                ))}
            </div>
            <header className="blogTitle">
                <p>Blogs</p>
            </header>

            <Link to="https://therealtedyoo.substack.com" className = "substack" target="_blank">
                <div className = "substack">
                    <header className="subtext">
                        <p> Substack </p>
                    </header>
                </div>
            </Link>

            {blogContent.map((element, index) => (
                <div className = "blogLayout">
                    <Link  key = {index} to={element.to} className="projDesc" target="_blank">
                        <div className = "blogBox">
                            <header className = "projDesc">
                                <p>{element.blog}</p>
                            </header>
                        </div>
                    </Link>
                    <header className = "projExp">
                        <p> {element.written} </p>
                        <p className = "bottomRow"> {element.read} </p>
                        <div className = "vertex-up"></div>
                        <div className = "vertex-down"></div>
                    </header>
                </div>
            ))}
        </div>
        
    );
}