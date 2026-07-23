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
      title: "Upwork",
      description: "Freelance services",
      link:
        "https://www.upwork.com/freelancers/~018af57cb60a01e8a7?mp_source=share"
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
          </div>
        </section>

      </main>
      <Footer />
    </div>

  );

}


export default Contact;