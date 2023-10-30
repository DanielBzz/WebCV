import React, { useState } from "react";
import "../css/NavBar.css";
import MenuIcon from "../icons/list.svg";

export default function NavBar(){
    const [sideMenuOn, setSideMenu] = useState(false);
    const toggleSideMenu = () => setSideMenu(!sideMenuOn);
    let scrollingPos = window.scrollY;

    function onScroll(){
        const newPos = window.scrollY;
        if(!sideMenuOn && newPos > scrollingPos){
            document.getElementById('navBar').style.top = '-90px';
        }else{
            document.getElementById('navBar').style.top = '0';
        }

        scrollingPos = newPos;
    }

    window.onscroll = onScroll;
    window.addEventListener('click', (event) => {
        if(!event.target.closest('#menuButton'))
            setSideMenu(false)
    });
    window.addEventListener('resize', () => setSideMenu(false));

    return <div><nav className="menu" id="navBar">
        <a id="side-title" href="/"><h1>Daniel Portfolio</h1></a>
        <ul>
            <NavNode aClass="circle" name="About" />
            <NavNode aClass="circle" name="Projects" />
            <NavNode aClass="circle" name="Education and Experience" />
            <NavNode aClass="circle" name="Contact" />
        </ul>
        <button onClick={toggleSideMenu} id="menuButton"><img alt="menuIcon" src={MenuIcon} /></button>
    </nav>
    {sideMenuOn && (
          <nav className="menu" id="sideMenu">
            <ul>
            <NavNode name="About" />
            <NavNode name="Projects" />
            <NavNode name="Education and Experience" />
            <NavNode name="Contact" />
            </ul>
          </nav>
        )}
    </div>
}

function NavNode(props){
    return <li className="node">
    <a className={props.aClass} href={`/${props.name}`}>{props.name}</a>
    </li>
}