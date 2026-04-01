import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

/* ─── Data ─── */

const requiredItems = [
  {
    id: 'panoramica',
    title: 'Radiografía Panorámica',
    description:
      'Permite evaluar dientes presentes, dientes retenidos, caries, hueso y estructuras generales de toda la boca en una sola imagen.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--blue-mid)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="3" />
        <circle cx="12" cy="12" r="4" />
        <path d="M2 8h4" /><path d="M18 8h4" />
        <path d="M8 3v2" /><path d="M16 3v2" />
      </svg>
    ),
  },
  {
    id: 'cefalometrica',
    title: 'Radiografía Lateral de Cráneo (Cefalométrica)',
    description:
      'Nos ayuda a analizar el crecimiento facial, la mordida, la posición de los maxilares y las relaciones esqueléticas para planificar tu tratamiento con precisión.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="7" />
        <path d="M12 17v4" /><path d="M8 21h8" />
        <path d="M9 8l2 2 4-4" />
      </svg>
    ),
  },
];

const evaluationSteps = [
  {
    num: '01',
    title: 'Ficha Clínica de Ortodoncia',
    description: 'Llenado completo de tu historial médico y dental, antecedentes familiares y hábitos para personalizar tu diagnóstico.',
    color: 'var(--blue-mid)',
  },
  {
    num: '02',
    title: 'Evaluación Clínica Completa',
    description: 'Examen detallado de encías, mordida, articulación temporomandibular y estado general de tu salud bucal.',
    color: 'var(--cyan)',
  },
  {
    num: '03',
    title: 'Fotografías Intraorales',
    description: 'Registro fotográfico interno de alta resolución de dientes, encías y mordida desde múltiples ángulos.',
    color: 'var(--blue-light)',
  },
  {
    num: '04',
    title: 'Fotografías Extraorales',
    description: 'Fotografías faciales de frente y perfil para evaluar simetría, proporciones y armonía facial.',
    color: 'var(--blue-mid)',
  },
  {
    num: '05',
    title: 'Análisis de Radiografías',
    description: 'Estudio minucioso de tus radiografías para evaluar raíces, hueso, dientes retenidos y estructuras óseas.',
    color: 'var(--cyan)',
  },
  {
    num: '06',
    title: 'Evaluación de Mordida y Alineación',
    description: 'Análisis detallado de la oclusión, espacios, apiñamiento y posición de cada pieza dental.',
    color: 'var(--blue-light)',
  },
  {
    num: '07',
    title: 'Plan de Tratamiento Personalizado',
    description: 'Diseño de un plan a tu medida con opciones de tratamiento, duración estimada y objetivos claros para tu sonrisa.',
    color: 'var(--blue-mid)',
  },
];

const benefits = [
  {
    title: 'Diagnóstico Preciso',
    description: 'Cada análisis nos acerca a un tratamiento efectivo, sin improvisaciones.',
    icon: '🎯',
  },
  {
    title: 'Resultados Estables',
    description: 'Un plan detallado asegura resultados funcionales y estéticos a largo plazo.',
    icon: '✨',
  },
  {
    title: 'Tratamiento Personalizado',
    description: 'No hay dos sonrisas iguales. Tu plan es único, diseñado solo para ti.',
    icon: '🦷',
  },
  {
    title: 'Tecnología Avanzada',
    description: 'Utilizamos herramientas de última generación para cada etapa del diagnóstico.',
    icon: '🔬',
  },
];

/* ─── Component ─── */

export default function OrthodonticsEvalPage() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [expandedReq, setExpandedReq] = useState<string | null>(null);

  const waMsg =
    'Hola Elite Dental Care! Me interesa agendar una evaluación de ortodoncia. ¿Me pueden ayudar?';
  const waLink = `https://wa.me/18299376644?text=${encodeURIComponent(waMsg)}`;

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg-base)' }}>
        {/* ═══ HERO ═══ */}
        <section
          style={{
            background: 'linear-gradient(135deg, var(--blue-deep) 0%, #0D47A1 60%, #0A3570 100%)',
            padding: '160px 0 120px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative elements */}
          <div
            style={{
              position: 'absolute',
              top: '-120px',
              right: '-60px',
              width: '550px',
              height: '550px',
              background: 'rgba(0,188,212,0.06)',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              animation: 'morph-blob 10s ease-in-out infinite',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-100px',
              left: '-100px',
              width: '400px',
              height: '400px',
              background: 'rgba(66,165,245,0.05)',
              borderRadius: '50% 60% 30% 40% / 30% 50% 70% 60%',
              animation: 'morph-blob 8s ease-in-out infinite 3s',
            }}
          />
          {/* Floating tooth decorations */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: `${6 + i * 2}px`,
                height: `${6 + i * 2}px`,
                borderRadius: '50%',
                background: `rgba(0,188,212,${0.12 + i * 0.03})`,
                top: `${15 + i * 13}%`,
                left: `${10 + i * 15}%`,
                animation: `float-gentle ${5 + i}s ease-in-out infinite ${i * 0.5}s`,
              }}
            />
          ))}

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '36px',
                flexWrap: 'wrap',
              }}
            >
              {[
                { label: 'Inicio', action: () => navigate('/') },
                { label: 'Servicios', action: () => navigate('/#servicios') },
                { label: 'Ortodoncia', action: () => navigate('/servicios/ortodoncia') },
              ].map((crumb, i) => (
                <span key={crumb.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {i > 0 && (
                    <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px' }}>/</span>
                  )}
                  <button
                    onClick={crumb.action}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'rgba(255,255,255,0.55)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')
                    }
                  >
                    {crumb.label}
                  </button>
                </span>
              ))}
              <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px' }}>/</span>
              <span
                style={{
                  color: 'var(--cyan)',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-body)',
                }}
              >
                Evaluación
              </span>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ marginBottom: '24px' }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 20px',
                  borderRadius: '50px',
                  background: 'rgba(0,188,212,0.12)',
                  border: '1px solid rgba(0,188,212,0.2)',
                  color: 'var(--cyan)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                <span style={{ fontSize: '16px' }}>🦷</span>
                Guía de Evaluación
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(40px, 5.5vw, 72px)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.08,
                marginBottom: '20px',
                maxWidth: '700px',
              }}
            >
              Evaluación de{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--cyan), var(--blue-light))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Ortodoncia
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(16px, 2vw, 20px)',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                maxWidth: '580px',
                marginBottom: '40px',
              }}
            >
              Realizamos una evaluación completa para brindarte un diagnóstico preciso y un
              tratamiento 100% personalizado para tu sonrisa.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
            >
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  borderRadius: '50px',
                  background: 'var(--cyan)',
                  color: '#fff',
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 8px 32px rgba(0,188,212,0.35)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,188,212,0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,188,212,0.35)';
                }}
              >
                Agendar Evaluación
              </a>
              <button
                onClick={() => {
                  const el = document.getElementById('que-traer');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  borderRadius: '50px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1.5px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }}
              >
                Ver proceso completo ↓
              </button>
            </motion.div>
          </div>
        </section>

        {/* ═══ QUÉ TRAER ═══ */}
        <section
          id="que-traer"
          style={{
            padding: '120px 0',
            background: 'var(--bg-white)',
          }}
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ textAlign: 'center', marginBottom: '64px' }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 20px',
                  borderRadius: '50px',
                  background: 'var(--cyan-light)',
                  color: 'var(--blue-deep)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                📋 PREPARACIÓN
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  lineHeight: 1.1,
                  marginTop: '20px',
                  marginBottom: '16px',
                }}
              >
                ¿Qué debes traer a tu{' '}
                <span style={{ color: 'var(--blue-mid)' }}>evaluación?</span>
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '17px',
                  color: 'var(--text-body)',
                  maxWidth: '560px',
                  margin: '0 auto',
                  lineHeight: 1.7,
                }}
              >
                Para una valoración adecuada, debes asistir con los siguientes estudios radiográficos.
              </p>
            </motion.div>

            {/* Required items — expandable cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '28px',
                maxWidth: '800px',
                margin: '0 auto 48px',
              }}
            >
              {requiredItems.map((item, i) => {
                const isExpanded = expandedReq === item.id;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    onClick={() => setExpandedReq(isExpanded ? null : item.id)}
                    style={{
                      background: isExpanded
                        ? 'linear-gradient(135deg, var(--blue-deep), #0D47A1)'
                        : 'var(--bg-white)',
                      borderRadius: '24px',
                      padding: '36px 32px',
                      border: isExpanded ? 'none' : '1.5px solid var(--border)',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: isExpanded ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    whileHover={{ y: -4 }}
                  >
                    {/* Decorative blob when expanded */}
                    {isExpanded && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '-40px',
                          right: '-40px',
                          width: '180px',
                          height: '180px',
                          background: 'rgba(0,188,212,0.1)',
                          borderRadius: '50%',
                          pointerEvents: 'none',
                        }}
                      />
                    )}

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '20px',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <div
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '18px',
                          background: isExpanded ? 'rgba(255,255,255,0.1)' : 'var(--bg-section)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'background 0.3s',
                        }}
                      >
                        <div style={{ filter: isExpanded ? 'brightness(10)' : 'none', transition: 'filter 0.3s' }}>
                          {item.icon}
                        </div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '8px',
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontWeight: 800,
                              fontSize: '18px',
                              color: isExpanded ? '#fff' : 'var(--text-dark)',
                              transition: 'color 0.3s',
                              lineHeight: 1.3,
                            }}
                          >
                            {item.title}
                          </h3>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ flexShrink: 0, marginLeft: '12px' }}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke={isExpanded ? '#fff' : 'var(--text-muted)'}
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </motion.div>
                        </div>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                              style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '15px',
                                color: 'rgba(255,255,255,0.75)',
                                lineHeight: 1.7,
                                overflow: 'hidden',
                              }}
                            >
                              {item.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                        {!isExpanded && (
                          <p
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '13px',
                              color: 'var(--blue-mid)',
                              fontWeight: 600,
                            }}
                          >
                            Toca para ver detalles
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Info note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                maxWidth: '600px',
                margin: '0 auto',
                padding: '20px 28px',
                borderRadius: '16px',
                background: 'var(--cyan-light)',
                border: '1px solid rgba(0,188,212,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <span style={{ fontSize: '22px', flexShrink: 0 }}>📌</span>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--blue-deep)',
                  fontWeight: 600,
                  lineHeight: 1.6,
                }}
              >
                Si no cuentas con estas radiografías, no te preocupes. Te indicaremos dónde
                realizarlas cerca de la clínica con tarifas preferenciales.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══ PASOS INTERACTIVOS ═══ */}
        <section
          style={{
            padding: '120px 0',
            background: 'var(--bg-section)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background blob */}
          <div
            style={{
              position: 'absolute',
              top: '20%',
              right: '-5%',
              width: '400px',
              height: '400px',
              background: 'rgba(30,136,229,0.04)',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              animation: 'morph-blob 12s ease-in-out infinite',
              pointerEvents: 'none',
            }}
          />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ textAlign: 'center', marginBottom: '72px' }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 20px',
                  borderRadius: '50px',
                  background: 'var(--cyan-light)',
                  color: 'var(--blue-deep)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                🦷 TU EVALUACIÓN INCLUYE
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  lineHeight: 1.1,
                  marginTop: '20px',
                  marginBottom: '16px',
                }}
              >
                7 pasos hacia tu{' '}
                <span style={{ color: 'var(--blue-mid)' }}>sonrisa perfecta</span>
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '17px',
                  color: 'var(--text-body)',
                  maxWidth: '520px',
                  margin: '0 auto',
                  lineHeight: 1.7,
                }}
              >
                Cada paso está diseñado para obtener la información necesaria y crear tu plan de
                tratamiento ideal.
              </p>
            </motion.div>

            {/* Interactive timeline */}
            <div
              className="eval-timeline-layout"
              style={{
                display: 'grid',
                gridTemplateColumns: '320px 1fr',
                gap: '48px',
                alignItems: 'start',
              }}
            >
              {/* Left — step list */}
              <div style={{ position: 'sticky', top: '100px' }} className="eval-step-nav">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  {evaluationSteps.map((step, i) => (
                    <motion.button
                      key={step.num}
                      onClick={() => setActiveStep(i)}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '16px 20px',
                        borderRadius: '16px',
                        border: 'none',
                        background:
                          activeStep === i
                            ? 'var(--bg-white)'
                            : 'transparent',
                        boxShadow:
                          activeStep === i ? 'var(--shadow-md)' : 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textAlign: 'left',
                        width: '100%',
                      }}
                    >
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '14px',
                          background:
                            activeStep === i
                              ? step.color
                              : 'var(--bg-section)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
                          fontWeight: 800,
                          color: activeStep === i ? '#fff' : 'var(--text-muted)',
                          flexShrink: 0,
                          transition: 'all 0.3s ease',
                          border: activeStep === i ? 'none' : '1.5px solid var(--border)',
                        }}
                      >
                        {step.num}
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
                          fontWeight: activeStep === i ? 700 : 500,
                          color:
                            activeStep === i
                              ? 'var(--text-dark)'
                              : 'var(--text-muted)',
                          transition: 'all 0.3s',
                          lineHeight: 1.3,
                        }}
                      >
                        {step.title}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Right — active step detail */}
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 30, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -30, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      background: 'var(--bg-white)',
                      borderRadius: '28px',
                      padding: '56px 48px',
                      boxShadow: 'var(--shadow-md)',
                      position: 'relative',
                      overflow: 'hidden',
                      minHeight: '360px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Large background number */}
                    <span
                      style={{
                        position: 'absolute',
                        top: '20px',
                        right: '32px',
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(100px, 15vw, 180px)',
                        fontWeight: 700,
                        color: 'var(--bg-section)',
                        lineHeight: 1,
                        pointerEvents: 'none',
                        userSelect: 'none',
                      }}
                    >
                      {evaluationSteps[activeStep].num}
                    </span>

                    {/* Step progress */}
                    <div
                      style={{
                        display: 'flex',
                        gap: '6px',
                        marginBottom: '32px',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {evaluationSteps.map((_, i) => (
                        <div
                          key={i}
                          style={{
                            width: i === activeStep ? '32px' : '8px',
                            height: '4px',
                            borderRadius: '4px',
                            background:
                              i <= activeStep
                                ? evaluationSteps[activeStep].color
                                : 'var(--border)',
                            transition: 'all 0.4s ease',
                          }}
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div
                        style={{
                          display: 'inline-flex',
                          padding: '6px 14px',
                          borderRadius: '50px',
                          background: `${evaluationSteps[activeStep].color}15`,
                          marginBottom: '16px',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '12px',
                            fontWeight: 700,
                            color: evaluationSteps[activeStep].color,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                          }}
                        >
                          Paso {evaluationSteps[activeStep].num} de 07
                        </span>
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontStyle: 'italic',
                          fontSize: 'clamp(28px, 3vw, 40px)',
                          fontWeight: 700,
                          color: 'var(--text-dark)',
                          lineHeight: 1.15,
                          marginBottom: '20px',
                        }}
                      >
                        {evaluationSteps[activeStep].title}
                      </h3>

                      <div
                        style={{
                          width: '48px',
                          height: '3px',
                          background: evaluationSteps[activeStep].color,
                          borderRadius: '2px',
                          marginBottom: '24px',
                        }}
                      />

                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '17px',
                          color: 'var(--text-body)',
                          lineHeight: 1.8,
                          maxWidth: '480px',
                        }}
                      >
                        {evaluationSteps[activeStep].description}
                      </p>

                      {/* Navigation arrows */}
                      <div
                        style={{
                          display: 'flex',
                          gap: '12px',
                          marginTop: '40px',
                        }}
                      >
                        <button
                          onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
                          disabled={activeStep === 0}
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '14px',
                            background: 'var(--bg-section)',
                            border: '1.5px solid var(--border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: activeStep === 0 ? 'default' : 'pointer',
                            opacity: activeStep === 0 ? 0.35 : 1,
                            transition: 'opacity 0.2s',
                          }}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--text-dark)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M19 12H5" />
                            <path d="M12 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() =>
                            setActiveStep((s) =>
                              Math.min(evaluationSteps.length - 1, s + 1)
                            )
                          }
                          disabled={activeStep === evaluationSteps.length - 1}
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '14px',
                            background:
                              activeStep === evaluationSteps.length - 1
                                ? 'var(--bg-section)'
                                : evaluationSteps[activeStep].color,
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor:
                              activeStep === evaluationSteps.length - 1
                                ? 'default'
                                : 'pointer',
                            opacity:
                              activeStep === evaluationSteps.length - 1 ? 0.35 : 1,
                            transition: 'opacity 0.2s, background 0.3s',
                          }}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={
                              activeStep === evaluationSteps.length - 1
                                ? 'var(--text-dark)'
                                : '#fff'
                            }
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ POR QUÉ ES IMPORTANTE ═══ */}
        <section
          style={{
            padding: '120px 0',
            background: 'var(--bg-white)',
          }}
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ textAlign: 'center', marginBottom: '64px' }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 20px',
                  borderRadius: '50px',
                  background: 'var(--cyan-light)',
                  color: 'var(--blue-deep)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                ✨ BENEFICIOS
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  lineHeight: 1.1,
                  marginTop: '20px',
                  marginBottom: '16px',
                }}
              >
                ¿Por qué es importante una{' '}
                <span style={{ color: 'var(--blue-mid)' }}>evaluación completa?</span>
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '17px',
                  color: 'var(--text-body)',
                  maxWidth: '560px',
                  margin: '0 auto',
                  lineHeight: 1.7,
                }}
              >
                Cada paciente presenta necesidades diferentes. Un análisis detallado es la base
                para lograr resultados funcionales, estéticos y estables a largo plazo.
              </p>
            </motion.div>

            {/* Benefits grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '24px',
                maxWidth: '1000px',
                margin: '0 auto',
              }}
            >
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  style={{
                    background: 'var(--bg-white)',
                    borderRadius: '24px',
                    padding: '40px 32px',
                    border: '1.5px solid var(--border)',
                    textAlign: 'center',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--blue-light)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '20px',
                      background: 'var(--bg-section)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '28px',
                      margin: '0 auto 20px',
                    }}
                  >
                    {benefit.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 800,
                      fontSize: '18px',
                      color: 'var(--text-dark)',
                      marginBottom: '10px',
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--text-body)',
                      lineHeight: 1.7,
                    }}
                  >
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CTA FINAL ═══ */}
        <section
          style={{
            padding: '100px 0',
            background: 'linear-gradient(135deg, var(--blue-deep) 0%, #0D47A1 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-80px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '600px',
              background: 'rgba(0,188,212,0.06)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}
            >
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '24px' }}>
                🦷
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(30px, 4vw, 48px)',
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1.1,
                  marginBottom: '20px',
                }}
              >
                ¿Lista para transformar tu sonrisa?
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '17px',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.7,
                  marginBottom: '36px',
                }}
              >
                Agenda tu evaluación de ortodoncia hoy y da el primer paso hacia la sonrisa que
                siempre soñaste. Consulta inicial con la Dra. Hernández y su equipo.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '14px',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '18px 36px',
                    borderRadius: '50px',
                    background: 'var(--cyan)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 8px 32px rgba(0,188,212,0.4)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,188,212,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,188,212,0.4)';
                  }}
                >
                  Agendar Evaluación
                </a>
                <a
                  href="tel:+18299376644"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '18px 36px',
                    borderRadius: '50px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1.5px solid rgba(255,255,255,0.2)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.14)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  }}
                >
                  (829) 937-6644
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
