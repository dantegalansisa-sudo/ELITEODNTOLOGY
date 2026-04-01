import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const testimonials = [
  {
    initials: 'AM',
    name: 'Ana M.',
    treatment: 'Limpieza y Blanqueamiento',
    stars: 5,
    text: 'La Dra. Hernández y su equipo son increíbles. Me trataron con mucha paciencia y profesionalismo. Mi sonrisa quedó perfecta. ¡La mejor clínica dental de Santo Domingo!',
  },
  {
    initials: 'RG',
    name: 'Roberto G.',
    treatment: 'Endodoncia — Dra. Kiana',
    stars: 5,
    text: 'Tenía miedo de la endodoncia pero la Dra. Kiana fue tan profesional y gentil que no sentí nada. El resultado fue excelente. Totalmente recomendada.',
  },
  {
    initials: 'LP',
    name: 'Laura P.',
    treatment: 'Revisión — Dra. María',
    stars: 5,
    text: 'La Dra. María Castillo me explicó todo detalladamente. El ambiente de la clínica es muy limpio y moderno. Me siento en excelentes manos en Elite Dental Care.',
  },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function TestimonialsSection() {
  return (
    <section
      style={{
        background: 'var(--bg-section)',
        padding: '120px 0',
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <SectionLabel text="TESTIMONIOS" />
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
            Lo Que Dicen
            <br />
            <span style={{ color: 'var(--blue-mid)' }}>Nuestros Pacientes</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div
          className="testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease }}
              whileHover={{
                y: -4,
                borderColor: 'var(--blue-light)',
                boxShadow: '0 8px 40px rgba(21,101,192,0.12)',
              }}
              style={{
                background: 'var(--bg-white)',
                borderRadius: '20px',
                padding: '36px',
                border: '1px solid var(--border)',
                borderTop: '3px solid var(--cyan)',
                position: 'relative',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
            >
              {/* Quote mark */}
              <span
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '24px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '80px',
                  color: 'var(--cyan)',
                  opacity: 0.2,
                  lineHeight: 1,
                  pointerEvents: 'none',
                }}
              >
                "
              </span>

              {/* Stars */}
              <div style={{ marginBottom: '16px' }}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span
                    key={j}
                    style={{
                      color: 'var(--blue-mid)',
                      fontSize: '16px',
                      marginRight: '2px',
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Text */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  color: 'var(--text-body)',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {t.text}
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--blue-mid), var(--cyan))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: '14px',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      fontSize: '15px',
                      color: 'var(--text-dark)',
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                    }}
                  >
                    {t.treatment}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
