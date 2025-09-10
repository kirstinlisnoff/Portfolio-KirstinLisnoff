import "./contact.css"

function Contact() {
    return (
        <section className="contact">
            <h1>contact</h1>
            <h2>I'd love to hear from you! Fill out the form below to reach out.</h2>
            <form className="contact-form">
                <div className="form-content">
                <input type="text" placeholder="Name" required />
                </div>
                <div className="form-content">
                <input type="email" placeholder="Email" required />
                </div>
                <div className="form-message">
                <textarea placeholder="Message" required />
                </div>
                <button type="submit">Get in touch</button>
                
            </form>
        </section>
    );
}

export default Contact;