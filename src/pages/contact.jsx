import "./contact.css"

function Contact() {
    return (
        <section className="contact">
            <h1>contact</h1>
            <h2>I'd love to hear from you! Fill out the form below to reach out.</h2>
            <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="contact-form"
                >
                 <input type="hidden" name="form-name" value="contact" />
                 <p style={{ display: "none" }}>
                    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                  </p>        
                <input type="hidden" name="form-name" value="contact" />
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="message" placeholder="Message" required></textarea>
                <button type="submit">Send</button>
                </form>
        </section>
    );
}

export default Contact;