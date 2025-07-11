import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // emailjs.send(serviceID, templateID, templateParams(formdata), emailjs_public_key)
      await emailjs.send(
        "service_aw5fv0c",
        "template_8eb0f3j",
        {
          from_name: form.name,
          to_name: "Shiny",
          from_email: form.email,
          reply_to: form.email,
          message: form.message,
        },
        "BDAEUZsNMOG7S-B0Q"
      );

      setLoading(false);
      //   alert("Your message has been sent!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <section id="contact" className="c-space my-20">
      <h3 className="head-text">Contact Me</h3>
      <div
        className="relative flex min-h-screen flex-col items-center justify-center pt-16 pb-16"
        // style={{ backgroundImage: "url('assets/terminal.png')" }}
      >
        <img
          src="assets/terminal.png"
          alt="terminal-backgound"
          className="absolute inset-0 min-h-full"
        />

        <div className="contact-container">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray_gradient">
            Let's Collaborate
          </h3>
          <p className="text-justify text-base sm:text-base text-white-600 mt-3">
            Whether it's freelance work, a full-time opportunity, or just tech
            talk — I’m always up for a great conversation. Feel free to reach
            out anytime.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            {/* Full Name */}
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>

            {/* Email */}
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>

            {/* Message */}
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I wanna hire you..."
              />
            </label>

            {/* Submit button */}
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="assets/send2.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
