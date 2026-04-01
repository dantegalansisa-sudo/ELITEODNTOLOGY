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
      'Alineadores invisibles Invisalign',
      'Brackets metálicos y cerámicos',
      'Ortodoncia interceptiva',
      'Retenedores fijos y removibles',
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
      'Carillas de porcelana ultrafinas',
      'Blanqueamiento LED profesional',
      'Diseño de sonrisa digital',
      'Resinas estéticas de alta gama',
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
      'Microscopio operatorio de alta resolución',
      'Instrumentación rotatoria NiTi',
      'Retratamiento de conductos',
      'Apiceptomía y cirugía endodóntica',
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
      'Extracciones de terceros molares',
      'Cirugía de tejidos blandos',
      'Implantes dentales',
      'Biopsias y patología oral',
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
      'Coronas y puentes de porcelana',
      'Prótesis removibles de precisión',
      'Rehabilitación sobre implantes',
      'Reconstrucción dental completa',
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
      'Limpieza profunda (raspado y alisado)',
      'Cirugía periodontal regenerativa',
      'Tratamiento de gingivitis',
      'Mantenimiento periodontal',
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
      'Sellantes de fosas y fisuras',
      'Fluorización profesional',
      'Ortopedia funcional de los maxilares',
      'Manejo de conducta y adaptación',
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
];

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getServicesByCategory(category: Category): Service[] {
  if (category === 'Todos') return services;
  return services.filter((s) => s.category === category);
}
