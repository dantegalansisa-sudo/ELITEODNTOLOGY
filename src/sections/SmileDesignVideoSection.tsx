import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const videos = [
  {
    id: 1,
    src: '/images/video de diseno de sonrisa.mp4',
    name: 'Testimonio de Paciente',
    treatment: 'Diseño de Sonrisa Completo',
  },
  {
    id: 2,
    src: '/images/video de diseno de sonrisa1.mp4',
    name: 'Testimonio de Paciente',
    treatment: 'Diseño de Sonrisa Premium',
  },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function VideoCard({
  video,
  index,
}: {
  video: (typeof videos)[0];
  index: number;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15, ease }}
      style={{
        borderRadius: '24px',
        overflow: 'hidden',
        background: 'var(--bg-white)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'box-shadow 0.3s, border-color 0.3s',
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
      {/* Video container */}
      <div
        style={{
          position: 'relative',
          cursor: 'pointer',
          background: '#000',
        }}
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={video.src}
          playsInline
          preload="metadata"
          onEnded={() => setPlaying(false)}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            maxHeight: '600px',
            objectFit: 'cover',
          }}
        />

        {/* Play/Pause overlay */}
        <motion.div
          animate={{ opacity: playing ? 0 : 1 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: playing
              ? 'transparent'
              : 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            }}
          >
            {playing ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="var(--blue-mid)"
              >
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="var(--blue-mid)"
              >
                <polygon points="8,5 20,12 8,19" />
              </svg>
            )}
          </motion.div>
        </motion.div>

        {/* Badge */}
        <span
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: '11px',
            color: '#fff',
            background: 'linear-gradient(135deg, var(--blue-mid), var(--cyan))',
            padding: '6px 14px',
            borderRadius: '50px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          Video Testimonio
        </span>
      </div>

      {/* Info */}
      <div style={{ padding: '24px 28px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '12px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background:
                'linear-gradient(135deg, var(--blue-mid), var(--cyan))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '16px',
                color: 'var(--text-dark)',
              }}
            >
              {video.name}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'var(--blue-mid)',
                fontWeight: 600,
              }}
            >
              {video.treatment}
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          {Array.from({ length: 5 }).map((_, j) => (
            <span
              key={j}
              style={{
                color: 'var(--blue-mid)',
                fontSize: '14px',
              }}
            >
              ★
            </span>
          ))}
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              color: 'var(--text-muted)',
              marginLeft: '4px',
              fontWeight: 600,
            }}
          >
            Paciente verificado
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function SmileDesignVideoSection() {
  return (
    <section
      style={{
        background: 'var(--bg-white)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blob */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '-200px',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(0,188,212,0.04) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translateY(-50%)',
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
          <SectionLabel text="TESTIMONIOS EN VIDEO" />
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
            Diseño de Sonrisa
            <br />
            <span style={{ color: 'var(--blue-mid)' }}>
              Historias Reales
            </span>
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
            maxWidth: '560px',
            margin: '0 auto 60px',
            lineHeight: 1.7,
          }}
        >
          Escucha directamente de nuestros pacientes cómo el diseño de
          sonrisa transformó su confianza y su vida.
        </motion.p>

        {/* Video Grid — 2 columns */}
        <div
          className="video-testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {videos.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} />
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
            gap: '12px',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              background: 'var(--cyan-light)',
              borderRadius: '50px',
              marginBottom: '4px',
            }}
          >
            <span style={{ fontSize: '16px' }}>✨</span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--blue-deep)',
              }}
            >
              Transforma tu sonrisa con nuestro equipo de especialistas
            </span>
          </div>
          <motion.a
            href="https://wa.me/18299376644?text=Hola%20Elite%20Dental%20Care!%20Me%20interesa%20el%20dise%C3%B1o%20de%20sonrisa."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.04,
              boxShadow: '0 8px 32px rgba(30,136,229,0.35)',
            }}
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
            Quiero Mi Diseño de Sonrisa
            <span style={{ fontSize: '18px' }}>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
