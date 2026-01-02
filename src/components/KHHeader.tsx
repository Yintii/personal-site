import { useState } from "react";

function KHHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="tiktok-sans bg-frosted">
      <div className="container flex align-center space-between">
        <div id="brand">Kele Heart</div>
        <div id="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </div>
        <nav 
          style={menuOpen ? { display: "flex" } : { display: "none" }} 
          className="column align-center bg-frosted column m-1 p-1"
        >
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default KHHeader;
