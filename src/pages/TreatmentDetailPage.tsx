import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getTreatmentBySlug, getTreatmentsByService } from '../data/treatments';
import { getServiceById } from '../data/services';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function TreatmentDetailPage() {
  const { serviceId, treatmentSlug } = useParams<{
    serviceId: string;
    treatmentSlug: string;
  }>();
  const navigate = useNavigate();
  const treatment = getTreatmentBySlug(treatmentSlug || '');
  const service = getServiceById(serviceId || '');

  if (!treatment || !service) {
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
            Tratamiento no encontrado
          </h1>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '17px',
              marginBottom: '32px',
            }}
          >
            El tratamiento que buscas no existe o ha sido removido.
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
              fontWeight: 700,
              fontSize: '14px',
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

  const waMsg = `Hola Elite Dental Care! Me interesa el tratamiento de ${treatment.name.toLowerCase()}. ¿Me pueden dar más información?`;
  const waLink = `https://wa.me/18299376644?text=${encodeURIComponent(waMsg)}`;

  const relatedTreatments = getTreatmentsByService(treatment.serviceId).filter(
    (t) => t.slug !== treatment.slug
  );

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg-base)' }}>
        {/* Hero Banner */}
        <section
          style={{
            background:
              'linear-gradient(135deg, var(--blue-deep) 0%, #0D47A1 100%)',
            padding: '160px 0 80px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '400px',
              height: '400px',
              background: 'rgba(0,188,212,0.08)',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              animation: 'morph-blob 10s ease-in-out infinite',
            }}
          />

          <div
            className="container"
            style={{ position: 'relative', zIndex: 1 }}
          >
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
                flexWrap: 'wrap',
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
                }}
              >
                Inicio
              </button>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px' }}>
                /
              </span>
              <button
                onClick={() => navigate(`/servicios/${service.id}`)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                {service.name}
              </button>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px' }}>
                /
              </span>
              <span
                style={{
                  color: 'var(--cyan)',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                {treatment.name}
              </span>
            </motion.div>

            {/* Category pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ marginBottom: '20px' }}
            >
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
                {treatment.serviceName}
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
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.1,
                maxWidth: '700px',
              }}
            >
              {treatment.name}
            </motion.h1>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '80px 0 100px' }}>
          <div
            className="container"
            style={{ maxWidth: '860px', margin: '0 auto' }}
          >
            {/* Description */}
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
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  marginBottom: '24px',
                  lineHeight: 1.2,
                }}
              >
                ¿Qué es este{' '}
                <span style={{ color: 'var(--blue-mid)' }}>tratamiento</span>?
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
              {treatment.description.map((p, i) => (
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
                  {p}
                </p>
              ))}
            </motion.div>

            {/* Key Points */}
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
                Puntos Clave
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '14px',
                }}
                className="service-items-grid"
              >
                {treatment.keyPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 18px',
                      background: 'var(--bg-white)',
                      borderRadius: '12px',
                      border: '1.5px solid var(--border)',
                    }}
                  >
                    <span
                      style={{
                        color: 'var(--blue-mid)',
                        fontSize: '14px',
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        color: 'var(--text-dark)',
                        fontWeight: 500,
                      }}
                    >
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                marginTop: '48px',
                padding: '36px 32px',
                background:
                  'linear-gradient(135deg, var(--blue-deep), #0D47A1)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px',
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#fff',
                    marginBottom: '6px',
                  }}
                >
                  ¿Te interesa este tratamiento?
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  Las consultas con especialistas tienen un costo. Consulta por
                  WhatsApp.
                </p>
              </div>
              <motion.a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  background: '#25D366',
                  color: '#fff',
                  borderRadius: '50px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(37,211,102,0.3)',
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar por WhatsApp
              </motion.a>
            </motion.div>

            {/* Related Treatments */}
            {relatedTreatments.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                style={{ marginTop: '64px' }}
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
                  Otros tratamientos de {service.name.toLowerCase()}
                </h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                    gap: '16px',
                  }}
                >
                  {relatedTreatments.map((t) => (
                    <motion.div
                      key={t.slug}
                      whileHover={{ y: -4 }}
                      onClick={() =>
                        navigate(
                          `/servicios/${t.serviceId}/tratamiento/${t.slug}`
                        )
                      }
                      style={{
                        padding: '20px',
                        background: 'var(--bg-white)',
                        borderRadius: '14px',
                        border: '1.5px solid var(--border)',
                        cursor: 'pointer',
                        transition: 'border-color 0.3s, box-shadow 0.3s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--blue-light)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
                          fontWeight: 600,
                          color: 'var(--blue-mid)',
                        }}
                      >
                        {t.name} →
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Back to service */}
            <div style={{ marginTop: '40px' }}>
              <button
                onClick={() => navigate(`/servicios/${service.id}`)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--blue-mid)',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                ← Volver a {service.name.toLowerCase()}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
