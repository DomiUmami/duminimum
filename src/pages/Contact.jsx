import "../styles/NewApp.css"


import Header from '../components/header';
import Footer from '../components/footer';

import { Link } from "react-router-dom";
import ProjectCardGenerator from "../components/CardGenerator";
import GithubProfile from '../components/GitHubCall';

function Contact() {

  
  return (
    <div className="body">
      <Header/>
      <main className="main">
        <div className="content-container">
          <div className="content">
        <GithubProfile username="DomiUmami"/>
          </div>
        <div className="content">
      <a className="contact-card" href="duminimum@gmail.com"
      target="_blank"
      rel="noopener noreferrer"> Email </a>
      <a className="contact-card" href="https://www.linkedin.com/in/dominikwilliams/">LinkedIn</a>
      <a className="contact-card" href="https://www.upwork.com/freelancers/~018af57cb60a01e8a7?mp_source=share">Upwork</a>
      <Link to="/booking" className="contact-card">Booking</Link>
      </div>
      </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Contact;