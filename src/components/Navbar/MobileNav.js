import NavLink from './NavLink';
import { navLinksData } from './navLinksData';

export default function MobileNav({ className }) {
  return (
    <aside className={`mobile__nav py-3 ${className}`}>
      <ul>
        {navLinksData.map(link => (
          <NavLink link={link} key={link.title} />
        ))}
      </ul>
    </aside>
  );
}
