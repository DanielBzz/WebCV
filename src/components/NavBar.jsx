import React from "react";
import "../css/NavBar.css";

export default function NavBar(){

    return <nav className="navBar">
        <a href="/"><h1>Daniel Bazis Portfolio</h1></a>
        <ul>
            <NavNode name="About" />
            <NavNode name="Projects" />
            <NavNode name="Education and Experience" />
            <NavNode name="Contact" />
        </ul>
    </nav>
}

function NavNode(props){
    return <li className="node">
    <a href={`/${props.name}`}>{props.name}</a>
    </li>
}