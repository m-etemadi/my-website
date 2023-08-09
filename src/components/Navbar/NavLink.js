import { Link } from 'react-scroll';

export default function NavLink({ link }) {
  return (
    <li>
      <Link
        activeClass="active"
        className="nav__link"
        title={link.title}
        to={link.to}
        spy={true}
        smooth={true}
        duration={500}
      >
        {link.title}
      </Link>
    </li>
  );
}
