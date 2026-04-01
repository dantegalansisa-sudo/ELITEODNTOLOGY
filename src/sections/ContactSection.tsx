import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const serviceOptions = [
  'Limpieza Dental',
  'Revisión General',
  'Blanqueamiento',
  'Carillas',
  'Endodoncia',
  'Ortodoncia',
  'Otro',
];

const specialistOptions = [
  'Dra. Hernández (Especializada)',
  'Dra. María Castillo (General)',
  'Dra. Kiana Del Orbe (Endodoncia)',
  'Sin preferencia',
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  height: '52px',
  padding: '0 16px',
  background: 'var(--bg-white)',
  border: '1.5px solid var(--border)',
  borderRadius: '12px',
  fontFamily: 'var(--font-body)',
  fontSize: '16px',
  color: 'var(--text-dark)',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: '13px',
  color: 'var(--text-dark)',
  marginBottom: '8px',
  display: 'block',
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    specialist: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola Elite Dental Care! Me gustaría agendar una cita.\n\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nServicio: ${formData.service}\nEspecialista: ${formData.specialist}\nFecha: ${formData.date}\nMensaje: ${formData.message}`;
    window.open(
      `https://wa.me/18299376644?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  return (
    <section
      id="contacto"
      style={{
        background: 'var(--bg-white)',
        padding: '120px 0',
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <SectionLabel text="📅 AGENDA TU CITA" />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'var(--text-h2)',
              fontWeight: 700,
              color: 'var(--text-dark)',
              lineHeight: 1.1,
              marginBottom: '12px',
            }}
          >
            ¿Lista Para Tu
            <br />
            <span style={{ color: 'var(--blue-mid)' }}>Nueva Sonrisa?</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--text-muted)',
            }}
          >
            Consulta inicial gratuita — Respuesta en menos de 2 horas
          </p>
        </motion.div>

        {/* Two cards */}
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
          }}
        >
          {/* LEFT — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            style={{
              background: 'var(--blue-deep)',
              borderRadius: '24px',
              padding: '48px 40px',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Logo */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px',
                }}
              >
                <img
                  src="/images/logo.png"
                  alt="Elite Dental Care"
                  style={{
                    height: '50px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                  }}
                />
              </div>

              {/* Cyan line */}
              <div
                style={{
                  width: '50px',
                  height: '3px',
                  background: 'var(--cyan)',
                  borderRadius: '2px',
                  marginBottom: '28px',
                }}
              />

              {/* Contact items */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                  marginBottom: '32px',
                }}
              >
                {[
                  { icon: '📞', text: '(829)-937-6644 / 829-937-6655' },
                  { icon: '📧', text: 'info@elitedentalcare.rd' },
                  { icon: '📍', text: 'Santo Domingo, Rep. Dom.' },
                  { icon: '📱', text: '@elitedentalcare.rd' },
                  { icon: '🌐', text: 'wa.me/18299376644' },
                ].map((item) => (
                  <div
                    key={item.text}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <span style={{ fontSize: '18px' }}>{item.icon}</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '15px',
                        fontWeight: 400,
                        opacity: 0.9,
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* WhatsApp button */}
              <motion.a
                href="https://wa.me/18299376644?text=Hola,%20me%20interesa%20agendar%20una%20cita%20en%20Elite%20Dental%20Care"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                  padding: '16px',
                  background: 'var(--cyan)',
                  color: '#fff',
                  borderRadius: '14px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  marginBottom: '28px',
                }}
              >
                💬 WhatsApp Directo →
              </motion.a>
            </div>

            {/* Team preview */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex' }}>
                {['H', 'M', 'K'].map((initial, i) => (
                  <div
                    key={i}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.2)',
                      border: '2px solid rgba(255,255,255,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '13px',
                      fontWeight: 700,
                      marginLeft: i > 0 ? '-8px' : 0,
                    }}
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  opacity: 0.7,
                }}
              >
                Nuestro equipo te espera
              </span>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            style={{
              background: 'var(--bg-section)',
              borderRadius: '24px',
              padding: '48px 40px',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div>
                <label style={labelStyle}>Nombre completo *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--blue-mid)';
                    e.target.style.boxShadow = '0 0 0 4px rgba(30,136,229,0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label style={labelStyle}>Teléfono / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--blue-mid)';
                    e.target.style.boxShadow = '0 0 0 4px rgba(30,136,229,0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                }}
              >
                <div>
                  <label style={labelStyle}>Servicio</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--blue-mid)';
                      e.target.style.boxShadow = '0 0 0 4px rgba(30,136,229,0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Seleccionar...</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Especialista</label>
                  <select
                    value={formData.specialist}
                    onChange={(e) => setFormData({ ...formData, specialist: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--blue-mid)';
                      e.target.style.boxShadow = '0 0 0 4px rgba(30,136,229,0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Seleccionar...</option>
                    {specialistOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Fecha preferida</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--blue-mid)';
                    e.target.style.boxShadow = '0 0 0 4px rgba(30,136,229,0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label style={labelStyle}>Mensaje adicional</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  style={{
                    ...inputStyle,
                    height: 'auto',
                    padding: '14px 16px',
                    resize: 'vertical',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--blue-mid)';
                    e.target.style.boxShadow = '0 0 0 4px rgba(30,136,229,0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(30,136,229,0.4)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  height: '56px',
                  background: 'var(--blue-mid)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '14px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-blue)',
                  marginTop: '4px',
                }}
              >
                Enviar Solicitud →
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
