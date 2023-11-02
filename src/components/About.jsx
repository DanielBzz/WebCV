import React, { useState } from "react";
import "../styles/About.css";

export default function About(){

    return <div id="About" className="mainContainer">
    <div id="aboutContainer" className="mainContainer">
        <h1 id="aboutTitle" className="titleItem aboutItem">Hey, I'm Daniel.</h1>
        <h3 id="aboutSubTitle" className="titleItem aboutItem">A human && SW Developer</h3>
        <div className="aboutItem borderAddOn">
            <p>
                I'm a passionate software developer with a keen interest in architecture and a penchant for tackling complex challenges.<br/> 
                Armed with a degree in Computer Science, I'm poised to embark on my journey in the tech industry and eager to contribute my skills to innovative projects.<br/>
                My approach to development is deeply rooted in Object-Oriented Programming principles, which I believe form the cornerstone of robust and scalable software solutions.<br/> 
                I'm driven by a deep desire to create software that not only works seamlessly but also stands the test of time.
            </p>
        </div>
       <IfStatement/> 
    </div>
    <div id="skillsContainer">        
        <h2 className="titleItem">My Skills</h2>
        <SkillType title="Programming languange" skills={["Java", "C#", "Python", "C", "C++", "JavaScript", "CSS", "HTML"]}/>
        <SkillType title="Frameworks" skills={["Spring", "Django", ".NET", "React",]}/>
        <SkillType title="Dev tools" skills={["Git & GitHub & GitHub Actions", "Docker", "Tomcat-servlets", "AWS", "Postman", "Linux", "SQL" ]}/>
        <SkillType title="Familiar concepts" skills={["Object oriented programming", "Design pattenrs", "Multi-Threading", "Test-driven development", "CI/CD" ]}/>
    </div>
    </div>;
}


function SkillType(props) {
  return (
    <div className="borderAddOn skillsItem">
      <h2>{props.title}</h2>
      <ul>
        {props.skills.map((x, ind) => (
          <li className="colorizeHover borderAddOn" key={ind}>
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}


function IfStatement(){
    const [statement, setStatement] = useState(true);

    function whenHover(){
        animateText(true, statement);
    }
    function onMouseOut(){
        animateText(false, statement);
    }

    function changeStatement(){
        animateText(true, !statement);
        setStatement(!statement);
    }

    function animateText(hover,state) {
      const element = document.querySelector(".animationTextWrapper a");
      
      if(hover && state){
        element.classList.add("animationText");
      }else{
        element.classList.remove("animationText");
      }
    }

    return (
      <div
        onMouseLeave={onMouseOut}
        onMouseEnter={whenHover}
        id="ifStatement"
        className="aboutItem borderAddOn"
      >
        <p>
          <span className="navyText">boolean </span>
          <span className="blueText">lookingForDedicatedProgrammer</span> ={" "}
          <span
            onClick={changeStatement}
            className="buttonSpan colorizeHover borderAddOn"
          >
            {statement.toString()}
          </span>
          ;<br />
          <br />
          <span className="purpleText">if</span> (
          <span className="blueText">lookingForDedicatedProgrammer</span>)<br />
          {"{"}
          <br />
          <span className="animationTextWrapper">
            <a href="mailto:danielbaz199@gmail.com">
              &nbsp;&nbsp;&nbsp;send me message;
            </a>
            <br />
          </span>
          {"}"}
          <br />
        </p>
      </div>
    );
}
