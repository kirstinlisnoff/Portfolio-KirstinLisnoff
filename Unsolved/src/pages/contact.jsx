import "./contact.css"

function Contact() {
    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <form className="contact-form">
                <div className="form-content">
                <label>Name:</label>
                <input type="text" required />
                </div>
                <div className="form-content">
                <label>Email:</label>
                <input type="email" required />
                </div>
                <div className="form-content">
                <label>Message:</label>
                <input type="text" required />
                </div>
                <button type="submit">Submit</button>
                
            </form>
        </section>
    );
}

export default Contact;