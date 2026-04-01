import { motion } from 'framer-motion';

const msg = 'Hola Elite Dental Care! Me interesa agendar una cita. ¿Me pueden ayudar?';
const wa = `https://wa.me/18299376644?text=${encodeURIComponent(msg)}`;

export default function WhatsAppButton() {
  return (
    <motion.a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 99,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '14px 28px',
        background: 'var(--blue-mid)',
        color: '#fff',
        borderRadius: '50px',
        fontFamily: 'var(--font-body)',
        fontSize: '14px',
        fontWeight: 700,
        textDecoration: 'none',
        boxShadow: 'var(--shadow-blue)',
        cursor: 'pointer',
      }}
    >
      {/* Ping indicator */}
      <span
        style={{
          position: 'absolute',
          top: '-4px',
          right: '-4px',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: '#22C55E',
          border: '2px solid white',
        }}
      />
      <span
        style={{
          position: 'absolute',
          top: '-4px',
          right: '-4px',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: '#22C55E',
          animation: 'pulse-gentle 2s ease-in-out infinite',
          opacity: 0.6,
        }}
      />
      📅
      <span className="wa-label">Agendar Cita</span>
    </motion.a>
  );
}
