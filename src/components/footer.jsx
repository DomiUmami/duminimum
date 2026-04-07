import "../styles/NewApp.css"
import { Link } from "react-router-dom";

function Footer() {

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left">

    </div>

    <div className="right">
    <Link to ="/privacy"className="footertext">Privacy Policy</Link>
    <Link to ="/terms"className="footertext">Terms & Conditions</Link>
  <a className="footerlink" href="https://mail.google.com/mail/?view=cm&fs=1&to=duminimum@gmail.com&su=Hello&body=I%20saw%20your%20portfolio..."
      target="_blank"
      rel="noopener noreferrer"
      >
    duminimum@gmail.com
  </a>
    </div>
  </div>

  
  <div className="footer-bottom">© {new Date().getFullYear()} by DUMinimum. Powered by{" "}<a href="https://duminimum.vercel.app/" className="footerlink">DUMinimum</a></div>
        </footer>
  );
}

export default Footer;