export interface Service {
  id: string;
  num: string;
  name: string;
  subtitle: string;
  category: string;
  icon: string;
  description: string;
  items: string[];
  fullDescription: string[];
  benefits: string[];
  image?: string;
}

export const categories = [
  'Todos',
  'Estética',
  'Cirugía',
  'Prevención',
  'Especializada',
] as const;

export type Category = (typeof categories)[number];

export const services: Service[] = [
  {
    id: 'ortodoncia',
    num: '01',
    name: 'ORTODONCIA',
    subtitle: 'ALINEACIÓN DE PRECISIÓN',
    category: 'Especializada',
    icon: 'orthodontics',
    description:
      'Brackets y alineadores invisibles. Tecnología digital para planificar tu sonrisa antes de comenzar.',
    items: [
      'Alineadores Invisibles Invisalign',
      'Brackets Metálicos y Cerámicos',
      'Ortodoncia Interceptiva',
      'Retenedores Fijos y Removibles',
    ],
    fullDescription: [
      'En Elite Dental Care, nuestra especialidad en ortodoncia combina la tecnología más avanzada con un enfoque personalizado para cada paciente. Utilizamos sistemas de última generación que permiten planificar digitalmente el resultado final antes de iniciar el tratamiento.',
      'Nuestro equipo evalúa cada caso de forma integral, considerando no solo la alineación dental sino también la función masticatoria, la estética facial y la salud periodontal para lograr resultados óptimos y duraderos.',
    ],
    benefits: [
      'Sonrisa alineada y armoniosa',
      'Mejora de la mordida y función masticatoria',
      'Prevención de desgaste dental',
      'Mayor facilidad para la higiene oral',
    ],
  },
  {
    id: 'estetica-dental',
    num: '02',
    name: 'ESTÉTICA DENTAL',
    subtitle: 'ARTE EN TU SONRISA',
    category: 'Estética',
    icon: 'aesthetics',
    description:
      'Carillas de porcelana, blanqueamiento LED y diseño de sonrisa digital para transformar tu imagen.',
    items: [
      'Carillas de Porcelana Ultrafinas',
      'Blanqueamiento LED Profesional',
      'Diseño de Sonrisa Digital',
      'Resinas Estéticas de Alta Gama',
    ],
    fullDescription: [
      'La estética dental en Elite Dental Care va más allá de un simple procedimiento cosmético. Nuestro enfoque combina arte y ciencia para crear sonrisas naturales que realzan la belleza única de cada paciente.',
      'Utilizamos materiales de la más alta calidad y técnicas avanzadas de diseño digital que permiten visualizar el resultado antes del tratamiento, asegurando que cada detalle cumpla con las expectativas del paciente.',
    ],
    benefits: [
      'Sonrisa natural y radiante',
      'Aumento de confianza y autoestima',
      'Resultados inmediatos con blanqueamiento',
      'Durabilidad con materiales premium',
    ],
  },
  {
    id: 'endodoncia',
    num: '03',
    name: 'ENDODONCIA',
    subtitle: 'SALVANDO TU SONRISA',
    category: 'Especializada',
    icon: 'endodontics',
    description:
      'Tratamiento de conducto con microscopio y tecnología rotatoria. Salvamos piezas dentales con precisión milimétrica.',
    items: [
      'Microscopio Operatorio de Alta Resolución',
      'Instrumentación Rotatoria NiTi',
      'Retratamiento de Conductos',
      'Apiceptomía y Cirugía Endodóntica',
    ],
    fullDescription: [
      'La Dra. Kiana Del Orbe, nuestra especialista en endodoncia, utiliza equipos de última generación incluyendo microscopio operatorio que permite visualizar el interior del diente con una precisión extraordinaria.',
      'Nuestro objetivo es salvar cada pieza dental. Con técnicas mínimamente invasivas y anestesia avanzada, garantizamos procedimientos sin dolor y con tasas de éxito superiores al 95%.',
    ],
    benefits: [
      'Procedimiento sin dolor',
      'Conservación de la pieza dental natural',
      'Recuperación rápida',
      'Tasas de éxito superiores al 95%',
    ],
  },
  {
    id: 'cirugia-oral',
    num: '04',
    name: 'CIRUGÍA ORAL Y MAXILOFACIAL',
    subtitle: 'PRECISIÓN QUIRÚRGICA',
    category: 'Cirugía',
    icon: 'surgery',
    description:
      'Procedimientos quirúrgicos orales y maxilofaciales con técnicas mínimamente invasivas y recuperación acelerada.',
    items: [
      'Extracciones de Terceros Molares',
      'Cirugía de Tejidos Blandos',
      'Implantes Dentales',
      'Biopsias y Patología Oral',
    ],
    fullDescription: [
      'Nuestra área de cirugía oral y maxilofacial está equipada con la tecnología más avanzada para realizar procedimientos seguros y efectivos. Cada intervención se planifica meticulosamente usando imágenes diagnósticas de alta resolución.',
      'Priorizamos técnicas mínimamente invasivas que reducen el tiempo de recuperación y minimizan las molestias postoperatorias, brindando una experiencia quirúrgica confortable para nuestros pacientes.',
    ],
    benefits: [
      'Técnicas mínimamente invasivas',
      'Planificación digital 3D',
      'Recuperación acelerada',
      'Seguimiento postoperatorio personalizado',
    ],
  },
  {
    id: 'rehabilitacion-oral',
    num: '05',
    name: 'REHABILITACIÓN ORAL',
    subtitle: 'RESTAURANDO FUNCIONALIDAD',
    category: 'Especializada',
    icon: 'rehabilitation',
    description:
      'Restauración integral de la función masticatoria y estética con prótesis fijas, removibles y sobre implantes.',
    items: [
      'Coronas y Puentes de Porcelana',
      'Prótesis Removibles de Precisión',
      'Rehabilitación sobre Implantes',
      'Reconstrucción Dental Completa',
    ],
    fullDescription: [
      'La rehabilitación oral en Elite Dental Care aborda de manera integral la restauración de la función y estética dental. Nuestro enfoque multidisciplinario permite crear planes de tratamiento completos que devuelven la funcionalidad y belleza a la sonrisa.',
      'Utilizamos materiales biocompatibles de última generación y técnicas CAD/CAM para fabricar restauraciones con ajuste perfecto y apariencia natural.',
    ],
    benefits: [
      'Recuperación de la función masticatoria',
      'Materiales biocompatibles premium',
      'Estética natural indistinguible',
      'Planificación digital personalizada',
    ],
  },
  {
    id: 'periodoncia',
    num: '06',
    name: 'PERIODONCIA',
    subtitle: 'SALUD DE TUS ENCÍAS',
    category: 'Prevención',
    icon: 'periodontics',
    description:
      'Tratamiento especializado de encías y tejidos de soporte dental. Prevención y control de enfermedad periodontal.',
    items: [
      'Limpieza Profunda (Raspado y Alisado)',
      'Cirugía Periodontal Regenerativa',
      'Tratamiento de Gingivitis',
      'Mantenimiento Periodontal',
    ],
    fullDescription: [
      'La periodoncia es fundamental para mantener la salud de las encías y los tejidos que soportan los dientes. En Elite Dental Care, realizamos diagnósticos detallados del estado periodontal para establecer tratamientos efectivos y personalizados.',
      'Nuestros protocolos de tratamiento incluyen técnicas regenerativas avanzadas que permiten recuperar tejido perdido y estabilizar la salud periodontal a largo plazo.',
    ],
    benefits: [
      'Encías saludables y firmes',
      'Prevención de pérdida dental',
      'Control de la enfermedad periodontal',
      'Protocolo de mantenimiento preventivo',
    ],
  },
  {
    id: 'odontopediatria',
    num: '07',
    name: 'ODONTOPEDIATRÍA Y ORTOPEDIA MAXILOFACIAL',
    subtitle: 'CUIDADO INFANTIL ESPECIALIZADO',
    category: 'Prevención',
    icon: 'pediatrics',
    description:
      'Atención dental especializada para niños en un ambiente amigable. Ortopedia maxilofacial para guiar el crecimiento.',
    items: [
      'Sellantes de Fosas y Fisuras',
      'Fluorización Profesional',
      'Ortopedia Funcional de los Maxilares',
      'Manejo de Conducta y Adaptación',
    ],
    fullDescription: [
      'Nuestro servicio de odontopediatría está diseñado para que los más pequeños tengan una experiencia dental positiva desde su primera visita. Creamos un ambiente amigable y utilizamos técnicas de manejo de conducta que generan confianza en los niños.',
      'La ortopedia maxilofacial intercepta problemas de crecimiento de los maxilares en edades tempranas, aprovechando el desarrollo natural del niño para corregir alteraciones que de otra forma requerirían tratamientos más complejos en la edad adulta.',
    ],
    benefits: [
      'Experiencia dental positiva para niños',
      'Prevención temprana de problemas dentales',
      'Corrección del crecimiento maxilar',
      'Hábitos de higiene desde la infancia',
    ],
  },
  {
    id: 'cirugia-tercer-molar',
    num: '08',
    name: 'CIRUGÍA DEL TERCER MOLAR',
    subtitle: 'EXTRACCIÓN SEGURA Y SIN DOLOR',
    category: 'Cirugía',
    icon: 'thirdmolar',
    image: '/images/molar.jpeg',
    description:
      'Extracción de muelas del juicio con técnicas mínimamente invasivas. Procedimiento seguro, rápido y con recuperación acelerada.',
    items: [
      'Extracción Simple de Terceros Molares',
      'Extracción Quirúrgica de Muelas Impactadas',
      'Evaluación Radiográfica Preoperatoria',
      'Protocolo de Recuperación Personalizado',
    ],
    fullDescription: [
      'La cirugía del tercer molar es uno de los procedimientos más comunes en odontología. En Elite Dental Care, nuestro equipo especializado realiza extracciones de muelas del juicio con la máxima seguridad, utilizando técnicas mínimamente invasivas que reducen significativamente el dolor y el tiempo de recuperación.',
      'Antes de cada procedimiento, realizamos una evaluación radiográfica completa para planificar la extracción de manera precisa. Nuestro protocolo incluye anestesia avanzada, instrumentación de última generación y un plan de cuidados postoperatorios detallado para garantizar una recuperación rápida y confortable.',
    ],
    benefits: [
      'Procedimiento rápido y sin dolor',
      'Técnicas mínimamente invasivas',
      'Recuperación acelerada con protocolo guiado',
      'Prevención de complicaciones futuras',
    ],
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getServicesByCategory(category: Category): Service[] {
  if (category === 'Todos') return services;
  return services.filter((s) => s.category === category);
}
