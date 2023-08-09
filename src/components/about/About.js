import { Element } from 'react-scroll';
import about from '../../img/about.jpg';

export default function About({ children }) {
  return (
    <Element className="about py-10" name="section-2">
      <div className="container">
        <div className="about__container">
          <figure className="about__photo">
            <img src={about} alt="Mohammad Etemadi" loading="lazy" />
          </figure>

          <article className="about__content">{children}</article>
        </div>
      </div>
    </Element>
  );
}
