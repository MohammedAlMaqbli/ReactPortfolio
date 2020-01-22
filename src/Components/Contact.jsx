import React from "react";

const Contact = () => (
  <section className="contact-section" id="contact">
    <h1>
      <span className="main-color">.</span>contact
    </h1>
    <form action="">
      <input type="text" name="fullname" placeholder="fullname" />
      <input type="email" name="email" placeholder="e-mail" />
      <textarea
        name="message"
        id=""
        cols="30"
        rows="10"
        placeholder="message"
      ></textarea>
      <input type="submit" />
    </form>
  </section>
);

export default Contact;
