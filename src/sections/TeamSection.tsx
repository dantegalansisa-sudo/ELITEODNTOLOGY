import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';
import DoctorCard from '../components/DoctorCard';

const team = [
  {
    name: 'Dra. Madelyn Hernández',
    role: 'CEO & Ortodoncia y Ortopedia Maxilar',
    specialty: 'Directora y especialista en ortodoncia y ortopedia maxilar',
    instagram: '@elitedentalcare.rd',
    image: '/images/dra-hernandez.jpg',
    placeholder: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80',
    badge: 'CEO & FUNDADORA',
  },
  {
    name: 'Dra. María Castillo',
    role: 'Odontóloga General',
    specialty: 'Evaluaciones, diagnósticos, profilaxis, extracciones y caries',
    instagram: '@mariaecastillo_',
    image: '/images/dra-maria.jpg',
    placeholder: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&q=80',
    badge: 'ODONTOLOGÍA GENERAL',
  },
  {
    name: 'Dra. Kiana Del Orbe',
    role: 'Especialista en Endodoncia',
    specialty: 'Tratamiento de conducto, conservación de piezas dentales',
    instagram: '@dra.kianadelorbe',
    image: '/images/dra-kiana.jpg',
    placeholder: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&q=80',
    badge: 'ENDODONCIA',
  },
  {
    name: 'Dr. Sandy Muñoz',
    role: 'Cirujano Implantólogo',
    specialty: 'Implantes dentales, cirugía oral e implantología avanzada',
    instagram: '',
    image: '/images/inplantalogo.jpeg',
    placeholder: '',
    badge: 'IMPLANTOLOGÍA',
  },
];

export default function TeamSection() {
  return (
    <section
      id="equipo"
      style={{
        background: 'var(--bg-section)',
        padding: '120px 0',
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <SectionLabel text="👩‍⚕️ NUESTRO EQUIPO" />
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
            Conoce a Nuestro
            <br />
            <span style={{ color: 'var(--blue-mid)' }}>Equipo de Especialistas</span>
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div
          className="team-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px',
          }}
        >
          {team.map((member, i) => (
            <DoctorCard key={member.name} {...member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
