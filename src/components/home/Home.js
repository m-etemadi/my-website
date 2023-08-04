import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link, Element } from 'react-scroll';

export default function Home({ children }) {
  return (
    <Element className="home text__center" name="section-1">
      {children}
      <Link
        className="btn__secondary"
        to="section-2"
        spy={true}
        smooth={true}
        duration={500}
      >
        <FontAwesomeIcon icon={faArrowDown} size="1x" />
      </Link>
    </Element>
  );
}
