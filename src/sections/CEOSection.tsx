import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const credentials = [
  { icon: '🦷', text: 'Odontología Especializada' },
  { icon: '🏆', text: 'CEO & Fundadora de Elite Dental Care' },
  { icon: '📱', text: '@elitedentalcare.rd' },
  { icon: '📍', text: 'Santo Domingo, Rep. Dom.' },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function CEOSection() {
  return (
    <section
      id="ceo"
      style={{
        background: 'var(--bg-section)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background blob */}
      <div
        style={{
          position: 'absolute',
          right: '-5%',
          top: '10%',
          width: '500px',
          height: '500px',
          background: 'rgba(30,136,229,0.04)',
          animation: 'morph-blob 12s ease-in-out infinite',
        }}
      />

      <div
        className="container ceo-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '45% 55%',
          gap: '60px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* LEFT — Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          style={{ position: 'relative' }}
        >
          {/* Cyan blob behind photo */}
          <div
            style={{
              position: 'absolute',
              inset: '-20px',
              background: 'rgba(0,188,212,0.06)',
              animation: 'morph-blob 10s ease-in-out infinite reverse',
              zIndex: 0,
            }}
          />

          {/* Photo */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              aspectRatio: '3/4',
            }}
          >
            <img
              src="/images/dra-hernandez.jpg"
              alt="Dra. Hernández — CEO de Elite Dental Care"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80';
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                display: 'block',
              }}
            />
          </div>

          {/* Badge over photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            style={{
              position: 'absolute',
              bottom: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2,
              background: '#fff',
              borderRadius: '16px',
              padding: '16px 28px',
              boxShadow: 'var(--shadow-md)',
              textAlign: 'center',
              minWidth: '240px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '15px',
                color: 'var(--text-dark)',
                marginBottom: '4px',
              }}
            >
              Dra. Hernández
            </p>
            <div
              style={{
                width: '40px',
                height: '2px',
                background: 'var(--blue-mid)',
                margin: '6px auto',
                borderRadius: '2px',
              }}
            />
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                color: 'var(--text-muted)',
              }}
            >
              CEO & Fundadora
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                marginTop: '6px',
              }}
            >
              <span style={{ fontSize: '14px' }}>⭐</span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '13px',
                  color: 'var(--text-dark)',
                }}
              >
                4.9
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                }}
              >
                · Odontología Especializada
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <SectionLabel text="👩‍⚕️ NUESTRA CEO" />

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'var(--text-h2)',
              fontWeight: 700,
              color: 'var(--text-dark)',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            Dra. Hernández
            <br />
            <span style={{ color: 'var(--blue-mid)' }}>La Visión Detrás</span>
            <br />
            de Elite Dental Care.
          </h2>

          {/* Blue line */}
          <div
            style={{
              width: '60px',
              height: '3px',
              background: 'var(--blue-mid)',
              borderRadius: '2px',
              marginBottom: '28px',
            }}
          />

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              color: 'var(--text-body)',
              lineHeight: 1.8,
              marginBottom: '20px',
            }}
          >
            En Élite Dental Care, tu sonrisa está en manos de los mejores
            especialistas. La Dra. Hernández y su equipo están comprometidos en
            ofrecerte una atención personalizada con los más altos estándares en
            odontología especializada.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              color: 'var(--text-body)',
              lineHeight: 1.8,
              marginBottom: '28px',
            }}
          >
            Con años de experiencia y una pasión genuina por transformar
            sonrisas, la Dra. Hernández fundó Elite Dental Care con una misión
            clara: que cada paciente dominicano tenga acceso a odontología de
            primer nivel con cuidado personalizado.
          </p>

          {/* Quote */}
          <div
            style={{
              background: 'rgba(30,136,229,0.06)',
              borderLeft: '3px solid var(--blue-mid)',
              borderRadius: '0 12px 12px 0',
              padding: '20px 24px',
              marginBottom: '28px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: '18px',
                color: 'var(--text-dark)',
                fontWeight: 700,
                marginBottom: '6px',
              }}
            >
              "Tu sonrisa, nuestra prioridad."
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'var(--text-muted)',
              }}
            >
              — Dra. Hernández, CEO & Fundadora
            </p>
          </div>

          {/* Credentials */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              marginBottom: '32px',
            }}
          >
            {credentials.map((cred) => (
              <div
                key={cred.text}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span style={{ fontSize: '18px' }}>{cred.icon}</span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--text-body)',
                  }}
                >
                  {cred.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="https://wa.me/18299376644?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20con%20la%20Dra.%20Hernández."
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
              borderRadius: '50px',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: 'var(--shadow-blue)',
            }}
          >
            Agendar con la Dra. Hernández →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
