import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as unknown as [number, number, number, number] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '76px',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.3s, border-bottom 0.3s, box-shadow 0.3s',
        boxShadow: scrolled ? '0 2px 20px rgba(21,101,192,0.06)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo(0, 0); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--blue-mid), var(--cyan))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
            }}
          >
            🦷
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 800,
                fontSize: '16px',
                color: 'var(--text-dark)',
                display: 'block',
                lineHeight: 1.1,
              }}
            >
              Elite Dental
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '10px',
                color: 'var(--blue-mid)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Care
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div
          className="nav-links-desktop"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '14px',
                color: 'var(--text-body)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--blue-mid)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-body)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/18299376644?text=Hola%20Elite%20Dental%20Care!%20Me%20interesa%20agendar%20una%20cita."
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta-desktop"
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(30,136,229,0.35)' }}
          whileTap={{ scale: 0.96 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '12px 28px',
            background: 'var(--blue-mid)',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
            textDecoration: 'none',
            boxShadow: 'var(--shadow-blue)',
          }}
        >
          📅 Agendar Cita
        </motion.a>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: 'var(--text-dark)',
                borderRadius: '2px',
                transition: 'transform 0.3s',
                transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: 'var(--text-dark)',
                borderRadius: '2px',
                transition: 'opacity 0.3s',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: 'var(--text-dark)',
                borderRadius: '2px',
                transition: 'transform 0.3s',
                transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            top: '76px',
            left: 0,
            right: 0,
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid var(--border)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '16px',
                color: 'var(--text-body)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/18299376644?text=Hola%20Elite%20Dental%20Care!%20Me%20interesa%20agendar%20una%20cita."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '14px 28px',
              background: 'var(--blue-mid)',
              color: '#fff',
              borderRadius: '50px',
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            📅 Agendar Cita
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
