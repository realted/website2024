import React from "react";
import {Link} from "react-router-dom";
import Navbar from './Navbar';
import blogpic1 from './blogpic1.png';

export default function Blogs(){
    const blogContent = [
        {blog: "y2 and running", written: "Written: 1/7 '24", img: blogpic1,
          to: "https://therealtedyoo.substack.com/p/y2-eng-sci-and-running"},
        {blog: " TBD ", written: "Written: TBD", read: "img: TBD",
          to: ""},
    ];
    
    return (

        <div className="blogs">
            <Navbar />
            <header className="y2023">
                <p>Blogs</p>
            </header>

            {blogContent.map((element, index) => (
                <div className = "blogLayout">
            
                    <img src={element.img} className="blogImg" alt="blogImage"/>
            
                    <Link  key = {index} to={element.to} className="projDesc" target="_blank">
                        <header className = "projDesc">
                            <p>{element.blog}</p>
                        </header>
                    </Link>
                    <header className = "blogDesc">
                        <p> {element.written} </p>
                    </header>
                </div>
            ))}
        </div>
        
    );
}