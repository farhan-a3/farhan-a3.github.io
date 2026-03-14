import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const links = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT' },
  { to: '/career', label: 'CAREER' },
  { to: '/projects', label: 'PROJECTS' },
  { to: '/goals', label: 'GOALS' },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    navigate('/');

    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 120);
  };

  return (
    <header className="border-b border-[#f6f3ed]/55">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-6 sm:px-8 lg:px-10">
        <NavLink
          to="/"
          className="text-[1.4rem] font-black tracking-tight text-[#f6f3ed]"
        >
          F.A.
        </NavLink>

        <nav aria-label="Main navigation" className="flex flex-wrap items-center justify-end gap-x-6 gap-y-3">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors ${
                  isActive ? 'text-[#b7ff15]' : 'text-[#f6f3ed]'
                } hover:text-[#b7ff15]`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <button
            type="button"
            onClick={handleContactClick}
            className="bg-transparent p-0 text-sm font-semibold tracking-wide text-[#f6f3ed] transition-colors hover:text-[#b7ff15]"
          >
            CONTACT
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
