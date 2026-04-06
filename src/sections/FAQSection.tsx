import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const faqs = [
  {
    question: '¿Cuánto cuesta una consulta de evaluación?',
    answer:
      'Las consultas con especialistas tienen un costo. Para más información sobre precios y disponibilidad, contáctanos directamente por WhatsApp al (829) 937-6644 y con gusto te orientamos.',
  },
  {
    question: '¿Necesito cita previa o puedo ir sin agendar?',
    answer:
      'Para brindarte la mejor atención, te recomendamos agendar tu cita previamente por WhatsApp o llamada telefónica. De esta forma, te garantizamos un horario exclusivo con la especialista de tu preferencia.',
  },
  {
    question: '¿Cuáles son los horarios de atención?',
    answer:
      'Nuestro horario de atención es de lunes a viernes de 9:00 AM a 6:00 PM y sábados de 9:00 AM a 1:00 PM. Para emergencias dentales, contáctanos por WhatsApp y te atenderemos lo antes posible.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer:
      'Aceptamos tarjetas de crédito (Visa, Mastercard, American Express), tarjetas de débito, efectivo en pesos dominicanos y dólares americanos, y transferencias bancarias. Todos nuestros pagos son seguros y emitimos comprobante fiscal.',
  },
  {
    question: '¿Cuánto dura un tratamiento de ortodoncia?',
    answer:
      'La duración del tratamiento de ortodoncia varía según cada caso. Generalmente va de 12 a 24 meses dependiendo de la complejidad. En tu evaluación inicial, la Dra. Hernández te dará un estimado personalizado del tiempo de tratamiento.',
  },
  {
    question: '¿El blanqueamiento dental daña los dientes?',
    answer:
      'No. Nuestro blanqueamiento dental es seguro y está supervisado por especialistas. Utilizamos productos profesionales que no dañan el esmalte dental. Es posible experimentar una ligera sensibilidad temporal que desaparece en pocas horas.',
  },
  {
    question: '¿Qué debo traer a mi primera cita?',
    answer:
      'Para tu primera cita solo necesitas traer tu cédula de identidad. Si tienes radiografías dentales recientes o historial de tratamientos anteriores, tráelos también para que el especialista tenga una evaluación más completa.',
  },
  {
    question: '¿Atienden emergencias dentales?',
    answer:
      'Sí, atendemos emergencias dentales. Si tienes un dolor intenso, fractura dental o cualquier urgencia bucal, contáctanos de inmediato por WhatsApp al (829) 937-6644 y te daremos atención prioritaria.',
  },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.06, ease }}
      style={{
        background: 'var(--bg-white)',
        borderRadius: '16px',
        border: isOpen ? '1px solid var(--blue-light)' : '1px solid var(--border)',
        overflow: 'hidden',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        boxShadow: isOpen ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          padding: '24px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: '16px',
            color: isOpen ? 'var(--blue-mid)' : 'var(--text-dark)',
            transition: 'color 0.3s',
            lineHeight: 1.4,
          }}
        >
          {faq.question}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: isOpen ? 'var(--blue-mid)' : 'var(--bg-section)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'background 0.3s',
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke={isOpen ? '#fff' : 'var(--text-body)'}
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="7" y1="1" x2="7" y2="13" />
            <line x1="1" y1="7" x2="13" y2="7" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                padding: '0 28px 24px',
                borderTop: '1px solid var(--border)',
                marginTop: '-1px',
                paddingTop: '20px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  color: 'var(--text-body)',
                  lineHeight: 1.7,
                }}
              >
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      style={{
        background: 'var(--bg-white)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative */}
      <div
        style={{
          position: 'absolute',
          bottom: '-120px',
          left: '-80px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0,188,212,0.04) 0%, transparent 70%)',
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
          <SectionLabel text="PREGUNTAS FRECUENTES" />
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
            ¿Tienes Alguna
            <br />
            <span style={{ color: 'var(--blue-mid)' }}>Pregunta?</span>
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
          Resolvemos las dudas más comunes de nuestros pacientes.
          Si no encuentras tu respuesta, contáctanos directamente.
        </motion.p>

        {/* FAQ Accordion */}
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: 'var(--text-muted)',
              fontWeight: 600,
            }}
          >
            ¿No encontraste tu respuesta?
          </p>
          <motion.a
            href="https://wa.me/18299376644?text=Hola%20Elite%20Dental%20Care!%20Tengo%20una%20pregunta."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(37,211,102,0.35)' }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              background: '#25D366',
              color: '#fff',
              borderRadius: '50px',
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(37,211,102,0.3)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escríbenos por WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
