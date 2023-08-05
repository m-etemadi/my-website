import NavLink from './NavLink';

const navLinksData = [
  { title: 'Home', to: 'section-1' },
  { title: 'About Me', to: 'section-2' },
  { title: 'Skills', to: 'section-3' },
  { title: 'Contact Me', to: 'section-4' },
];

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
