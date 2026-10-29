
import { Link } from "react-router-dom";
import "../styles/Updated.css";
import "../styles/Portfolio.css";
import Header from "../components/header";
import Footer from "../components/footer";
import ProjectCardGenerator from "../components/CardGenerator";

function Portfolio() {
  return (
    <div className="page portfolio-page">
      <Header />

      <main className="main">
        {/* PORTFOLIO INTRO */}
        <section className="content-container portfolio-hero">
          <div className="content portfolio-hero-content">
            <p className="portfolio-eyebrow">MY WORK</p>

            <h1>
              Projects built with <span>purpose.</span>
            </h1>

            <p className="portfolio-lead">
              A collection of projects I've worked on, explored, and
              developed while growing as a web developer. Each project
              represents an opportunity to solve problems, learn new
              technologies, and turn ideas into something useful.
            </p>

            <div className="portfolio-hero-actions">
              <a href="#projects" className="portfolio-button">
                Explore Projects ↓
              </a>

              <a
                href="https://github.com/DomiUmami"
                target="_blank"
                rel="noreferrer"
                className="portfolio-button-secondary"
              >
                Visit GitHub ↗
              </a>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="content-container portfolio-projects"
        >
          <div className="content">
            <div className="portfolio-section-heading">
              <div>
                <p className="portfolio-eyebrow">PROJECT SHOWCASE</p>
                <h2>Things I've built.</h2>
              </div>

              <p>
                Explore my repositories and projects below.
              </p>
            </div>

            <div className="portfolio-project-generator">
              <ProjectCardGenerator username="DomiUmami" />
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="content-container portfolio-cta">
          <div className="content">
            <p className="portfolio-eyebrow">HAVE A PROJECT IN MIND?</p>

            <h2>
              Let's build something <span>together.</span>
            </h2>

            <p>
              Looking for a website, a redesign, or help bringing a
              digital idea to life? Let's talk about what you need.
            </p>

            <Link to="/contact" className="portfolio-button">
              Start a Conversation ↗
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Portfolio;
