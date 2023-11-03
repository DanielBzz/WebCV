import React, { useState } from "react";
import jsonFiles from "../utils/projectsList.js";
import "../styles/Projects.css";



export default function Projects() {
    const [showProjectId,setShowProjectId] = useState(0);

    function onArrowClick(event){
        if(event.target.closest('#leftArrow')){
            switchProject(showProjectId - 1);
        }else{
            switchProject(showProjectId + 1);
        }
    }

    function switchProject(id){
        const nextId = (id + jsonFiles.length) % jsonFiles.length;
        
        document.getElementById('project-' + nextId).style.display = "flex";
        document.getElementById('project-' + showProjectId).style.display = "none";
        setShowProjectId(nextId);
    }

    return (
    <div id="Projects" className="mainContainer">
      <h2 className="titleItem">My Projects</h2>
      <div id="leftArrow" className="arrow">
        <button onClick={onArrowClick}><svg xmlns="http://www.w3.org/2000/svg" className="arrow-icon" viewBox="0 0 16 16">
  <path d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
</svg>
</button>
      </div>
      <div id="projectContainer">
        {jsonFiles.map((jsonObj, index) => (
          <Project id={index} key={index} json={jsonObj} />
        ))}
      </div>
      <div id="rightArrow" className="arrow">
          <button onClick={onArrowClick}><svg xmlns="http://www.w3.org/2000/svg" className="arrow-icon" viewBox="0 0 16 16">
  <path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
</svg></button>
      </div>
    </div>
  );
}

function Project(props) {
  const projectData = props.json;
  const isInitialProject = props.id === 0;

  return (
    <div style={isInitialProject ? {display : 'flex'} : {}} id={'project-' + props.id} className="project borderAddOn wipe">
      <h2>
        {projectData.name}{" "}
        {projectData.logoName.length > 0 && (
          <img alt="Logo" src={require("../resources/icons/" + projectData.logoName)} />
        )}
      </h2>
      {paragraphFormatter(projectData.description)}
      <p>{projectData.tech.length > 0 && projectData.tech}</p>
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

function paragraphFormatter(str) {

  return (
    <p>
      {str.split("  ").map((str, ind) => (
        <span key={ind}>
          {str}
          {str[0] === "-" && <br />}
          <br />
        </span>
      ))}
    </p>
  );
}