import "../styles/NewApp.css"
import { Link } from "react-router-dom";

function Footer() {

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left">

    </div>

    <div className="right">
    <Link to ="/privacy-policy"className="footertext">Privacy Policy</Link>
    <Link to ="/terms-and-conditions"className="footertext">Terms & Conditions</Link>
  <a className="footerlink" href="mailto:duminimum@gmail.com"
      >
    duminimum@gmail.com
  </a>
    </div>
  </div>

  
  <div className="footer-bottom">© {new Date().getFullYear()} {" "}<a href="https://www.duminimum.com/" className="footerlink">DUMinimum</a></div>
        </footer>
  );
}

export default Footer;