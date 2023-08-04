import { Element } from 'react-scroll';

export default function Contact({ children }) {
  return (
    <Element className="contact text__center py-10" name="section-4">
      <div className="container">
        <h2 className="heading__secondary line-center myb-5">Get In Touch</h2>
        {children}
      </div>
    </Element>
  );
}
