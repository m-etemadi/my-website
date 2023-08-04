import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="header__navbar">
      <ul>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
          <Link
            activeClass="active"
            className="nav__link"
            title="Contact Me"
            to="section-4"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}
