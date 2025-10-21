import { useState } from "react";
import "./contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        e.target.reset();
      })
      .catch((error) => {
        setLoading(false);
        alert("Oops! Something went wrong: " + error);
      });
  };

  return (
    <section className="contact">
      <h1>Contact</h1>
      <h2>I'd love to hear from you! Fill out the form below to reach out.</h2>

      {/* Success message */}
      {submitted && (
        <p className="success-message fade-in">
          🎉 Thank you! Your message has been sent successfully.
        </p>
      )}

      {/* Hidden form for Netlify detection */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
        <input type="text" name="bot-field" />
      </form>

      {/* Visible form */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />

        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
