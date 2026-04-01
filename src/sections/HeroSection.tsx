import { motion } from 'framer-motion';
import { useMemo } from 'react';

/* ═══════════════════════════════════════════════
   HERO SECTION — Elite Dental Care
   Full-screen, morphing blob, floating cards,
   light particles, staggered entrance
   ═══════════════════════════════════════════════ */

const serviceChips = [
  { icon: '🦷', label: 'Limpieza Dental' },
  { icon: '✨', label: 'Ortodoncia' },
  { icon: '🔬', label: 'Endodoncia' },
  { icon: '💎', label: 'Carillas' },
  { icon: '🩺', label: 'Evaluación' },
];

const bottomPills = [
  'Revisión Dental',
  'Limpieza',
  'Relleno',
  'Tratamiento de Encías',
  'Retenedores',
];

// Stagger orchestration
const stagger = {
  badge: 0.3,
  line1: 0.4,
  line2: 0.55,
  line3: 0.7,
  paragraph: 0.85,
  chips: 1.0,
  buttons: 1.15,
  photo: 0.6,
  card1: 0.8,
  card2: 1.0,
  card3: 1.2,
};

const ease = [0.16, 1, 0.3, 1] as const;

const slideUp = (delay: number, y = 40) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, delay, ease },
});

const scaleIn = (delay: number) => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.7, delay, ease },
});

// Light particles generator
function useParticles(count: number) {
  return useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: 4 + Math.random() * 6,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: 0.15 + Math.random() * 0.3,
      duration: 5 + Math.random() * 4,
      delay: Math.random() * 5,
      color: Math.random() > 0.5 ? 'var(--blue-light)' : 'var(--cyan)',
    }));
  }, [count]);
}

export default function HeroSection() {
  const particles = useParticles(15);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: 'var(--bg-white)',
      }}
    >
      {/* ═══ Background Image ═══ */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1800&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* ═══ Gradient Overlay ═══ */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(
            110deg,
            rgba(255,255,255,0.97) 0%,
            rgba(255,255,255,0.92) 35%,
            rgba(240,247,255,0.7) 60%,
            rgba(21,101,192,0.08) 100%
          )`,
          zIndex: 1,
        }}
      />

      {/* ═══ Morphing Blob ═══ */}
      <div
        style={{
          position: 'absolute',
          left: '5%',
          top: '15%',
          width: '600px',
          height: '600px',
          background: 'rgba(30,136,229,0.07)',
          animation: 'morph-blob 8s ease-in-out infinite',
          zIndex: 2,
          filter: 'blur(2px)',
        }}
      />

      {/* ═══ Secondary Blob (subtle depth) ═══ */}
      <div
        style={{
          position: 'absolute',
          right: '10%',
          bottom: '10%',
          width: '400px',
          height: '400px',
          background: 'rgba(0,188,212,0.04)',
          animation: 'morph-blob 10s ease-in-out infinite reverse',
          zIndex: 2,
        }}
      />

      {/* ═══ Light Particles ═══ */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: p.color,
            opacity: p.opacity,
            animation: `float-gentle ${p.duration}s ease-in-out ${p.delay}s infinite`,
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* ═══ Main Content ═══ */}
      <div
        className="container hero-grid"
        style={{
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* ═══ LEFT — Text Content ═══ */}
        <div>
          {/* Badge */}
          <motion.div
            {...slideUp(stagger.badge, 20)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '28px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '2px',
                background: 'var(--blue-mid)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--blue-mid)',
              }}
            >
              Odontología Especializada · Santo Domingo
            </span>
          </motion.div>

          {/* Title — staggered lines */}
          <div style={{ marginBottom: '28px' }}>
            <motion.div {...slideUp(stagger.line1)}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'var(--text-hero)',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  display: 'block',
                }}
              >
                Odontología
              </span>
            </motion.div>
            <motion.div {...slideUp(stagger.line2)}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'var(--text-hero)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  display: 'block',
                }}
              >
                <span style={{ color: 'var(--blue-mid)' }}>Moderna</span>{' '}
                <span style={{ color: 'var(--text-dark)' }}>con</span>
              </span>
            </motion.div>
            <motion.div {...slideUp(stagger.line3)}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'var(--text-hero)',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  display: 'block',
                }}
              >
                Cuidado Gentil.
              </span>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            {...fadeIn(stagger.paragraph)}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '17px',
              color: 'var(--text-body)',
              lineHeight: 1.8,
              maxWidth: '440px',
              marginBottom: '28px',
            }}
          >
            Expertos en salud bucal comprometidos con tu bienestar.
            La Dra. Hernández y su equipo te brindan una sonrisa
            que transforma tu vida.
          </motion.p>

          {/* Service Chips */}
          <motion.div
            {...fadeIn(stagger.chips)}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '36px',
            }}
          >
            {serviceChips.map((chip, i) => (
              <motion.button
                key={chip.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: stagger.chips + i * 0.08,
                  ease: ease as unknown as [number, number, number, number],
                }}
                whileHover={{ scale: 1.05, backgroundColor: '#1E88E5', color: '#fff' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 18px',
                  background: 'var(--cyan-light)',
                  color: 'var(--blue-deep)',
                  border: 'none',
                  borderRadius: '50px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.3s, color 0.3s',
                }}
              >
                <span>{chip.icon}</span>
                {chip.label}
              </motion.button>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            {...slideUp(stagger.buttons)}
            style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <motion.a
              href="https://wa.me/18299376644?text=Hola%20Elite%20Dental%20Care!%20Me%20interesa%20agendar%20una%20cita."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(30,136,229,0.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 36px',
                background: 'var(--blue-mid)',
                color: '#fff',
                border: 'none',
                borderRadius: '50px',
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: 'var(--shadow-blue)',
                animation: 'pulse-gentle 3s ease-in-out infinite',
                textDecoration: 'none',
              }}
            >
              📅 Agendar Cita <span style={{ marginLeft: '4px' }}>→</span>
            </motion.a>

            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.03, borderColor: 'var(--blue-mid)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '16px 32px',
                background: 'transparent',
                color: 'var(--text-dark)',
                border: '2px solid var(--border)',
                borderRadius: '50px',
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'border-color 0.3s',
              }}
            >
              Ver Servicios
            </motion.a>
          </motion.div>
        </div>

        {/* ═══ RIGHT — Photo + Floating Cards ═══ */}
        <div className="hero-right" style={{ position: 'relative' }}>
          {/* Photo blob behind */}
          <div
            style={{
              position: 'absolute',
              inset: '-30px',
              background: 'rgba(30,136,229,0.06)',
              animation: 'morph-blob 10s ease-in-out infinite',
              zIndex: 0,
            }}
          />

          {/* Main photo */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: stagger.photo,
              ease: ease as unknown as [number, number, number, number],
            }}
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 1,
              aspectRatio: '4/5',
            }}
          >
            <img
              src="/images/now.png"
              alt="Elite Dental Care"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
            {/* Subtle gradient overlay on photo */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                background:
                  'linear-gradient(to top, rgba(21,101,192,0.12), transparent)',
                pointerEvents: 'none',
              }}
            />
          </motion.div>

          {/* ═══ FLOATING CARD 1 — Doctor del día ═══ */}
          <motion.div
            {...scaleIn(stagger.card1)}
            style={{
              position: 'absolute',
              top: '8%',
              left: '-12%',
              zIndex: 5,
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(16px)',
              borderRadius: '16px',
              padding: '16px 20px',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              border: '1px solid rgba(226,232,240,0.6)',
              animation: 'float-card-1 4s ease-in-out infinite',
              minWidth: '240px',
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background:
                  'linear-gradient(135deg, var(--blue-mid), var(--cyan))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 800,
                fontFamily: 'var(--font-body)',
                flexShrink: 0,
              }}
            >
              H
            </div>
            <div style={{ flex: 1 }}>
              <span
                style={{
                  display: 'block',
                  color: 'var(--blue-mid)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Especialista del Día
              </span>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '14px',
                  color: 'var(--text-dark)',
                  fontFamily: 'var(--font-body)',
                  margin: '2px 0',
                }}
              >
                Dra. Hernández
              </p>
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '12px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Odontología Especializada
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span
                style={{
                  color: '#22C55E',
                  fontSize: '12px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-body)',
                }}
              >
                ● Disponible
              </span>
            </div>
          </motion.div>

          {/* ═══ FLOATING CARD 2 — Rating ═══ */}
          <motion.div
            {...scaleIn(stagger.card2)}
            style={{
              position: 'absolute',
              bottom: '30%',
              right: '-8%',
              zIndex: 5,
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(16px)',
              borderRadius: '16px',
              padding: '18px 24px',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              border: '1px solid rgba(226,232,240,0.6)',
              animation: 'float-card-2 5s ease-in-out 0.7s infinite',
            }}
          >
            <div style={{ fontSize: '28px', lineHeight: 1 }}>⭐</div>
            <div>
              <p
                style={{
                  fontWeight: 800,
                  fontSize: '22px',
                  color: 'var(--text-dark)',
                  fontFamily: 'var(--font-body)',
                  lineHeight: 1.1,
                }}
              >
                4.9
              </p>
              <p
                style={{
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                1,735 Pacientes
              </p>
            </div>
          </motion.div>

          {/* ═══ FLOATING CARD 3 — Próxima cita ═══ */}
          <motion.div
            {...scaleIn(stagger.card3)}
            style={{
              position: 'absolute',
              bottom: '8%',
              left: '-4%',
              zIndex: 5,
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(16px)',
              borderRadius: '16px',
              padding: '16px 22px',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              border: '1px solid rgba(226,232,240,0.6)',
              animation: 'float-card-3 3.5s ease-in-out 1.4s infinite',
            }}
          >
            <span style={{ fontSize: '24px', lineHeight: 1 }}>📅</span>
            <div>
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Próxima disponibilidad
              </p>
              <p
                style={{
                  fontSize: '12px',
                  color: 'var(--blue-mid)',
                  fontWeight: 600,
                  fontFamily: 'var(--font-body)',
                }}
              >
                HOY · 3:00 PM
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══ Bottom Navigation Pills ═══ */}
      <motion.div
        className="hero-bottom-pills"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.4, ease: ease as unknown as [number, number, number, number] }}
        style={{
          position: 'relative',
          zIndex: 10,
          borderTop: '1px solid var(--border)',
          background: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(12px)',
          padding: '20px 0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {bottomPills.map((pill) => (
            <motion.button
              key={pill}
              whileHover={{
                backgroundColor: '#1E88E5',
                color: '#fff',
                borderColor: '#1E88E5',
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '10px 22px',
                background: 'var(--bg-white)',
                color: 'var(--text-body)',
                border: '1px solid var(--border)',
                borderRadius: '50px',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background 0.3s, color 0.3s, border-color 0.3s',
              }}
            >
              {pill}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
