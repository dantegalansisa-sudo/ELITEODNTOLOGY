import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';

const stats = [
  { value: 1735, suffix: '+', label: 'PACIENTES SATISFECHOS' },
  { value: 98, suffix: '%', label: 'TASA DE SATISFACCIÓN' },
  { value: 4, suffix: '', label: 'ESPECIALISTAS EN EQUIPO' },
  { value: 4.9, suffix: '★', label: 'CALIFICACIÓN PROMEDIO', decimals: 1 },
];

export default function StatsSection() {
  return (
    <section
      style={{
        background: 'var(--blue-deep)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle blob */}
      <div
        style={{
          position: 'absolute',
          left: '10%',
          top: '-20%',
          width: '400px',
          height: '400px',
          background: 'rgba(0,188,212,0.08)',
          animation: 'morph-blob 10s ease-in-out infinite',
        }}
      />

      <div
        className="container stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            style={{
              textAlign: 'center',
              padding: '24px 20px',
              borderRight:
                i < stats.length - 1
                  ? '1px solid rgba(255,255,255,0.1)'
                  : 'none',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(48px, 7vw, 80px)',
                color: '#fff',
                lineHeight: 1,
                marginBottom: '8px',
              }}
            >
              <AnimatedCounter
                value={stat.value}
                suffix=""
                decimals={stat.decimals || 0}
              />
              <span style={{ color: 'var(--cyan)' }}>{stat.suffix}</span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.55)',
              }}
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
