
import { Link } from "react-router-dom";
import Typewriter from "../components/Typewriter.jsx";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/Updated.css";

function LandingPage() {
  const services = [
    {
      number: "01",
      title: "Design & Mockups",
      description:
        "Turn your idea into a clear visual plan before development begins.",
      price: "From $250",
    },
    {
      number: "02",
      title: "Website Development",
      description:
        "Build a responsive website tailored to your goals and audience.",
      price: "From $450",
    },
    {
      number: "03",
      title: "Launch & Support",
      description:
        "Get your website deployed, tested, and ready for visitors.",
      price: "From $300",
    },
  ];

  const projects = [
    {
      title: "Golden Valley Drafting",
      type: "Business Website",
      description:
        "A web presence for surveying-related CAD drafting and vacant land documentation services.",
      link: "https://goldenvalleydrafting.com",
    },
    {
      title: "Softouch Training Tool",
      type: "Stripe Integrated Project",
      description:
        "A website for a basketball training tool with stripe integrated services.",
      link: "https://rbrock1588.org/",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We discuss your idea, audience, goals, and requirements.",
    },
    {
      number: "02",
      title: "Planning",
      description:
        "We establish the design direction, scope, and deliverables.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "I build the website and refine it based on agreed feedback.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "We test the finished site and prepare it for deployment.",
    },
  ];

  return (
    <div className="page">
      <Header />

      <main className="main">
        {/* HERO */}
        <section className="hero section-padding">
          <div className="hero-content">
            <span className="eyebrow">
              INDEPENDENT WEB DEVELOPER
            </span>

            <h1>
              Ideas into websites.
              <br />
              <Typewriter />
            </h1>

            <p className="hero-description">
              I build modern, responsive websites for people
              and businesses looking to establish or improve
              their online presence.
            </p>

            <div className="hero-actions">
              <Link to="/booking" className="live-link">
                Book a Consultation ↗
              </Link>

              <a href="#projects" className="secondary-link">
                Explore My Work ↓
              </a>
            </div>
          </div>

          <div className="hero-note">
            <span>DESIGN / DEVELOPMENT / LAUNCH</span>
            <p>
              Practical solutions. Thoughtful design.
              No unnecessary complexity.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section-padding">
          <div className="section-heading">
            <span className="eyebrow">01 / SERVICES</span>
            <h2>What I can help you build.</h2>
            <p>
              From the first concept to a finished website,
              get the help you need at each stage.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article
                className="service-card"
                key={service.number}
              >
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <strong>{service.price}</strong>
                <Link to="/booking">
                  Discuss this service ↗
                </Link>
              </article>
            ))}
          </div>

          <p className="pricing-note">
            Starting prices are indicative. Final pricing
            depends on project scope and requirements.
          </p>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="section-padding projects-section"
        >
          <div className="section-heading">
            <span className="eyebrow">02 / SELECTED WORK</span>
            <h2>Things I've been building.</h2>
            <p>
              A look at my projects, experiments, and
              practical applications of web development.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.title}
              >
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Project ↗
                </a>
              </article>
            ))}
          </div>

          <a
            className="secondary-link"
            href="https://github.com/DomiUmami"
            target="_blank"
            rel="noreferrer"
          >
            Explore GitHub ↗
          </a>
        </section>

        {/* PROCESS */}
        <section className="section-padding">
          <div className="section-heading">
            <span className="eyebrow">03 / HOW IT WORKS</span>
            <h2>A straightforward process.</h2>
            <p>
              Clear expectations and defined steps from
              the initial conversation to launch.
            </p>
          </div>

          <div className="process-grid">
            {steps.map((step) => (
              <article className="process-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section section-padding">
          <span className="eyebrow">04 / YOUR NEXT PROJECT</span>
          <h2>Have an idea worth building?</h2>
          <p>
            Tell me what you have in mind. We'll discuss
            your goals and determine the best way forward.
          </p>

          

          <div className="hero-actions">
            <Link to="/booking" className="live-link">
              Book a Consultation ↗
            </Link>

            <a
              href="mailto:duminimum@gmail.com"
              className="secondary-link"
            >
              Send an Email ↗
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;
