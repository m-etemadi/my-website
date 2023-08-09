import NavLink from './NavLink';
import { navLinksData } from './navLinksData';

export default function Navbar() {
  return (
    <nav className="header__navbar">
      <ul>
        {navLinksData.map(link => (
          <NavLink link={link} key={link.title} />
        ))}
      </ul>
    </nav>
  );
}
