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
                className="contact-form"
                >
                {/* Hidden field for Netlify form recognition */}
                <input type="hidden" name="form-name" value="contact" />

                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="message" placeholder="Message" required></textarea>
                <button type="submit">Get in touch</button>
                
            </form>
        </section>
    );
}

export default Contact;