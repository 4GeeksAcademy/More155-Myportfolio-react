function Contact() {
  return (
    <section id="contact" className="contact-page">
      <h1>Wanna get in touch?</h1>

      <form id="contact-form" className="contact-form">
        <input 
          type="text" 
          name="user_name" 
          placeholder="Your name" 
          required 
        />
        <input 
          type="email" 
          name="user_email" 
          placeholder="Your email" 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your message" 
          required 
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
