import React from "react";
import {Link} from "react-router-dom";

export default function Blogs(){
    const blogContent = [
        {blog: "y2f and running", written: "Written: 1/7 '24", read: "Read: 5 mins",
          to: ""},
        {blog: "Memory Nodes", written: "Written: 1/7 '24", read: "Read: 5 mins",
          to: ""},
        {blog: "Interview vs Dates", written: "Written: 1/7 '24", read: "Read: 5 mins",
          to: ""},
        {blog: "'Finish 30 Now'", written: "Written: 1/7 '24", read: "Read: 5 mins",
          to: ""},    
    ];

    return (
        <>
        <div className="blogs">
            <header className="blogTitle">
                <p>Blogs</p>
            </header>

            {blogContent.map((element) => (
                <div className = "blogLayout">
                    <div className = "blogBox">
                        <header className = "projDesc">
                            <p>{element.blog}</p>
                        </header>
                    </div>
                    <header className = "projExp">
                        <p> {element.written} </p>
                        <p className = "bottomRow"> {element.read} </p>
                        <div className = "vertex-up"></div>
                        <div className = "vertex-down"></div>
                    </header>
                </div>
            ))}
        </div>
        </>
    );
}