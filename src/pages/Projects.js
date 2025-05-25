import React from "react";
import { Link } from "react-router-dom";
import Navbar_proj from './Navbar_proj';

export default function Projects() {
  const timeline2024 = [
    { act: "Signals Paper", to: "https://tinyurl.com/3z56bu7w", date: "DEC 4" },
    { act: "Nand2Tetris", to: "https://github.com/realted/Nand2Tetris-CPU-from-Scratch", date: "Jun 30" },
    { act: "3D SWIM", to: "https://devpost.com/software/3-dimensional-sequencial-wave-imprinting-machine", date: "FEB 18" },
    { act: "AR SUNGLASSES: MEDILENS", to: "https://devpost.com/software/medilens?ref_content=my-projects-tab&ref_feature=my_projects", date: "JAN 24" }
  ];

  const timeline2023 = [
    { act: "RESEARCH ASSIGNMENT", to: "http://tinyurl.com/57d3p7v8", date: "DEC 5" },
    { act: "UTEK HACKATHON", to: "http://tinyurl.com/he79sydx", date: "NOV 11" },
    { act: "RSX ARM MECHANICAL", to: "http://tinyurl.com/5fea93mz", date: "NOV 1" },
    { act: "RASPBERRY PI SELF DRIVING CAR", to: "http://tinyurl.com/3pmc3xsm", date: "JUN 13" },
    { act: "ENGINEERING HANDBOOK", to: "http://tinyurl.com/2p87awhs", date: "APR 18" }
  ];

  return (
    <div className="proj">
      <div className="flexLR">
        <Navbar_proj />

        <div className="projContent">
          <header className="y2023">
            <p>2024</p>
          </header>

          <div className="projLayout">
            <div className="projBar2024" />
            {timeline2024.map((element, index) =>
              index % 4 === 0 && (
                <div className="infoRow" key={index}>
                  {timeline2024.slice(index, index + 4).map((item, subIndex) => (
                    <Link
                      key={subIndex}
                      to={item.to}
                      className="infoLayout"
                      target="_blank"
                    >
                      <header className="projDate">
                        <p>{item.date}</p>
                      </header>
                      <div className="triangle">
                        <div className="inner-triangle"></div>
                      </div>
                      <header className="projDesc">
                        <p>{item.act}</p>
                      </header>
                    </Link>
                  ))}
                </div>
              )
            )}
          </div>

          <header className="y2023">
            <p>2023</p>
          </header>

          <div className="projLayout">
            <div className="projBar2023" />
            {timeline2023.map((element, index) =>
              index % 10 === 0 && (
                <div className="infoRow" key={index}>
                  {timeline2023.slice(index, index + 10).map((item, subIndex) => (
                    <Link
                      key={subIndex}
                      to={item.to}
                      className="infoLayout"
                      target="_blank"
                    >
                      <header className="projDate">
                        <p>{item.date}</p>
                      </header>
                      <div className="triangle">
                        <div className="inner-triangle"></div>
                      </div>
                      <header className="projDesc">
                        <p>{item.act}</p>
                      </header>
                      <header className="projExp">
                        <p>{item.actDesc}</p>
                      </header>
                    </Link>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
