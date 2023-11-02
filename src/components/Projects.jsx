import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        const divs = document.querySelectorAll(".project");
        const maxHeight = Math.max(...Array.from(divs).map(div =>{
            console.log(div.clientHeight);
            return div.clientHeight;
        } ));
    
        document.getElementById("projectContainer").style.height = maxHeight;
      }, []);

    return (
    <div id="Projects" className="mainContainer">
      <h2 className="titleItem">My Projects</h2>
      <div id="leftArrow" className="arrow">
        <button onClick={onArrowClick}><svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M590.08 810.666667a42.666667 42.666667 0 0 1-33.28-15.786667l-206.08-256a42.666667 42.666667 0 0 1 0-54.186667l213.333333-256a42.666667 42.666667 0 0 1 65.706667 54.613334L439.04 512l184.32 228.693333a42.666667 42.666667 0 0 1-33.28 69.973334z"  /></svg>
</button>
      </div>
      <div id="projectContainer">
        {jsonFiles.map((jsonObj, index) => (
          <Project id={index} key={index} json={jsonObj} />
        ))}
      </div>
      <div id="rightArrow" className="arrow">
          <button onClick={onArrowClick}><svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M426.666667 810.666667a42.666667 42.666667 0 0 1-27.306667-9.813334 42.666667 42.666667 0 0 1-5.546667-60.16L584.96 512 400.64 282.88a42.666667 42.666667 0 0 1 6.4-60.16 42.666667 42.666667 0 0 1 62.293333 6.4l206.08 256a42.666667 42.666667 0 0 1 0 54.186667l-213.333333 256A42.666667 42.666667 0 0 1 426.666667 810.666667z"  /></svg></button>
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