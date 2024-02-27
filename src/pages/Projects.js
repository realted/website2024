import React from "react";
import {Link} from "react-router-dom";

export default function Projects() {
  const timeline2024 = [
    {act: "3D SWIM", actDesc: "Sequential Wave Imprinting Machine projected in 3D Space",
    to: "https://devpost.com/software/3-dimensional-sequencial-wave-imprinting-machine", date: "Feb 18"},
    {act: "AR Sunglasses: Medilense", actDesc: "UTRA Hacks biomedical product for ASD Individuals",
    to: "https://devpost.com/software/medilens?ref_content=my-projects-tab&ref_feature=my_projects", date: "Jan 24"}
  ];
  const timeline2023 = [
    {act: "Research Assignment", actDesc: "An ethical analysis of LBAR Games",
      to: "http://tinyurl.com/57d3p7v8", date: "DEC 5"},
    {act: "UTEK Hackathon", actDesc: "Creating an effective wind powered car", 
     to: "http://tinyurl.com/he79sydx", date: "NOV 11"},
    {act: "RSX ARM Mechanical", actDesc: "Manufacturing Carbon Fibre for extraterrestial rovers", 
     to: "http://tinyurl.com/5fea93mz", date: "NOV 1"},
    {act: "Raspberry Pi Self Driving Car", actDesc: "Using machine learning models to train the PI car", 
     to: "http://tinyurl.com/3pmc3xsm", date: "JUN 13"},
    {act: "Engineering Handbook", actDesc: "Summarizing my positionality of minimalistic design", 
     to: "http://tinyurl.com/2p87awhs", date: "APR 18"}
  ];

  return (
    <>
    <div className="proj">
        <header className="y2023">
            <p>2024</p>
        </header>

        {timeline2024.map((element, index) => (
          <div className = "projLayout">
            <div className = "dayLayout"> 
              <header className = "projDate">
                <p>{element.date}</p>
              </header>
              <div className = "triangle"> 
                <div className = "inner-triangle"> </div>
              </div>
            </div>
            <Link key = {index} to={element.to} className = "projBox" target="_blank">
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

        <header className="y2023">
            <p>2023</p>
        </header>
        
      {timeline2023.map((element, index) => (
          <div className = "projLayout">
            <div className = "dayLayout"> 
              <header className = "projDate">
                <p>{element.date}</p>
              </header>
              <div className = "triangle"> 
                <div className = "inner-triangle"> </div>
              </div>
            </div>
            <Link key = {index} to={element.to} className = "projBox" target="_blank">
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