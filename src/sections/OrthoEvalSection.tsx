import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

/* ─── Data ─── */

const requiredItems = [
  {
    id: 'panoramica',
    title: 'Radiografía Panorámica',
    description:
      'Permite evaluar dientes presentes, dientes retenidos, caries, hueso y estructuras generales de toda la boca en una sola imagen.',
  },
  {
    id: 'cefalometrica',
    title: 'Radiografía Lateral de Cráneo',
    subtitle: '(Cefalométrica)',
    description:
      'Nos ayuda a analizar el crecimiento facial, la mordida, la posición de los maxilares y las relaciones esqueléticas para planificar tu tratamiento con precisión.',
  },
];

const evaluationSteps = [
  { num: '01', title: 'Ficha Clínica', description: 'Llenado completo de tu historial médico y dental, antecedentes familiares y hábitos para personalizar tu diagnóstico.' },
  { num: '02', title: 'Evaluación Clínica', description: 'Examen detallado de encías, mordida, articulación temporomandibular y estado general de tu salud bucal.' },
  { num: '03', title: 'Fotos Intraorales', description: 'Registro fotográfico interno de alta resolución de dientes, encías y mordida desde múltiples ángulos.' },
  { num: '04', title: 'Fotos Extraorales', description: 'Fotografías faciales de frente y perfil para evaluar simetría, proporciones y armonía facial.' },
  { num: '05', title: 'Análisis Radiográfico', description: 'Estudio minucioso de tus radiografías para evaluar raíces, hueso, dientes retenidos y estructuras óseas.' },
  { num: '06', title: 'Mordida y Alineación', description: 'Análisis detallado de la oclusión, espacios, apiñamiento y posición de cada pieza dental.' },
  { num: '07', title: 'Plan Personalizado', description: 'Diseño de un plan a tu medida con opciones de tratamiento, duración estimada y objetivos claros para tu sonrisa.' },
];

/* ─── Component ─── */

export default function OrthoEvalSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedReq, setExpandedReq] = useState<string | null>(null);

  const waMsg = 'Hola Elite Dental Care! Me interesa agendar una evaluación de ortodoncia. ¿Me pueden ayudar?';
  const waLink = `https://wa.me/18299376644?text=${encodeURIComponent(waMsg)}`;

  return (
    <section
      id="evaluacion-ortodoncia"
      style={{
        padding: '120px 0',
        background: 'var(--bg-section)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '450px',
          height: '450px',
          background: 'rgba(30,136,229,0.04)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          animation: 'morph-blob 12s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-60px',
          width: '300px',
          height: '300px',
          background: 'rgba(0,188,212,0.04)',
          borderRadius: '50% 60% 30% 40% / 30% 50% 70% 60%',
          animation: 'morph-blob 9s ease-in-out infinite 4s',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '64px' }}
        >
          <SectionLabel text="🦷 EVALUACIÓN DE ORTODONCIA" />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'var(--text-h2)',
              fontWeight: 700,
              color: 'var(--text-dark)',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Tu Camino Hacia una{' '}
            <span style={{ color: 'var(--blue-mid)' }}>Sonrisa Perfecta</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              color: 'var(--text-body)',
              maxWidth: '560px',
              lineHeight: 1.7,
            }}
          >
            Realizamos una evaluación completa para brindarte un diagnóstico preciso y un
            tratamiento 100% personalizado.
          </p>
        </motion.div>

        {/* ─── Main grid: Left (requirements + CTA) | Right (interactive steps) ─── */}
        <div
          className="ortho-eval-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '420px 1fr',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* ═══ LEFT COLUMN ═══ */}
          <div>
            {/* What to bring */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 800,
                  fontSize: '20px',
                  color: 'var(--text-dark)',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '10px',
                    background: 'var(--cyan-light)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    flexShrink: 0,
                  }}
                >
                  📋
                </span>
                ¿Qué debes traer?
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  marginBottom: '20px',
                  lineHeight: 1.6,
                }}
              >
                Para una valoración adecuada, necesitas los siguientes estudios:
              </p>
            </motion.div>

            {/* Expandable requirement cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              {requiredItems.map((item, i) => {
                const isExpanded = expandedReq === item.id;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    onClick={() => setExpandedReq(isExpanded ? null : item.id)}
                    style={{
                      background: isExpanded
                        ? 'linear-gradient(135deg, var(--blue-deep), #0D47A1)'
                        : 'var(--bg-white)',
                      borderRadius: '18px',
                      padding: '24px',
                      border: isExpanded ? 'none' : '1.5px solid var(--border)',
                      cursor: 'pointer',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: isExpanded ? 'var(--shadow-md)' : 'none',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {isExpanded && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '-30px',
                          right: '-30px',
                          width: '120px',
                          height: '120px',
                          background: 'rgba(0,188,212,0.1)',
                          borderRadius: '50%',
                          pointerEvents: 'none',
                        }}
                      />
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', position: 'relative', zIndex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '12px',
                            background: isExpanded ? 'rgba(255,255,255,0.12)' : 'var(--bg-section)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            transition: 'background 0.3s',
                          }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={isExpanded ? '#fff' : 'var(--blue-mid)'}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ transition: 'stroke 0.3s' }}
                          >
                            <rect x="2" y="3" width="20" height="18" rx="3" />
                            <circle cx="12" cy="12" r="4" />
                            <path d="M2 8h4" /><path d="M18 8h4" />
                          </svg>
                        </div>
                        <div>
                          <h4
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontWeight: 700,
                              fontSize: '15px',
                              color: isExpanded ? '#fff' : 'var(--text-dark)',
                              lineHeight: 1.3,
                              transition: 'color 0.3s',
                            }}
                          >
                            {item.title}
                          </h4>
                          {item.subtitle && (
                            <span
                              style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '12px',
                                color: isExpanded ? 'var(--cyan)' : 'var(--text-muted)',
                                fontWeight: 500,
                              }}
                            >
                              {item.subtitle}
                            </span>
                          )}
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ flexShrink: 0 }}
                      >
                        <svg
                          width="18"
                          height="18"
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
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}
                        >
                          <p
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '14px',
                              color: 'rgba(255,255,255,0.75)',
                              lineHeight: 1.7,
                              marginTop: '14px',
                              paddingLeft: '54px',
                            }}
                          >
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Info note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                padding: '16px 20px',
                borderRadius: '14px',
                background: 'var(--cyan-light)',
                border: '1px solid rgba(0,188,212,0.15)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                marginBottom: '32px',
              }}
            >
              <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '1px' }}>📌</span>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--blue-deep)',
                  fontWeight: 600,
                  lineHeight: 1.6,
                }}
              >
                Si no cuentas con estas radiografías, te indicaremos dónde realizarlas con tarifas preferenciales.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                background: 'linear-gradient(135deg, var(--blue-deep), #0D47A1)',
                borderRadius: '22px',
                padding: '32px 28px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '140px',
                  height: '140px',
                  background: 'rgba(0,188,212,0.08)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                }}
              />
              <h4
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 800,
                  fontSize: '18px',
                  color: '#fff',
                  marginBottom: '8px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                ¿Lista para tu evaluación?
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Agenda hoy y da el primer paso hacia la sonrisa que siempre soñaste.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '50px',
                  background: 'var(--cyan)',
                  color: '#fff',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 6px 24px rgba(0,188,212,0.35)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  position: 'relative',
                  zIndex: 1,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,188,212,0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,188,212,0.35)';
                }}
              >
                Agendar Evaluación →
              </a>
            </motion.div>
          </div>

          {/* ═══ RIGHT COLUMN — Interactive 7 Steps ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 800,
                fontSize: '20px',
                color: 'var(--text-dark)',
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '10px',
                  background: 'var(--cyan-light)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  flexShrink: 0,
                }}
              >
                🦷
              </span>
              ¿Qué incluye tu evaluación?
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--text-muted)',
                marginBottom: '28px',
                lineHeight: 1.6,
              }}
            >
              7 pasos diseñados para un diagnóstico completo. Selecciona cada paso para ver los detalles.
            </p>

            {/* Steps navigation pills */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                marginBottom: '24px',
                flexWrap: 'wrap',
              }}
            >
              {evaluationSteps.map((step, i) => (
                <motion.button
                  key={step.num}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveStep(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: activeStep === i ? '10px 18px' : '10px 14px',
                    borderRadius: '50px',
                    border: 'none',
                    background: activeStep === i ? 'var(--blue-mid)' : 'var(--bg-white)',
                    boxShadow: activeStep === i ? 'var(--shadow-blue)' : 'none',
                    color: activeStep === i ? '#fff' : 'var(--text-body)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    fontWeight: activeStep === i ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: activeStep === i ? 'rgba(255,255,255,0.2)' : 'var(--bg-section)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    {step.num}
                  </span>
                  {activeStep === i && <span>{step.title}</span>}
                </motion.button>
              ))}
            </div>

            {/* Active step detail card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: 'var(--bg-white)',
                  borderRadius: '24px',
                  padding: '44px 40px',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1.5px solid var(--border)',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                {/* Large background number */}
                <span
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '28px',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(80px, 12vw, 140px)',
                    fontWeight: 700,
                    color: 'var(--bg-section)',
                    lineHeight: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  {evaluationSteps[activeStep].num}
                </span>

                {/* Progress dots */}
                <div
                  style={{
                    display: 'flex',
                    gap: '5px',
                    marginBottom: '28px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {evaluationSteps.map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: i === activeStep ? '28px' : '7px',
                        height: '4px',
                        borderRadius: '4px',
                        background: i <= activeStep ? 'var(--blue-mid)' : 'var(--border)',
                        transition: 'all 0.4s ease',
                        cursor: 'pointer',
                      }}
                      onClick={() => setActiveStep(i)}
                    />
                  ))}
                </div>

                {/* Step pill */}
                <div
                  style={{
                    display: 'inline-flex',
                    padding: '5px 12px',
                    borderRadius: '50px',
                    background: 'rgba(30,136,229,0.08)',
                    marginBottom: '14px',
                    alignSelf: 'flex-start',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--blue-mid)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Paso {evaluationSteps[activeStep].num} de 07
                  </span>
                </div>

                {/* Title */}
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(24px, 3vw, 34px)',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                    lineHeight: 1.15,
                    marginBottom: '16px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {evaluationSteps[activeStep].title}
                </h4>

                {/* Accent line */}
                <div
                  style={{
                    width: '40px',
                    height: '3px',
                    background: 'var(--cyan)',
                    borderRadius: '2px',
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    color: 'var(--text-body)',
                    lineHeight: 1.8,
                    maxWidth: '460px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {evaluationSteps[activeStep].description}
                </p>

                {/* Navigation */}
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                    marginTop: '32px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <button
                    onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
                    disabled={activeStep === 0}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'var(--bg-section)',
                      border: '1.5px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: activeStep === 0 ? 'default' : 'pointer',
                      opacity: activeStep === 0 ? 0.3 : 1,
                      transition: 'opacity 0.2s',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setActiveStep((s) => Math.min(evaluationSteps.length - 1, s + 1))}
                    disabled={activeStep === evaluationSteps.length - 1}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: activeStep === evaluationSteps.length - 1 ? 'var(--bg-section)' : 'var(--blue-mid)',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: activeStep === evaluationSteps.length - 1 ? 'default' : 'pointer',
                      opacity: activeStep === evaluationSteps.length - 1 ? 0.3 : 1,
                      transition: 'opacity 0.2s, background 0.3s',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={activeStep === evaluationSteps.length - 1 ? 'var(--text-dark)' : '#fff'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
