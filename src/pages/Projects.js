import React from "react";
import {Link} from "react-router-dom";

export default function Projects() {
  const timeline = [
    {act: "Research Assignment", actDesc: "An ethical analysis of LBAR Games",
      to: "http://tinyurl.com/57d3p7v8"},
    {act: "UTEK Hackathon", actDesc: "Creating an effective wind powered car", 
     to: "http://tinyurl.com/he79sydx"},
    {act: "RSX ARM Mechanical", actDesc: "Manufacturing Carbon Fibre for extraterrestial rovers", 
     to: "http://tinyurl.com/5fea93mz"}
  ];

  return (
    <>
    <div className="proj">
        <header className="y2023">
            <p>2023</p>
        </header>
        
    {timeline.map((element) => (
        <Link to={element.to}>
          <div className = "projBox">
              <header className = "projDesc">
                  <p>{element.act}</p>
              </header>
              <header className = "projExp">
                  <p>{element.actDesc}</p>
              </header>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
}