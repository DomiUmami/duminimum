import "../styles/NewApp.css";
import { useEffect, useRef } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function Booking() {
  const calendlyRef = useRef(null);

  useEffect(() => {

    // Only inject the Calendly script once
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="body">
      <Header />
      <main className="main" style={{minHeight: ""}}>
            <div
              ref={calendlyRef}
              className="calendly-inline-widget"
              data-url="https://calendly.com/duminimum/30min"
              style={{ minWidth: "320px", width: "100%", height: "700px", margin: "0 auto", paddingTop: "0rem" }}
            />
            <div className="content-container"></div>
      </main>
      <Footer />
    </div>
  );
}

export default Booking;