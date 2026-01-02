//import { useState } from "react";

function KHHeader() {
  //const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="tiktok-sans">
      <div className="container flex align-center space-between">
        <div id="brand">Kele Heart</div>
        <nav>
          <a>About</a>
          <a>Portfolio</a>
          <a>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default KHHeader;
