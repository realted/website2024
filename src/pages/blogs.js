import React from "react";
import {Link} from "react-router-dom";

export default function Blogs(){
    const blogContent = [
        {blog: "y2 and running", written: "Written: 1/7 '24", read: "Read: 10 mins",
          to: "https://therealtedyoo.substack.com/p/y2-eng-sci-and-running"},
        {blog: "Memory Nodes", written: "Written: TBD", read: "Read: TBD",
          to: ""},
        {blog: "TBD", written: "Written: TBD", read: "Read: TBD",
          to: ""},
        {blog: "TBD", written: "Written: TBD", read: "Read: TBD",
          to: ""},    
    ];
    
    return (
        <>
        <div className="blogs">
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
        </>
    );
}