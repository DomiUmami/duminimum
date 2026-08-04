import "../styles/NewApp.css";

import Header from "../components/header";
import Footer from "../components/footer";
import GithubProfile from "../components/GitHubCall";

import { Link } from "react-router-dom";


function Contact() {

  const contacts = [
    {
      title: "Email",
      description: "Send me a direct message",
      link:
        "https://mail.google.com/mail/?view=cm&fs=1&to=duminimum@gmail.com&su=Hello&body=I%20saw%20your%20portfolio..."
    },
    {
      title: "LinkedIn",
      description: "Professional profile",
      link:
        "https://www.linkedin.com/in/dominikwilliams/"
    },
    {
      title: "Github",
      description: "Project Repos",
      link:
        "https://github.com/DomiUmami"
    }
  ];


  return (

    <div className="page">

      <Header />

      <main className="main">


        {/* INTRO */}
        <section className="content-container">

          <div className="content">

            <div className="maintext">

              <h1>
                Let's Work Together
              </h1>
              <p>
                Interested in a website, redesign, or development project?
                Send me a message and let's discuss your ideas.
              </p>
              <Link 
                to="/booking"
                className="live-link"
              >
                Book A Consultation
              </Link>
            </div>
          </div>
        </section>
        {/* CONTACT LINKS */}
        <section className="content-container">

          <div className="content">
            {
              contacts.map((contact)=>(
                <a
                  key={contact.title}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                >
                  <h3>
                    {contact.title}
                  </h3>
                  <p>
                    {contact.description}
                  </p>
                </a>
              ))
            }

            <Link 
              to="/booking"
              className="contact-card"
            >
              <h3>
                Booking
              </h3>

              <p>
                Schedule a meeting
              </p>
            </Link>
          </div>
        </section>





        {/* GITHUB */}
        <section className="content-container">
          <div className="content">

            <GithubProfile username="DomiUmami" />
          <p>
            My journey into web development started from a career built on problem-solving, technology, and self-directed learning. After spending years working in surveying, mapping, data management, and technical support roles, I discovered a passion for building digital solutions that help people and businesses operate more efficiently.
            </p>
          <p>
            As someone who is largely self-taught, I've always enjoyed learning new skills and adapting to new challenges. Web development became a natural extension of that mindset, allowing me to combine creativity with technical problem-solving. Whether I'm developing applications, designing websites, or improving user experiences, I enjoy turning ideas into functional tools that create real value.
            </p>
          <p>
            Today, I continue to pursue web development because it gives me the opportunity to build, learn, and grow while helping others bring their projects and businesses to life. Every project is a chance to improve my skills, solve a new problem, and create something meaningful.
            </p>

          </div>
        </section>

      </main>
      <Footer />
    </div>

  );

}


export default Contact;