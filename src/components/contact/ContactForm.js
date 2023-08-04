export default function ContactForm() {
  return (
    <form className="form myb-8">
      <div className="form__group half-width">
        <input
          name="name"
          className="form__input"
          type="text"
          placeholder="Full Name *"
          required
        />
        <input
          name="email"
          className="form__input"
          type="email"
          placeholder="Email *"
          required
        />
      </div>
      <div className="form__group">
        <input
          name="subject"
          className="form__input"
          type="text"
          placeholder="Subject"
          required
        />
      </div>
      <div className="form__group">
        <textarea
          name="message"
          className="form__input"
          placeholder="Your Message *"
          required
        ></textarea>
      </div>
      <div className="form__group">
        <button name="submit" className="btn__primary" title="Send Message">
          Send Message
        </button>
      </div>
    </form>
  );
}
