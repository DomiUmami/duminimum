
import { Link } from "react-router-dom";
import "../styles/Updated.css";
import "../styles/About.css";
import Header from "../components/header";
import Footer from "../components/footer";

function About() {
  return (
    <div className="page">
      <Header />

      <main className="main about-page">
        {/* INTRO */}
        <section className="content-container about-hero">
          <div className="content about-hero-content">
            <p className="about-eyebrow">A LITTLE ABOUT ME</p>

            <h1>
              Building things with <span>purpose.</span>
            </h1>

            <p className="about-lead">
              I'm a self-taught web developer with a background in
              surveying, mapping, and technical problem-solving. I build
              practical digital experiences that help people and
              businesses bring their ideas to life.
            </p>

            <div className="about-actions">
              <Link to="/projects" className="about-button">
                View My Work ↗
              </Link>

              <Link to="/contact" className="about-button-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

        {/* MY STORY */}
        <section className="content-container about-story">
          <div className="content">
            <p className="about-eyebrow">MY STORY</p>

            <h2>
              From the field to the <span>browser.</span>
            </h2>

            <p>
              My professional background is rooted in land surveying,
              mapping, and technical work. Those experiences taught me
              how to approach complex problems, work carefully with data,
              and understand how important accuracy and reliability are
              to a finished result.
            </p>

            <p>
              Over time, I became interested in applying that same
              problem-solving mindset to web development. Through
              self-directed learning and hands-on projects, I began
              building websites and applications, exploring everything
              from front-end interfaces to the functionality behind
              them.
            </p>

            <p>
              Today, I bring both perspectives to my work: a practical,
              detail-oriented approach shaped by my technical background
              and a creative drive to build useful digital experiences.
              I'm continuing to expand my skills with every project.
            </p>
          </div>
        </section>

        {/* HOW I WORK */}
        <section className="content-container about-approach">
          <div className="content">
            <p className="about-eyebrow">MY APPROACH</p>

            <h2>How I approach a project.</h2>

            <div className="about-values-grid">
              <article className="about-value-card">
                <span className="about-value-number">01</span>
                <h3>Understand the problem</h3>
                <p>
                  Every good project starts with understanding the goal,
                  the people using it, and what success should look like.
                </p>
              </article>

              <article className="about-value-card">
                <span className="about-value-number">02</span>
                <h3>Build with purpose</h3>
                <p>
                  I focus on clean, practical solutions that balance
                  usability, functionality, and thoughtful design.
                </p>
              </article>

              <article className="about-value-card">
                <span className="about-value-number">03</span>
                <h3>Keep improving</h3>
                <p>
                  I value feedback, continuous learning, and refining
                  the details that make a project better.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="content-container about-tech">
          <div className="content">
            <p className="about-eyebrow">WHAT I WORK WITH</p>

            <h2>Tools and technologies.</h2>

            <p>
              My focus is on building and improving websites and web
              applications, using the right tools for each project's
              needs.
            </p>

            <div className="about-tech-list">
              <span>HTML &amp; CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Vite</span>
              <span>REST APIs</span>
              <span>Git &amp; GitHub</span>
              <span>Vercel</span>
              <span>Responsive Design</span>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="content-container about-cta">
          <div className="content">
            <p className="about-eyebrow">HAVE SOMETHING IN MIND?</p>

            <h2>
              Let's build something <span>useful.</span>
            </h2>

            <p>
              Whether you have a clear plan or just the beginning of an
              idea, I'd be happy to hear what you're working on.
            </p>

            <Link to="/contact" className="about-button">
              Start a Conversation ↗
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;
