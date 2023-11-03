import React from "react";
import "../styles/EducationExp.css";

export default function EducationAndExperience(){
    return (
      <div id="Education&Experience">
        <div className="mainContainer eeDiv">
          <h2 className="titleItem">Education</h2>
          <div className="borderAddOn">
            <h2>B.sc computer science</h2>
            <p>The Academic College of Tel-Aviv-Jaffa</p>
            <p>2020 - 2023</p>
          </div>
        </div>
        <div className="mainContainer eeDiv">
          <h2 className="titleItem">Experience</h2>
          <div className="borderAddOn">
            <p>Recently graduated, I am now actively seeking my first role as a SW developer.</p>
            <p>Will your company be the first to make its mark on my resume?</p>
          </div>
        </div>
      </div>
    );
}