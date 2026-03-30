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
    window.location.href = "https://duminimum.vercel.app/";
  };

  return (
       <header className="header">
      <a className="compname" onClick={goHome} > DUMinimum </a>
     <nav className="nav">
          <a className="links" href="https://duminimum.vercel.app">Home</a>
<a> | </a>
          <a className="links" href="https://www.linkedin.com/in/dominikwilliams/">LinkedIn</a>
<a> | </a>
          <Link to='/projects' className="links">Projects</Link>
<a> | </a>
          <a className="links" href="https://rootedintelligence-mockup.vercel.app">Current Project</a>
          
      </nav>
    </header>
  );
}

export default Header;