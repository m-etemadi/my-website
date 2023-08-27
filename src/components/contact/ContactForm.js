import { useState } from 'react';

export default function ContactForm() {
  const [error, setError] = useState('');
  const URL = 'https://getform.io/f/a485288e-41eb-4d93-88e9-afbbc5c35de3';

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const res = await fetch(URL, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      if (!res.ok) throw new Error('Something went wrong!');
      const data = await res.json();

      if (data.success) {
        setError('Message sent!');
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form method="POST" className="form myb-8" onSubmit={handleSubmit}>
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
        <input type="hidden" name="_gotcha" style={{ display: 'none' }} />
        <button
          type="submit"
          name="submit"
          className="btn__primary"
          title="Send Message"
        >
          Send Message
        </button>
      </div>
      {error && <div className="form__group">{error}</div>}
    </form>
  );
}
