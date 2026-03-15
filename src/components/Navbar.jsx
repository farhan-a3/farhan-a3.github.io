import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const links = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT' },
  { to: '/career', label: 'CAREER' },
  { to: '/projects', label: 'PROJECTS' },
  { to: '/goals', label: 'GOALS' },
];

const baseNavItemClass =
  'inline-block text-sm font-semibold leading-none tracking-wide transition-colors duration-200';

const defaultColor = '#f6f3ed';
const activeColor = '#b7ff15';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleContactClick = (event) => {
    event.preventDefault();

    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    navigate('/');

    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  const getNavColor = (key, isActive = false) => {
    if (hoveredItem === key) return activeColor;
    if (isActive) return activeColor;
    return defaultColor;
  };

  return (
    <header className="border-b border-[#f6f3ed]/55">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-6 sm:px-8 lg:px-10">
        <NavLink
          to="/"
          className="text-[1.4rem] font-black tracking-tight"
          style={{ color: defaultColor }}
        >
          F.A.
        </NavLink>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center justify-end gap-x-6 gap-y-3"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={baseNavItemClass}
              style={({ isActive }) => ({
                color: getNavColor(link.label, isActive),
              })}
              onMouseEnter={() => setHoveredItem(link.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/"
            onClick={handleContactClick}
            className={baseNavItemClass}
            style={{
              color: getNavColor('CONTACT'),
            }}
            onMouseEnter={() => setHoveredItem('CONTACT')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
