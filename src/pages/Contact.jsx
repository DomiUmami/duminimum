
import { useState } from "react";
import "../styles/Contact.css";
import "../styles/Updated.css";
import Header from "../components/header";
import Footer from "../components/footer";

const initialFormData = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  timeline: "",
  details: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status) {
      setStatus(null);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to send your inquiry. Please try again."
        );
      }

      setStatus({
        type: "success",
        message: "Thanks! Your inquiry has been sent successfully.",
      });

      setFormData(initialFormData);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
      <main className="contact-page">
        <Header />
      <section className="contact-form-section">
        <div className="contact-intro">
          <p className="section-eyebrow">LET'S WORK TOGETHER</p>

          <h1>
            Tell me about your <span>project.</span>
          </h1>

          <p>
            Have a website idea or need help improving an existing one?
            Send me a few details and I'll get back to you.
          </p>
        </div>

        <form className="inquiry-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                maxLength={100}
                required
                disabled={submitting}
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                maxLength={254}
                required
                disabled={submitting}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="projectType">What do you need? *</label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              disabled={submitting}
            >
              <option value="">Select a service</option>
              <option value="New Website">New Website</option>
              <option value="Website Redesign">Website Redesign</option>
              <option value="Website Development">
                Website Development
              </option>
              <option value="Maintenance and Support">
                Maintenance and Support
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="budget">Estimated budget</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                disabled={submitting}
              >
                <option value="">Select a budget</option>
                <option value="Under $250">Under $250</option>
                <option value="$250–$500">$250–$500</option>
                <option value="$500–$1,000">$500–$1,000</option>
                <option value="$1,000+">$1,000+</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="timeline">Desired timeline</label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                disabled={submitting}
              >
                <option value="">Select a timeline</option>
                <option value="ASAP">ASAP</option>
                <option value="Within 2–4 weeks">
                  Within 2–4 weeks
                </option>
                <option value="Within 1–3 months">
                  Within 1–3 months
                </option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="details">Project details *</label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={6}
              maxLength={2000}
              required
              disabled={submitting}
              placeholder="Tell me about your project, goals, and any features you need..."
            />
            <span className="character-count">
              {formData.details.length}/2000
            </span>
          </div>

          {status && (
            <p
              className={
                status.type === "success"
                  ? "form-status form-success"
                  : "form-status form-error"
              }
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            className="submit-inquiry"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Send Inquiry ↗"}
          </button>

          <p className="form-required-note">* Required fields</p>
        </form>
      </section>
    </main>
  );
}
