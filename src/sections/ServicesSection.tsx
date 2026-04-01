import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import { services, categories, type Category } from '../data/services';

const iconMap: Record<string, React.ReactNode> = {
  orthodontics: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>
  ),
  aesthetics: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue-mid)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  endodontics: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 8v8" /><path d="M8 12h8" />
    </svg>
  ),
  surgery: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue-mid)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  rehabilitation: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><path d="M12 8v8" /><path d="M8 12h8" />
    </svg>
  ),
  periodontics: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue-mid)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  pediatrics: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12h6" /><path d="M12 9v6" /><circle cx="12" cy="12" r="10" />
    </svg>
  ),
};

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredServices = useMemo(() => {
    let result = activeCategory === 'Todos'
      ? services
      : services.filter((s) => s.category === activeCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.items.some((item) => item.toLowerCase().includes(q))
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="servicios"
      style={{
        background: 'var(--bg-white)',
        padding: '120px 0',
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '48px' }}
        >
          <SectionLabel text="🦷 NUESTROS SERVICIOS" />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'var(--text-h2)',
              fontWeight: 700,
              color: 'var(--text-dark)',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Descubre Nuestros Servicios
            <br />
            <span style={{ color: 'var(--blue-mid)' }}>Dentales de Firma</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '17px',
                color: 'var(--text-body)',
                maxWidth: '480px',
              }}
            >
              Tratamientos personalizados con la más alta calidad para tu sonrisa.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ display: 'flex' }}>
                {['#1E88E5', '#00BCD4', '#42A5F5'].map((c, i) => (
                  <div
                    key={i}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: c,
                      border: '2px solid white',
                      marginLeft: i > 0 ? '-8px' : 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      color: '#fff',
                      fontWeight: 700,
                    }}
                  >
                    {['H', 'M', 'K'][i]}
                  </div>
                ))}
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                }}
              >
                750+ Reseñas
              </span>
            </div>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '24px' }}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '560px',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--text-muted)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
              }}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Buscar servicio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                height: '56px',
                padding: '0 20px 0 52px',
                borderRadius: '16px',
                border: '1.5px solid var(--border)',
                background: 'var(--bg-section)',
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: 'var(--text-dark)',
                outline: 'none',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--blue-mid)';
                e.currentTarget.style.boxShadow = '0 0 0 4px rgba(30,136,229,0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '56px',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '10px 24px',
                borderRadius: '50px',
                border: activeCategory === cat ? 'none' : '1.5px solid var(--border)',
                background: activeCategory === cat ? 'var(--blue-mid)' : 'var(--bg-white)',
                color: activeCategory === cat ? '#fff' : 'var(--text-body)',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid-lalane">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, i) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => navigate(`/servicios/${service.id}`)}
                className="service-card-lalane"
                style={{
                  background: 'var(--bg-white)',
                  borderRadius: '20px',
                  padding: '40px 32px 36px',
                  border: '1.5px solid var(--border)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
                }}
                whileHover={{ y: -6 }}
              >
                {/* Large faded number */}
                <span
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '24px',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(64px, 8vw, 96px)',
                    fontWeight: 700,
                    color: 'var(--bg-section)',
                    lineHeight: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  {service.num}
                </span>

                {/* Icon */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--bg-section)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '28px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {iconMap[service.icon]}
                </div>

                {/* Service Name */}
                <h3
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 800,
                    fontSize: 'clamp(18px, 2vw, 22px)',
                    color: 'var(--text-dark)',
                    letterSpacing: '0.02em',
                    marginBottom: '8px',
                    position: 'relative',
                    zIndex: 1,
                    lineHeight: 1.2,
                  }}
                >
                  {service.name}
                </h3>

                {/* Subtitle */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: '11px',
                    color: 'var(--cyan)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {service.subtitle}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: 'var(--text-body)',
                    lineHeight: 1.7,
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {service.description}
                </p>

                {/* Items list */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {service.items.slice(0, 3).map((item) => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--blue-mid)',
                          fontSize: '13px',
                          fontWeight: 600,
                          flexShrink: 0,
                        }}
                      >
                        &rarr;
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '13px',
                          color: 'var(--text-muted)',
                          fontWeight: 500,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* View more link */}
                <div
                  className="service-card-link"
                  style={{
                    marginTop: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--blue-mid)',
                      transition: 'color 0.2s',
                    }}
                  >
                    Ver más
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--blue-mid)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ transition: 'transform 0.2s' }}
                    className="service-card-arrow"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              textAlign: 'center',
              padding: '80px 0',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                color: 'var(--text-muted)',
                fontWeight: 500,
              }}
            >
              No se encontraron servicios para "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('Todos');
              }}
              style={{
                marginTop: '16px',
                padding: '10px 24px',
                borderRadius: '50px',
                border: 'none',
                background: 'var(--blue-mid)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Ver todos los servicios
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
