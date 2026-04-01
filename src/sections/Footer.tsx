const footerLinks = {
  servicios: [
    'Limpieza Dental',
    'Carillas Dentales',
    'Endodoncia',
    'Ortodoncia',
    'Blanqueamiento',
  ],
  equipo: [
    'Dra. Hernández',
    'Dra. María Castillo',
    'Dra. Kiana Del Orbe',
  ],
  contacto: [
    '(829)-937-6644',
    'info@elitedentalcare.rd',
    'Santo Domingo, Rep. Dom.',
    '@elitedentalcare.rd',
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--blue-deep)',
        borderTop: '2px solid var(--cyan)',
        padding: '72px 0 32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background blob */}
      <div
        style={{
          position: 'absolute',
          right: '5%',
          top: '-30%',
          width: '400px',
          height: '400px',
          background: 'rgba(0,188,212,0.05)',
          animation: 'morph-blob 12s ease-in-out infinite',
        }}
      />

      <div
        className="container footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '48px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px',
            }}
          >
            <span style={{ fontSize: '22px' }}>🦷</span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 800,
                fontSize: '18px',
                color: '#fff',
              }}
            >
              Elite Dental Care
            </span>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '20px',
              maxWidth: '260px',
              lineHeight: 1.5,
            }}
          >
            "Tu sonrisa, nuestra prioridad."
          </p>
          {/* Social */}
          <a
            href="https://instagram.com/elitedentalcare.rd"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'rgba(255,255,255,0.6)',
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')
            }
          >
            📱 @elitedentalcare.rd
          </a>
        </div>

        {/* Services */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '14px',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '20px',
            }}
          >
            Servicios
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {footerLinks.servicios.map((link) => (
              <li key={link}>
                <a
                  href="#servicios"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')
                  }
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Team */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '14px',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '20px',
            }}
          >
            Equipo
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {footerLinks.equipo.map((link) => (
              <li key={link}>
                <a
                  href="#equipo"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')
                  }
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '14px',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '20px',
            }}
          >
            Contacto
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {footerLinks.contacto.map((link) => (
              <li key={link}>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  {link}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="container"
        style={{
          marginTop: '48px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.4)',
            textAlign: 'center',
          }}
        >
          © 2025 Elite Dental Care | Santo Domingo, Rep. Dom.
        </p>
      </div>
    </footer>
  );
}
