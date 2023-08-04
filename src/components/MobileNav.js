import { Link } from 'react-scroll';

export default function MobileNav({ className }) {
  return (
    <aside className={`mobile__nav py-3 ${className}`}>
      <Link
        activeClass="active"
        className="nav__link"
        title="Home"
        to="section-1"
        spy={true}
        smooth={true}
        duration={500}
      >
        Home
      </Link>
      <Link
        activeClass="active"
        className="nav__link"
        title="About Me"
        to="section-2"
        spy={true}
        smooth={true}
        duration={500}
      >
        About Me
      </Link>
      <Link
        activeClass="active"
        className="nav__link"
        title="Skills"
        to="section-3"
        spy={true}
        smooth={true}
        duration={500}
      >
        Skills
      </Link>
      <Link
        activeClass="active"
        className="nav__link"
        title="Contact"
        to="section-4"
        spy={true}
        smooth={true}
        duration={500}
      >
        Contact
      </Link>
    </aside>
  );
}
