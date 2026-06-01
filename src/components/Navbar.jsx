import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 3rem',
    height: '64px',
    transition: 'background 0.3s ease, border-bottom 0.3s ease',
  },
  navScrolled: {
    background: 'rgba(13,13,20,0.92)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: '1.25rem',
    letterSpacing: '-0.5px',
    color: 'var(--accent-mint)',
  },
  links: {
    display: 'flex',
    gap: '2.5rem',
    listStyle: 'none',
  },
  link: {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: '0.9rem',
    letterSpacing: '0.03em',
    color: 'var(--text-muted)',
    transition: 'color 0.2s',
    textTransform: 'uppercase',
  },
  linkActive: {
    color: 'var(--accent-mint)',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: '4px',
  },
  bar: {
    width: '24px',
    height: '2px',
    background: 'var(--text)',
    borderRadius: '2px',
    transition: 'all 0.3s',
  },
};

const navItems = [
  { to: '/', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
      <div style={styles.logo}>SM</div>
      <ul style={styles.links}>
        {navItems.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              style={({ isActive }) => ({
                ...styles.link,
                ...(isActive ? styles.linkActive : {}),
              })}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <style>{`
        @media (max-width: 600px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
          .mobile-menu {
            position: fixed;
            top: 64px; left: 0; right: 0; bottom: 0;
            background: var(--bg);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2.5rem;
            z-index: 99;
          }
          .mobile-menu a {
            font-family: var(--font-display);
            font-weight: 700;
            font-size: 2rem;
            color: var(--text);
          }
        }
      `}</style>
    </nav>
  );
}
