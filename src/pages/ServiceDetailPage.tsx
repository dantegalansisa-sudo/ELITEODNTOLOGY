import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getServiceById, services } from '../data/services';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = getServiceById(id || '');

  if (!service) {
    return (
      <>
        <Navbar />
        <div
          style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-body)',
            padding: '120px 24px',
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '48px',
              fontWeight: 700,
              color: 'var(--text-dark)',
              marginBottom: '16px',
            }}
          >
            Servicio no encontrado
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '17px', marginBottom: '32px' }}>
            El servicio que buscas no existe o ha sido removido.
          </p>
          <button
            onClick={() => navigate('/')}
            style={{
              padding: '14px 32px',
              borderRadius: '50px',
              border: 'none',
              background: 'var(--blue-mid)',
              color: '#fff',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Volver al inicio
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const waMsg = `Hola Elite Dental Care! Me interesa el servicio de ${service.name.toLowerCase()}. ¿Me pueden dar más información?`;
  const waLink = `https://wa.me/18299376644?text=${encodeURIComponent(waMsg)}`;

  // Get related services (same category, excluding current)
  const relatedServices = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  // If not enough related, fill with other services
  const otherServices =
    relatedServices.length < 2
      ? [
          ...relatedServices,
          ...services.filter((s) => s.id !== service.id && !relatedServices.includes(s)).slice(0, 2 - relatedServices.length),
        ]
      : relatedServices;

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg-base)' }}>
        {/* Hero Banner */}
        <section
          style={{
            background: service.image
              ? `linear-gradient(135deg, rgba(21,101,192,0.88) 0%, rgba(13,71,161,0.92) 100%), url(${service.image}) center/cover no-repeat`
              : 'linear-gradient(135deg, var(--blue-deep) 0%, #0D47A1 100%)',
            padding: '160px 0 100px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative blob */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '500px',
              height: '500px',
              background: 'rgba(0,188,212,0.08)',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              animation: 'morph-blob 10s ease-in-out infinite',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-80px',
              left: '-80px',
              width: '350px',
              height: '350px',
              background: 'rgba(66,165,245,0.06)',
              borderRadius: '50% 60% 30% 40% / 30% 50% 70% 60%',
              animation: 'morph-blob 8s ease-in-out infinite 2s',
            }}
          />

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
                marginBottom: '32px',
              }}
            >
              <button
                onClick={() => navigate('/')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >
                Inicio
              </button>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px' }}>/</span>
              <button
                onClick={() => navigate('/#servicios')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >
                Servicios
              </button>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px' }}>/</span>
              <span style={{ color: 'var(--cyan)', fontSize: '14px', fontWeight: 600 }}>
                {service.name}
              </span>
            </motion.div>

            {/* Number + Category pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '72px',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.08)',
                  lineHeight: 1,
                }}
              >
                {service.num}
              </span>
              <span
                style={{
                  padding: '6px 16px',
                  borderRadius: '50px',
                  background: 'rgba(0,188,212,0.15)',
                  color: 'var(--cyan)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {service.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.1,
                marginBottom: '12px',
                maxWidth: '700px',
              }}
            >
              {service.name}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--cyan)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}
            >
              {service.subtitle}
            </motion.p>

            {/* Short description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.7,
                maxWidth: '600px',
              }}
            >
              {service.description}
            </motion.p>
          </div>
        </section>

        {/* Content Section */}
        <section style={{ padding: '100px 0' }}>
          <div className="container">
            <div
              className="service-detail-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 380px',
                gap: '60px',
                alignItems: 'start',
              }}
            >
              {/* Left Column - Main Content */}
              <div>
                {/* Full Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: 'clamp(28px, 3vw, 40px)',
                      fontWeight: 700,
                      color: 'var(--text-dark)',
                      marginBottom: '24px',
                      lineHeight: 1.2,
                    }}
                  >
                    Sobre este <span style={{ color: 'var(--blue-mid)' }}>servicio</span>
                  </h2>
                  <div
                    style={{
                      width: '60px',
                      height: '3px',
                      background: 'var(--cyan)',
                      borderRadius: '2px',
                      marginBottom: '32px',
                    }}
                  />
                  {service.fullDescription.map((paragraph, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '16px',
                        color: 'var(--text-body)',
                        lineHeight: 1.8,
                        marginBottom: '20px',
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </motion.div>

                {/* Treatments / Items */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  style={{ marginTop: '48px' }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 800,
                      fontSize: '22px',
                      color: 'var(--text-dark)',
                      marginBottom: '24px',
                    }}
                  >
                    Tratamientos incluidos
                  </h3>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                    }}
                    className="service-items-grid"
                  >
                    {service.items.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '16px 20px',
                          background: 'var(--bg-white)',
                          borderRadius: '14px',
                          border: '1.5px solid var(--border)',
                        }}
                      >
                        <span
                          style={{
                            color: 'var(--blue-mid)',
                            fontSize: '16px',
                            fontWeight: 700,
                            flexShrink: 0,
                            marginTop: '1px',
                          }}
                        >
                          &rarr;
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '14px',
                            color: 'var(--text-dark)',
                            fontWeight: 500,
                            lineHeight: 1.5,
                          }}
                        >
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  style={{ marginTop: '48px' }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 800,
                      fontSize: '22px',
                      color: 'var(--text-dark)',
                      marginBottom: '24px',
                    }}
                  >
                    Beneficios
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {service.benefits.map((benefit, i) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                        }}
                      >
                        <div
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            background: 'var(--cyan-light)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--blue-mid)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '15px',
                            color: 'var(--text-body)',
                            fontWeight: 500,
                          }}
                        >
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Sidebar */}
              <div style={{ position: 'sticky', top: '100px' }}>
                {/* CTA Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  style={{
                    background: 'var(--bg-white)',
                    borderRadius: '24px',
                    padding: '36px 32px',
                    border: '1.5px solid var(--border)',
                    boxShadow: 'var(--shadow-sm)',
                    marginBottom: '24px',
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 800,
                      fontSize: '20px',
                      color: 'var(--text-dark)',
                      marginBottom: '8px',
                    }}
                  >
                    Agenda tu cita
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--text-muted)',
                      marginBottom: '24px',
                      lineHeight: 1.6,
                    }}
                  >
                    Consulta inicial gratuita. Respuesta en menos de 2 horas.
                  </p>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      width: '100%',
                      padding: '16px',
                      borderRadius: '14px',
                      background: 'var(--blue-mid)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      fontSize: '15px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'background 0.2s, box-shadow 0.2s',
                      boxShadow: 'var(--shadow-blue)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--blue-deep)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--blue-mid)';
                    }}
                  >
                    WhatsApp Directo
                  </a>

                  <a
                    href="tel:+18299376644"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      width: '100%',
                      padding: '16px',
                      borderRadius: '14px',
                      background: 'var(--bg-section)',
                      color: 'var(--blue-mid)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '15px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      marginTop: '12px',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--cyan-light)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--bg-section)';
                    }}
                  >
                    (829) 937-6644
                  </a>
                </motion.div>

                {/* Evaluation Guide Card — only for ortodoncia */}
                {service.id === 'ortodoncia' && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    onClick={() => { navigate('/servicios/ortodoncia/evaluacion'); window.scrollTo(0, 0); }}
                    style={{
                      background: 'linear-gradient(135deg, var(--cyan), #0097A7)',
                      borderRadius: '24px',
                      padding: '32px 28px',
                      marginBottom: '24px',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                    }}
                    whileHover={{ y: -4 }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '-30px',
                        right: '-30px',
                        width: '120px',
                        height: '120px',
                        background: 'rgba(255,255,255,0.08)',
                        borderRadius: '50%',
                        pointerEvents: 'none',
                      }}
                    />
                    <span style={{ fontSize: '28px', display: 'block', marginBottom: '12px' }}>📋</span>
                    <h4
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 800,
                        fontSize: '17px',
                        color: '#fff',
                        marginBottom: '8px',
                        lineHeight: 1.3,
                      }}
                    >
                      Guía de Evaluación de Ortodoncia
                    </h4>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.8)',
                        lineHeight: 1.6,
                        marginBottom: '16px',
                      }}
                    >
                      Conoce qué traer, qué incluye y el proceso completo paso a paso.
                    </p>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      Ver guía completa →
                    </span>
                  </motion.div>
                )}

                {/* Info Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  style={{
                    background: 'var(--blue-deep)',
                    borderRadius: '24px',
                    padding: '36px 32px',
                    color: '#fff',
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 800,
                      fontSize: '18px',
                      marginBottom: '20px',
                    }}
                  >
                    Elite Dental Care
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {[
                      { label: 'Santo Domingo, Rep. Dom.', icon: '📍' },
                      { label: '@elitedentalcare.rd', icon: '📱' },
                      { label: 'Lun - Vie: 8am - 6pm', icon: '🕐' },
                      { label: 'Sáb: 8am - 1pm', icon: '📅' },
                    ].map((info) => (
                      <div
                        key={info.label}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '14px',
                          color: 'rgba(255,255,255,0.75)',
                        }}
                      >
                        <span style={{ fontSize: '16px' }}>{info.icon}</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                          {info.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        {otherServices.length > 0 && (
          <section
            style={{
              background: 'var(--bg-section)',
              padding: '100px 0',
            }}
          >
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{ marginBottom: '48px' }}
              >
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(28px, 3vw, 40px)',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                    marginBottom: '8px',
                  }}
                >
                  Otros <span style={{ color: 'var(--blue-mid)' }}>servicios</span>
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    color: 'var(--text-muted)',
                  }}
                >
                  Explora más tratamientos disponibles en Elite Dental Care
                </p>
              </motion.div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '24px',
                }}
              >
                {otherServices.map((related, i) => (
                  <motion.div
                    key={related.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    onClick={() => {
                      navigate(`/servicios/${related.id}`);
                      window.scrollTo(0, 0);
                    }}
                    style={{
                      background: 'var(--bg-white)',
                      borderRadius: '20px',
                      padding: '32px 28px',
                      border: '1.5px solid var(--border)',
                      cursor: 'pointer',
                      transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
                    }}
                    whileHover={{ y: -4 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--blue-light)';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '48px',
                        fontWeight: 700,
                        color: 'var(--bg-section)',
                        lineHeight: 1,
                      }}
                    >
                      {related.num}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 800,
                        fontSize: '18px',
                        color: 'var(--text-dark)',
                        marginTop: '12px',
                        marginBottom: '4px',
                      }}
                    >
                      {related.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: 'var(--cyan)',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        marginBottom: '12px',
                      }}
                    >
                      {related.subtitle}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        color: 'var(--text-body)',
                        lineHeight: 1.6,
                      }}
                    >
                      {related.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
