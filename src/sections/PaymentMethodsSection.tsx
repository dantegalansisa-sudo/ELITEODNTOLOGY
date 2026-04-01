import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const paymentMethods = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--blue-mid)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="3" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: 'Tarjeta de Crédito',
    description: 'Visa, Mastercard, American Express y más. Paga de forma segura con cualquier tarjeta de crédito.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="3" />
        <line x1="1" y1="10" x2="23" y2="10" />
        <circle cx="7" cy="16" r="1.5" fill="var(--cyan)" stroke="none" />
        <circle cx="11" cy="16" r="1.5" fill="var(--cyan)" stroke="none" opacity="0.5" />
      </svg>
    ),
    title: 'Tarjeta de Débito',
    description: 'Aceptamos todas las tarjetas de débito nacionales e internacionales para tu comodidad.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--blue-mid)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Efectivo',
    description: 'Paga en efectivo directamente en la clínica. Pesos dominicanos y dólares americanos.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M12 12h.01" />
        <path d="M17 12h.01" />
        <path d="M7 12h.01" />
      </svg>
    ),
    title: 'Transferencia Bancaria',
    description: 'Realiza tu pago vía transferencia bancaria antes o después de tu cita.',
  },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function PaymentMethodsSection() {
  return (
    <section
      style={{
        background: 'var(--bg-section)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          right: '-100px',
          width: '400px',
          height: '400px',
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
          <SectionLabel text="FORMAS DE PAGO" />
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
            Métodos de Pago
            <br />
            <span style={{ color: 'var(--blue-mid)' }}>Flexibles y Seguros</span>
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
            maxWidth: '520px',
            margin: '0 auto 60px',
            lineHeight: 1.7,
          }}
        >
          Tu comodidad es importante. Aceptamos múltiples formas de pago
          para que tu experiencia sea lo más sencilla posible.
        </motion.p>

        {/* Cards Grid */}
        <div
          className="payment-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
        >
          {paymentMethods.map((method, i) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              whileHover={{ y: -6 }}
              style={{
                background: 'var(--bg-white)',
                borderRadius: '20px',
                padding: '36px 28px',
                border: '1px solid var(--border)',
                textAlign: 'center',
                transition: 'box-shadow 0.3s, border-color 0.3s',
                boxShadow: 'var(--shadow-sm)',
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
              {/* Icon circle */}
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'var(--bg-section)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  border: '1px solid var(--border)',
                }}
              >
                {method.icon}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: 'var(--text-dark)',
                  marginBottom: '10px',
                }}
              >
                {method.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--text-body)',
                  lineHeight: 1.6,
                }}
              >
                {method.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px',
            marginTop: '48px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { icon: '🔒', text: 'Pagos 100% Seguros' },
            { icon: '🧾', text: 'Comprobante Fiscal' },
            { icon: '💳', text: 'Sin Cargos Adicionales' },
          ].map((badge) => (
            <div
              key={badge.text}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: 'var(--bg-white)',
                borderRadius: '50px',
                border: '1px solid var(--border)',
              }}
            >
              <span style={{ fontSize: '18px' }}>{badge.icon}</span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                }}
              >
                {badge.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
