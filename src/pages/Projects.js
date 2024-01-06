import React from "react";
import {Link} from "react-router-dom";

export default function Projects() {
  const timeline = [
    {act: "Research Assignment", actDesc: "An ethical analysis of LBAR Games",
      to: "http://tinyurl.com/57d3p7v8", date: "DEC 5"},
    {act: "UTEK Hackathon", actDesc: "Creating an effective wind powered car", 
     to: "http://tinyurl.com/he79sydx", date: "NOV 11"},
    {act: "RSX ARM Mechanical", actDesc: "Manufacturing Carbon Fibre for extraterrestial rovers", 
     to: "http://tinyurl.com/5fea93mz", date: "NOV 1"}
  ];

  return (
    <>
    <div className="proj">
        <header className="y2023">
            <p>2023</p>
        </header>
        
      {timeline.map((element, index) => (
          <div className = "projLayout">
            <div className = "dayLayout"> 
              <header className = "projDate">
                <p>{element.date}</p>
              </header>
              <div className = "triangle"> 
                <div className = "inner-triangle"> </div>
              </div>
            </div>
            <Link key = {index} to={element.to} className = "projBox">
              <div className = "projBox">
                  <header className = "projDesc">
                      <p>{element.act}</p>
                  </header>
                  <header className = "projExp">
                      <p>{element.actDesc}</p>
                  </header>
              </div>
            </Link>
          </div>
      ))}

      
    
    </div>
    </>
  );
}