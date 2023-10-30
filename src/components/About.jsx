import React from "react";
import "../css/About.css";

export default function About(){

    return <div>
    <div id="aboutContainer">
        <h1 id="aboutTitle" className="titleItem item">Hey, I'm Daniel.</h1>
        <p id="aboutSubTitle" className="titleItem item">A human && SW Developer</p>
        <p id="about" className="item">
        I'm a passionate software developer with a keen interest in architecture and a penchant for tackling complex challenges.<br/> 
        Armed with a degree in Computer Science, I'm poised to embark on my journey in the tech industry and eager to contribute my skills to innovative projects.<br/>
        My approach to development is deeply rooted in Object-Oriented Programming principles, which I believe form the cornerstone of robust and scalable software solutions.<br/> 
        I'm driven by a deep desire to create software that not only works seamlessly but also stands the test of time.
        </p>
        <div id="ifStatement" className="item">
        <p>
            if (lookingForDedicatedProgrammer)<br/>
            {"{"}<br/>
            <a href="mailto:danielbaz199@gmail.com">&nbsp;&nbsp;&nbsp;send me message;</a><br/>
            {"}"}<br/>
        </p>
        </div>
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


function SkillType(props){
    return <div>
    <h5>{props.title}</h5>
    <ul>
        {props.skills.map((x, ind) => <li key={ind}>{x}</li>)}
    </ul>
    </div>;
            
}

