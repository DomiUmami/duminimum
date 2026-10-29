
import "../styles/Updated.css";
import "../styles/Booking.css";
import { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function Booking() {
  useEffect(() => {
    const scriptSrc =
      "https://assets.calendly.com/assets/external/widget.js";

    // Avoid adding the Calendly script more than once.
    const existingScript = document.querySelector(
      `script[src="${scriptSrc}"]`
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    document.body.appendChild(script);

    // Leave the shared script in place after this page unmounts.
  }, []);

  return (
    <div className="page booking-page">
      <Header />

      <main className="main">
        {/* BOOKING INTRO */}
        <section className="content-container booking-hero">
          <div className="content booking-intro">
            <p className="booking-eyebrow">LET'S CONNECT</p>

            <h1>
              Let's talk about your <span>project.</span>
            </h1>

            <p>
              Book a 30-minute conversation to discuss your idea,
              website needs, or potential project. We'll go over
              your goals, answer questions, and explore the next steps.
            </p>
          </div>
        </section>

        {/* CALENDLY BOOKING WIDGET */}
        <section className="content-container booking-calendar-section">
          <div className="content">
            <div className="booking-calendar-heading">
              <h2>Schedule a meeting</h2>
              <p>
                Choose a date and time that works for you below.
              </p>
            </div>

            <div
              className="calendly-inline-widget booking-calendar"
              data-url="https://calendly.com/duminimum/30min"
            />
          </div>
        </section>

        {/* CONTACT ALTERNATIVE */}
        <section className="content-container booking-alternative">
          <div className="content">
            <p>
              Not ready to schedule a call?
              {" "}
              <a href="/contact">Send me a project inquiry instead ↗</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Booking;
