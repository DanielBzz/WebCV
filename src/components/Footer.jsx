import React from "react";
import MenuItems from "./MenuItems.jsx";
import Links from './Links';
import "../styles/Footer.css";


export default function Footer(){
  return (
    <div id="footer">
      <hr />
      <div id="mainFooterArea">
        <div>
          <h3 className="footerTitle">Quick Links</h3>
          <MenuItems className="chosableItem" />
        </div>
        <div>
          <h3 className="footerTitle">Connect</h3>
          <Links className="chosableItem"/>
        </div>
      </div>
      <hr />
      <div id="secondaryFooterArea">
        <p>
          All content and design elements on this website were meticulously
          crafted by Daniel Bazis.
        </p>
        <p>
          Icons provided by <a rel="noreferrer" target="_blank" style={{"fontWeight": "bold" }} href="https://getbootstrap.com/">Bootstrap</a>.
        </p>
        <p>©2023 Daniel Bazis. All Rights Reserved.</p>
      </div>
    </div>
  );
}