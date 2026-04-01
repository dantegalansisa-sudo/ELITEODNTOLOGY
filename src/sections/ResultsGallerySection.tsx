import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const results = [
  { id: 1, image: '/images/antesydespues.png', label: 'Rehabilitación Oral' },
  { id: 2, image: '/images/antesydespues1.png', label: 'Ortodoncia' },
  { id: 3, image: '/images/antesydespues2.png', label: 'Estética Dental' },
  { id: 4, image: '/images/antesydespues3.png', label: 'Diseño de Sonrisa' },
  { id: 5, image: '/images/antesydespues4.png', label: 'Blanqueamiento' },
  { id: 6, image: '/images/antesydespues5.png', label: 'Carillas Dentales' },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ResultsGallerySection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      id="resultados"
      style={{
        background: 'var(--bg-white)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blob */}
      <div
        style={{
          position: 'absolute',
          top: '-200px',
          right: '-150px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(30,136,229,0.04) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          style={{ textAlign: 'center', marginBottom: '20px' }}
        >
          <SectionLabel text="RESULTADOS REALES" />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'var(--text-h2)',
              fontWeight: 700,
              color: 'var(--text-dark)',
              lineHeight: 1.1,
            }}
          >
            Transformaciones Que
            <br />
            <span style={{ color: 'var(--blue-mid)' }}>Hablan Por Sí Solas</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '17px',
            color: 'var(--text-body)',
            textAlign: 'center',
            maxWidth: '560px',
            margin: '0 auto 60px',
            lineHeight: 1.7,
          }}
        >
          Cada sonrisa tiene una historia. Mira los resultados reales de
          nuestros pacientes y descubre lo que podemos hacer por ti.
        </motion.p>

        {/* Gallery Grid */}
        <div
          className="results-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {results.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(item.id)}
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                border: '1px solid var(--border)',
                background: 'var(--bg-white)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'box-shadow 0.3s, border-color 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.borderColor = 'var(--blue-light)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={`Resultado - ${item.label}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                {/* Overlay gradient */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '80px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                    pointerEvents: 'none',
                  }}
                />
                {/* Label */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '14px',
                    left: '16px',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: '13px',
                    color: '#fff',
                    background: 'rgba(30,136,229,0.85)',
                    padding: '6px 14px',
                    borderRadius: '50px',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  {item.label}
                </span>
                {/* Zoom icon */}
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue-mid)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '48px',
            marginTop: '48px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '1,500+', label: 'Sonrisas Transformadas' },
            { value: '98%', label: 'Satisfacción' },
            { value: '4.9', label: 'Calificación' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 800,
                  fontSize: '28px',
                  color: 'var(--blue-mid)',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  marginTop: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.85)',
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              cursor: 'zoom-out',
            }}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease }}
              src={results.find((r) => r.id === selected)?.image}
              alt="Resultado ampliado"
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                borderRadius: '16px',
                objectFit: 'contain',
                boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
              }}
              onClick={(e) => e.stopPropagation()}
            />
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                color: '#fff',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(8px)',
              }}
            >
              ✕
            </button>
            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = results.findIndex((r) => r.id === selected);
                const prev = currentIndex > 0 ? results[currentIndex - 1].id : results[results.length - 1].id;
                setSelected(prev);
              }}
              style={{
                position: 'absolute',
                left: '24px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                color: '#fff',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(8px)',
              }}
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = results.findIndex((r) => r.id === selected);
                const next = currentIndex < results.length - 1 ? results[currentIndex + 1].id : results[0].id;
                setSelected(next);
              }}
              style={{
                position: 'absolute',
                right: '24px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                color: '#fff',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(8px)',
              }}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
