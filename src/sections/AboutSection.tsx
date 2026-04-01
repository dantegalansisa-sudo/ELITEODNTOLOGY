import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const checks = [
  'Más de 5 años de experiencia',
  'Especialistas certificados',
  'Tecnología dental de última generación',
];

const miniStats = [
  { value: '98%', label: 'Satisfacción' },
  { value: '1.7K+', label: 'Sonrisas' },
  { value: '4.9', label: 'Rating' },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      style={{
        background: 'var(--bg-white)',
        padding: '120px 0',
      }}
    >
      <div
        className="container about-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* LEFT — Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          style={{ position: 'relative' }}
        >
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              background: '#000',
            }}
          >
            <video
              src="/images/visita.mp4"
              autoPlay
              loop
              playsInline
              controls
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                aspectRatio: '3/4',
              }}
            />
          </div>

          {/* Blue offset border accent */}
          <div
            style={{
              position: 'absolute',
              bottom: '-16px',
              right: '-16px',
              width: '120px',
              height: '120px',
              border: '3px solid var(--blue-light)',
              borderRadius: '16px',
              zIndex: -1,
              opacity: 0.5,
            }}
          />
        </motion.div>

        {/* RIGHT — Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
        >
          <SectionLabel text="SOBRE NOSOTROS" />

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'var(--text-h2)',
              fontWeight: 700,
              color: 'var(--text-dark)',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            Excelencia en Odontología
            <br />
            <span style={{ color: 'var(--blue-mid)' }}>con Cuidado Compasivo</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              color: 'var(--text-body)',
              lineHeight: 1.8,
              marginBottom: '28px',
              maxWidth: '480px',
            }}
          >
            En Elite Dental Care nos especializamos en transformar sonrisas con
            atención personalizada. Nuestro equipo de especialistas utiliza
            tecnología de punta para brindarte la mejor experiencia dental.
          </p>

          {/* Checkmarks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
            {checks.map((check, i) => (
              <motion.div
                key={check}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(30,136,229,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      color: 'var(--blue-mid)',
                      fontSize: '13px',
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: 'var(--text-dark)',
                  }}
                >
                  {check}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Inline stats */}
          <div
            style={{
              display: 'flex',
              gap: '32px',
              marginBottom: '28px',
              paddingBottom: '28px',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {miniStats.map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 800,
                    fontSize: '28px',
                    color: 'var(--text-dark)',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Team preview */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex' }}>
              {[
                '/images/dra-hernandez.jpg',
                '/images/dra-maria.jpg',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Doctora"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid white',
                    marginLeft: i > 0 ? '-10px' : 0,
                  }}
                />
              ))}
            </div>
            <a
              href="#equipo"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--blue-mid)',
                textDecoration: 'none',
              }}
            >
              Conoce a nuestras especialistas →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
