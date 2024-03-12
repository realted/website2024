import React from "react";
import {Link} from "react-router-dom";
import { IoMdHome } from "react-icons/io";

const nav = [
    { to: "/about", className: "navHeader", label: "About"},
    { to: "/blogs", className: "navHeader", label: "Blogs"},
    { to: "/projects", className: "navHeader", label: "Projects"},
    { to: "/experience", className: "navHeader", label: "Experience" },
  ];
const Navbar = () => {
    return(
        <div className = "topNav">
            <Link to="/home" target="_self">
            <div className="homeIcon">
                <IoMdHome />
            </div>
            </Link>
            {nav.map((element, index) => (
            <Link  key = {index} to={element.to} className="navHeader" target="_self">
                <header className = "navHeader">
                {element.label}
                </header>
            </Link>
            ))}
        </div>
    );
}

export default Navbar;