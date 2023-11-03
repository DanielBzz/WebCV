import React from "react";
import "../styles/MenuItems.css";

export default function MenuItems(props) {
    return (
      <ul id="menuItems" className={props.className}>
        <NavNode aClass={props.ancClass} name="About" />
        <NavNode aClass={props.ancClass} name="Projects" />
        <NavNode aClass={props.ancClass} name="Education & Experience" />
      </ul>
    );
  }
  
  
  function NavNode(props){
      return <li className="node">
      <a className={props.aClass} href={`/#${props.name.replaceAll(' ', '')}`}>{props.name}</a>
      </li>
  }