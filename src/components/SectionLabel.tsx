import { motion } from 'framer-motion';

interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: '8px 20px',
        background: 'var(--cyan-light)',
        borderRadius: '50px',
        marginBottom: '20px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--blue-deep)',
        }}
      >
        {text}
      </span>
    </motion.div>
  );
}
