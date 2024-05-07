import React from "react";
import {Link} from "react-router-dom";
import Navbar from './Navbar';
import blogpic1 from './blogpic1.png';
import blogpic2 from './blogpic2.jpg';
import blogpic3 from './blogpic3.jpg';


export default function Blogs(){
    const blogContent = [
        {blog: "y2 and running", written: "Written: 1/7 '24", img: blogpic1,
          to: "https://therealtedyoo.substack.com/p/y2-eng-sci-and-running"},
        {blog: "A Lens through Lorentz", written: "Written: 4/11 '24", img: blogpic2,
        to: "https://therealtedyoo.substack.com/p/a-lens-through-lorentz"},
        {blog: "Second Year me is dead", written: "Written: 4/28 '24", img: blogpic3,
        to: "https://therealtedyoo.substack.com/p/second-year-me-is-dead"}
    ];
    
    return (
        <div className="blogs">
            <Navbar />
            <header className="blogTitle">
                <p>Blogs</p>
            </header>

            {blogContent.map((element, index) => (
                <div className = "blogLayout">            
                    <Link  key = {index} to={element.to} className="blogLayout" target="_blank">
                        <img src={element.img} className="blogImg" alt="blogImage" style = {{width: '400px'}}/>
                        
                        <header className = "blogName">
                            <p>{element.blog}</p>
                            <header className = "blogDesc"> {element.written} </header>
                        </header>

                    </Link>
                </div>
            ))}
        </div>
        
    );
}