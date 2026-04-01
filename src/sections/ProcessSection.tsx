import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const steps = [
  {
    num: '01',
    icon: '📞',
    title: 'Agenda tu Cita',
    desc: 'Llámanos o escríbenos por WhatsApp para reservar tu consulta.',
  },
  {
    num: '02',
    icon: '🔍',
    title: 'Evaluación',
    desc: 'La Dra. Hernández evalúa tu estado bucal con equipos modernos.',
  },
  {
    num: '03',
    icon: '🦷',
    title: 'Tratamiento',
    desc: 'Ejecutamos el plan personalizado con la mayor precisión y cuidado.',
  },
  {
    num: '04',
    icon: '😊',
    title: 'Tu Nueva Sonrisa',
    desc: 'Disfruta de resultados que transforman tu confianza y bienestar.',
  },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ProcessSection() {
  return (
    <section
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
          transition={{ duration: 0.8, ease }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <SectionLabel text="PROCESO" />
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
            Fácil Camino Hacia
            <br />
            <span style={{ color: 'var(--blue-mid)' }}>Tu Sonrisa Perfecta</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div
          className="process-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            position: 'relative',
          }}
        >
          {/* Connecting line (desktop) */}
          <div
            className="process-line"
            style={{
              position: 'absolute',
              top: '52px',
              left: '12.5%',
              right: '12.5%',
              height: '2px',
              borderTop: '2px dashed var(--border)',
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2, ease }}
              style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
              }}
            >
              {/* Number circle */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--blue-mid)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: '0 4px 16px rgba(30,136,229,0.25)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 800,
                    fontSize: '18px',
                    color: '#fff',
                  }}
                >
                  {step.num}
                </span>
              </div>

              {/* Icon */}
              <div
                style={{
                  fontSize: '32px',
                  marginBottom: '14px',
                }}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: 'var(--text-dark)',
                  marginBottom: '8px',
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  maxWidth: '220px',
                  margin: '0 auto',
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
