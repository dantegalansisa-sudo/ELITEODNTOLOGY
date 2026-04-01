import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const clients = [
  { id: 1, image: '/images/cliente.png' },
  { id: 2, image: '/images/cliente1.png' },
  { id: 3, image: '/images/cliente2.png' },
  { id: 4, image: '/images/cliente3.png' },
  { id: 5, image: '/images/cliente4.png' },
  { id: 6, image: '/images/cliente5.png' },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function HappyClientsSection() {
  return (
    <section
      style={{
        background: 'var(--bg-section)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0,188,212,0.06) 0%, transparent 70%)',
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
          <SectionLabel text="NUESTROS PACIENTES" />
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
            Sonrisas Que
            <br />
            <span style={{ color: 'var(--blue-mid)' }}>Nos Inspiran</span>
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
          La felicidad de nuestros pacientes es nuestra mayor recompensa.
          Cada sonrisa refleja la confianza que depositan en nosotros.
        </motion.p>

        {/* Masonry-style Grid */}
        <div
          className="clients-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {clients.map((client, i) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid var(--border)',
                background: 'var(--bg-white)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'box-shadow 0.3s, border-color 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.borderColor = 'var(--cyan)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={client.image}
                  alt={`Paciente feliz ${client.id}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                {/* Subtle gradient overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60px',
                    background: 'linear-gradient(to top, rgba(21,101,192,0.15), transparent)',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          style={{
            textAlign: 'center',
            marginTop: '48px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: 'var(--text-muted)',
              marginBottom: '16px',
              fontWeight: 600,
            }}
          >
            +1,500 pacientes felices y contando
          </p>
          <motion.a
            href="https://wa.me/18299376644?text=Hola%20Elite%20Dental%20Care!%20Quiero%20ser%20parte%20de%20sus%20pacientes%20felices."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(30,136,229,0.35)' }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              background: 'var(--blue-mid)',
              color: '#fff',
              borderRadius: '50px',
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: 'var(--shadow-blue)',
            }}
          >
            Quiero Mi Sonrisa Perfecta
            <span style={{ fontSize: '18px' }}>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
