import { motion } from 'framer-motion';

interface DoctorCardProps {
  name: string;
  role: string;
  specialty: string;
  instagram: string;
  image: string;
  placeholder: string;
  badge: string;
  index: number;
}

export default function DoctorCard({
  name,
  role,
  specialty,
  instagram,
  image,
  placeholder,
  badge,
  index,
}: DoctorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      whileHover={{ y: -8, boxShadow: '0 8px 40px rgba(21,101,192,0.12)' }}
      style={{
        background: 'var(--bg-white)',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--border)',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s',
      }}
    >
      {/* Photo */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            aspectRatio: '3/4',
            overflow: 'hidden',
          }}
        >
          <img
            src={image}
            alt={name}
            onError={(e) => {
              (e.target as HTMLImageElement).src = placeholder;
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
              transition: 'transform 0.5s ease',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLImageElement).style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLImageElement).style.transform = 'scale(1)';
            }}
          />
        </div>

        {/* Badge */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'var(--blue-mid)',
            color: '#fff',
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            padding: '6px 14px',
            borderRadius: '50px',
          }}
        >
          {badge}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '24px' }}>
        <h3
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: '20px',
            color: 'var(--text-dark)',
            marginBottom: '4px',
          }}
        >
          {name}
        </h3>

        {/* Cyan line */}
        <div
          style={{
            width: '40px',
            height: '3px',
            background: 'var(--cyan)',
            borderRadius: '2px',
            marginBottom: '12px',
          }}
        />

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '13px',
            color: 'var(--blue-mid)',
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
            marginBottom: '8px',
          }}
        >
          {role}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize: '14px',
            color: 'var(--text-body)',
            lineHeight: 1.6,
            marginBottom: '12px',
          }}
        >
          {specialty}
        </p>

        <a
          href={`https://instagram.com/${instagram.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: '13px',
            color: 'var(--cyan)',
            textDecoration: 'none',
          }}
        >
          {instagram}
        </a>
      </div>
    </motion.div>
  );
}
