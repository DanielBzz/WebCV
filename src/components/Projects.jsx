import React from "react";
import jsonFiles from "../utils/projectsList.js";
import "../styles/Projects.css";

export default function Projects() {

    function onArrowClick(event){
        if(event.target.closest('#leftArrow')){

        }else{

        }
        
    }
  
    return (
    <div id="Projects" className="mainContainer">
      <h2 className="titleItem">My Projects</h2>
      <div id="leftArrow" className="arrow">
        <button onClick={onArrowClick}><img alt="left" src={require("../resources/icons/arrow-Left.png")}/></button>
      </div>
      <div id="projectContainer">
        {jsonFiles.map((jsonObj, index) => (
          <Project key={index} json={jsonObj} />
        ))}
      </div>
      <div id="rightArrow" className="arrow">
          <button onClick={onArrowClick}><img alt="right" src={require("../resources/icons/arrow-Right.png")}/></button>
      </div>
    </div>
  );
}

function Project(props) {
  const projectData = props.json;
  const logo = projectData.logoName;
  return (
    <div className="project borderAddOn">
      <h2>
        {projectData.name}{" "}
        {logo.length > 0 && (
          <img alt="Logo" src={require("../resources/icons/" + logo)} />
        )}
      </h2>
      <p>{projectData.description}</p>
      <div id="linksContainer">
        {projectData.github.length > 0 && (
          <a className="projectLink colorizeButton" href={projectData.github}>
            Github         </a>
        )}
        {projectData.websiteLink.length > 0 && (
          <a className="projectLink" href={projectData.websiteLink}>
            Website
          </a>
        )}
      </div>
    </div>
  );
}