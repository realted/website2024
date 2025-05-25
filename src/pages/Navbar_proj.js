import React from "react";
import {Link} from "react-router-dom";
import { IoMdHome } from "react-icons/io";

const menuItems = [
    { to: "/about", className: "navHeader", label: "About"},
    { to: "/blogs", className: "navHeader", label: "Blogs"},
    { to: "/projects", className: "navHeader", label: "Projects"},
    { to: "/experience", className: "navHeader", label: "Experience" },
  ];
const Navbar_proj = () => {
    return(
        <div className="navColumn_proj">
            <Link to="/home" target="_self">
            <div className="homeIcon">
                <IoMdHome />
            </div>
            </Link>
            {menuItems.map((menuItem, index) => (
            <Link key={index} to={menuItem.to} className={menuItem.className} target={menuItem.target}>
                <div className="descMain">
                <p>{menuItem.label}</p>
                </div>
            </Link>
            ))}
        </div>
    );
}

export default Navbar_proj;