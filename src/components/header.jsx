import React, { useState } from "react";
import '../styles/NewApp.css';
import { useLocation, Link } from "react-router-dom";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  const routeTitles = {
   //Currently empty
  };

  // Default fallback if path doesn’t match
  const headerName = routeTitles[location.pathname] || "Home" /*This will change when more pages are set up*/;

const goHome = () => {
    // External link (different domain)
    window.location.href = "https://duminimum.com";
  };

  return (
       <header className="header">

     <a href="https://duminimum.com" className="homeimg"></a>
        
    
     <nav className="nav">
        
          <Link to='/' className="links">Home</Link>
<a style={{fontSize: "2rem"}}> | </a>
          <Link to='/portfolio' className="links">Portfolio</Link>
<a style={{fontSize: "2rem"}}> | </a>
          <Link to='/about' className="links">About</Link>
<a style={{fontSize: "2rem"}}> | </a>
          <Link to='/contact' className="links">Contact</Link>
          
      </nav>
    </header>
  );
}

export default Header;