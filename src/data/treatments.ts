export interface Treatment {
  slug: string;
  name: string;
  serviceId: string;
  serviceName: string;
  description: string[];
  keyPoints: string[];
}

export const treatments: Treatment[] = [
  // ═══ ORTODONCIA ═══
  {
    slug: 'alineadores-invisibles',
    name: 'Alineadores Invisibles Invisalign',
    serviceId: 'ortodoncia',
    serviceName: 'ORTODONCIA',
    description: [
      'Los alineadores invisibles son la alternativa moderna y estética a los brackets tradicionales. Fabricados a medida con plástico transparente de grado médico, estos alineadores son prácticamente invisibles y se pueden retirar para comer y cepillarse los dientes.',
      'En Elite Dental Care utilizamos tecnología de escaneo 3D para diseñar tu plan de tratamiento digital, permitiéndote visualizar el resultado final antes de comenzar. Cada juego de alineadores se cambia cada 1-2 semanas, moviendo tus dientes gradualmente hacia la posición ideal.',
    ],
    keyPoints: [
      'Prácticamente invisibles al sonreír',
      'Removibles para comer y cepillarse',
      'Menos visitas al consultorio',
      'Resultados predecibles con planificación 3D',
      'Mayor comodidad sin alambres ni brackets',
      'Ideal para adultos y adolescentes',
    ],
  },
  {
    slug: 'brackets-metalicos-ceramicos',
    name: 'Brackets Metálicos y Cerámicos',
    serviceId: 'ortodoncia',
    serviceName: 'ORTODONCIA',
    description: [
      'Los brackets son el sistema de ortodoncia más probado y efectivo para corregir todo tipo de maloclusiones. En Elite Dental Care ofrecemos brackets metálicos de última generación y brackets cerámicos que se mimetizan con el color del diente.',
      'Nuestros brackets de autoligado reducen la fricción y permiten movimientos dentales más eficientes, lo que puede acortar el tiempo de tratamiento. La Dra. Hernández personaliza cada caso para obtener los mejores resultados posibles.',
    ],
    keyPoints: [
      'Eficaces para todo tipo de casos',
      'Brackets cerámicos estéticos del color del diente',
      'Sistema de autoligado para mayor eficiencia',
      'Control preciso del movimiento dental',
      'Opciones para todos los presupuestos',
      'Resultados duraderos y estables',
    ],
  },
  {
    slug: 'ortodoncia-interceptiva',
    name: 'Ortodoncia Interceptiva',
    serviceId: 'ortodoncia',
    serviceName: 'ORTODONCIA',
    description: [
      'La ortodoncia interceptiva es un tratamiento temprano que se realiza en niños entre 6 y 10 años para corregir problemas de desarrollo dental y óseo antes de que se agraven. Intervenir a tiempo puede evitar tratamientos más complejos en el futuro.',
      'Este enfoque aprovecha el crecimiento natural del niño para guiar el desarrollo correcto de los maxilares y crear espacio para los dientes permanentes. Los aparatos utilizados son cómodos y el tratamiento suele ser más corto que la ortodoncia convencional.',
    ],
    keyPoints: [
      'Previene problemas mayores en la adolescencia',
      'Aprovecha el crecimiento natural del niño',
      'Tratamientos más cortos y sencillos',
      'Corrige hábitos como chuparse el dedo',
      'Guía la erupción de dientes permanentes',
      'Mejora la autoestima del niño desde temprana edad',
    ],
  },
  {
    slug: 'retenedores-fijos-removibles',
    name: 'Retenedores Fijos y Removibles',
    serviceId: 'ortodoncia',
    serviceName: 'ORTODONCIA',
    description: [
      'Los retenedores son fundamentales después de cualquier tratamiento de ortodoncia para mantener los dientes en su nueva posición. Sin retención adecuada, los dientes tienden a moverse de vuelta a su posición original.',
      'Ofrecemos retenedores fijos (alambre cementado detrás de los dientes) y removibles (tipo Essix o Hawley). La Dra. Hernández te recomendará la mejor opción según tu caso para asegurar que tu sonrisa perfecta se mantenga para siempre.',
    ],
    keyPoints: [
      'Mantienen los resultados de la ortodoncia',
      'Opciones fijas y removibles disponibles',
      'Retenedores transparentes prácticamente invisibles',
      'Cómodos y fáciles de usar',
      'Control periódico para ajustes',
      'Inversión pequeña para proteger tu tratamiento',
    ],
  },

  // ═══ ESTÉTICA DENTAL ═══
  {
    slug: 'carillas-porcelana',
    name: 'Carillas de Porcelana Ultrafinas',
    serviceId: 'estetica-dental',
    serviceName: 'ESTÉTICA DENTAL',
    description: [
      'Las carillas de porcelana son láminas ultrafinas que se adhieren a la superficie frontal de los dientes para transformar completamente la apariencia de tu sonrisa. Son la solución ideal para dientes manchados, desalineados, con espacios o con formas irregulares.',
      'En Elite Dental Care utilizamos porcelana de alta estética que imita perfectamente el brillo y translucidez del esmalte natural. El procedimiento requiere una preparación mínima del diente y los resultados son inmediatos y duraderos, con una vida útil de 10 a 15 años.',
    ],
    keyPoints: [
      'Apariencia completamente natural',
      'Preparación mínima del diente',
      'Resistentes a las manchas',
      'Duración de 10-15 años',
      'Corrigen color, forma y alineación',
      'Resultado inmediato y transformador',
    ],
  },
  {
    slug: 'blanqueamiento-led',
    name: 'Blanqueamiento LED Profesional',
    serviceId: 'estetica-dental',
    serviceName: 'ESTÉTICA DENTAL',
    description: [
      'Nuestro blanqueamiento LED profesional utiliza tecnología de luz avanzada combinada con geles de peróxido de alta concentración para aclarar tus dientes varios tonos en una sola sesión de aproximadamente una hora.',
      'A diferencia de los productos de venta libre, el blanqueamiento profesional es supervisado por nuestras especialistas, lo que garantiza resultados superiores y seguros. Incluimos una evaluación previa para asegurar que tus dientes y encías estén saludables antes del procedimiento.',
    ],
    keyPoints: [
      'Resultados visibles en una sola sesión',
      'Hasta 8 tonos más blancos',
      'Procedimiento seguro y supervisado',
      'Sin daño al esmalte dental',
      'Sensibilidad mínima y temporal',
      'Incluye kit de mantenimiento en casa',
    ],
  },
  {
    slug: 'diseno-sonrisa-digital',
    name: 'Diseño de Sonrisa Digital',
    serviceId: 'estetica-dental',
    serviceName: 'ESTÉTICA DENTAL',
    description: [
      'El diseño de sonrisa digital es un proceso integral que utiliza fotografía digital, software especializado y mockups para planificar y visualizar tu nueva sonrisa antes de iniciar cualquier procedimiento. Es como ver el "antes y después" antes de comenzar.',
      'Nuestro equipo analiza las proporciones faciales, la línea de la sonrisa, el color y la forma ideal de cada diente para crear un diseño personalizado. Puede combinar diferentes tratamientos como carillas, blanqueamiento y coronas para lograr el resultado perfecto.',
    ],
    keyPoints: [
      'Visualiza tu sonrisa antes del tratamiento',
      'Diseño personalizado según tu rostro',
      'Combina múltiples tratamientos estéticos',
      'Resultados predecibles y planificados',
      'Participas activamente en el diseño',
      'Tecnología de última generación',
    ],
  },
  {
    slug: 'resinas-esteticas',
    name: 'Resinas Estéticas de Alta Gama',
    serviceId: 'estetica-dental',
    serviceName: 'ESTÉTICA DENTAL',
    description: [
      'Las resinas estéticas son restauraciones del color del diente que permiten reparar caries, fracturas, desgastes y mejorar la forma de los dientes de manera conservadora. Utilizamos resinas de última generación que ofrecen excelente estética y durabilidad.',
      'Este tratamiento es ideal para restauraciones pequeñas y medianas donde se busca conservar la mayor cantidad de estructura dental sana. El procedimiento se realiza en una sola cita y el resultado es inmediato.',
    ],
    keyPoints: [
      'Restauraciones del color natural del diente',
      'Procedimiento en una sola cita',
      'Conserva la estructura dental sana',
      'Ideal para caries y fracturas pequeñas',
      'Materiales de alta durabilidad',
      'Resultado estético inmediato',
    ],
  },

  // ═══ ENDODONCIA ═══
  {
    slug: 'microscopio-operatorio',
    name: 'Microscopio Operatorio de Alta Resolución',
    serviceId: 'endodoncia',
    serviceName: 'ENDODONCIA',
    description: [
      'El microscopio operatorio dental permite a la Dra. Kiana Del Orbe visualizar el interior del diente con aumentos de hasta 25x, revelando detalles anatómicos imposibles de ver a simple vista. Esto aumenta significativamente la precisión y el éxito del tratamiento.',
      'Con esta tecnología podemos localizar conductos calcificados, identificar fisuras y fracturas, y remover tejido infectado con exactitud milimétrica, preservando la mayor cantidad de estructura dental sana posible.',
    ],
    keyPoints: [
      'Aumentos de hasta 25x para máxima precisión',
      'Mayor tasa de éxito en tratamientos',
      'Localización de conductos difíciles',
      'Diagnóstico preciso de fracturas',
      'Procedimientos más conservadores',
      'Tecnología de vanguardia en RD',
    ],
  },
  {
    slug: 'instrumentacion-rotatoria-niti',
    name: 'Instrumentación Rotatoria NiTi',
    serviceId: 'endodoncia',
    serviceName: 'ENDODONCIA',
    description: [
      'La instrumentación rotatoria con limas de Níquel-Titanio (NiTi) es el estándar de oro moderno para la preparación de conductos radiculares. Estas limas flexibles se adaptan a la anatomía curva de los conductos, permitiendo una limpieza más eficiente y segura.',
      'En comparación con la instrumentación manual tradicional, el sistema rotatorio NiTi reduce significativamente el tiempo de tratamiento, mejora la conformación del conducto y disminuye el riesgo de complicaciones como fracturas de instrumentos.',
    ],
    keyPoints: [
      'Tratamiento más rápido y eficiente',
      'Limas flexibles que siguen la anatomía del conducto',
      'Menor riesgo de complicaciones',
      'Limpieza más profunda y uniforme',
      'Mayor comodidad para el paciente',
      'Mejor pronóstico a largo plazo',
    ],
  },
  {
    slug: 'retratamiento-conductos',
    name: 'Retratamiento de Conductos',
    serviceId: 'endodoncia',
    serviceName: 'ENDODONCIA',
    description: [
      'El retratamiento endodóntico se realiza cuando un tratamiento de conducto previo no ha sido exitoso o ha desarrollado una nueva infección. Consiste en remover el material de obturación anterior, limpiar nuevamente los conductos y sellarlos correctamente.',
      'Gracias al microscopio operatorio y la instrumentación avanzada, la Dra. Kiana puede abordar casos complejos de retratamiento con altas tasas de éxito, salvando piezas dentales que de otra forma tendrían que ser extraídas.',
    ],
    keyPoints: [
      'Salva dientes con tratamientos previos fallidos',
      'Remoción segura del material anterior',
      'Desinfección completa del sistema de conductos',
      'Uso de microscopio para mayor precisión',
      'Alternativa a la extracción dental',
      'Alta tasa de éxito con tecnología moderna',
    ],
  },
  {
    slug: 'apiceptomia-cirugia-endodontica',
    name: 'Apiceptomía y Cirugía Endodóntica',
    serviceId: 'endodoncia',
    serviceName: 'ENDODONCIA',
    description: [
      'La apiceptomía es un procedimiento quirúrgico menor que consiste en remover el extremo de la raíz del diente (ápice) junto con el tejido infectado circundante. Se realiza cuando el tratamiento de conducto convencional o el retratamiento no son suficientes.',
      'Este procedimiento se realiza bajo anestesia local, es mínimamente invasivo y tiene un tiempo de recuperación corto. Se utiliza microscopio quirúrgico para garantizar la máxima precisión y materiales biocompatibles de última generación para el sellado.',
    ],
    keyPoints: [
      'Última opción para salvar el diente',
      'Procedimiento mínimamente invasivo',
      'Recuperación rápida (3-5 días)',
      'Realizada con microscopio quirúrgico',
      'Materiales biocompatibles de sellado',
      'Anestesia local, sin hospitalización',
    ],
  },

  // ═══ CIRUGÍA ORAL Y MAXILOFACIAL ═══
  {
    slug: 'extracciones-terceros-molares',
    name: 'Extracciones de Terceros Molares',
    serviceId: 'cirugia-oral',
    serviceName: 'CIRUGÍA ORAL Y MAXILOFACIAL',
    description: [
      'Las muelas del juicio o terceros molares frecuentemente necesitan ser extraídas debido a falta de espacio, posición incorrecta (impactación) o por causar dolor e infecciones recurrentes. La extracción oportuna previene complicaciones mayores.',
      'En Elite Dental Care realizamos una evaluación radiográfica completa antes de cada extracción para planificar el procedimiento con precisión. Utilizamos técnicas quirúrgicas avanzadas y protocolos de anestesia que garantizan un procedimiento sin dolor.',
    ],
    keyPoints: [
      'Evaluación radiográfica previa completa',
      'Procedimiento sin dolor con anestesia avanzada',
      'Técnicas que minimizan la inflamación',
      'Protocolo de recuperación personalizado',
      'Prevención de infecciones y complicaciones',
      'Seguimiento postoperatorio incluido',
    ],
  },
  {
    slug: 'cirugia-tejidos-blandos',
    name: 'Cirugía de Tejidos Blandos',
    serviceId: 'cirugia-oral',
    serviceName: 'CIRUGÍA ORAL Y MAXILOFACIAL',
    description: [
      'La cirugía de tejidos blandos abarca diversos procedimientos en encías, mucosa oral, lengua y labios. Incluye frenectomías, remoción de fibromas, corrección de frenillos cortos y tratamiento de lesiones de la mucosa oral.',
      'Estos procedimientos se realizan con técnicas mínimamente invasivas que reducen el sangrado, la inflamación y el tiempo de recuperación. Cada caso se evalúa individualmente para determinar el enfoque quirúrgico más apropiado.',
    ],
    keyPoints: [
      'Frenectomías labiales y linguales',
      'Remoción de fibromas y lesiones',
      'Técnicas mínimamente invasivas',
      'Recuperación rápida',
      'Anestesia local confortable',
      'Evaluación histopatológica cuando es necesario',
    ],
  },
  {
    slug: 'implantes-dentales',
    name: 'Implantes Dentales',
    serviceId: 'cirugia-oral',
    serviceName: 'CIRUGÍA ORAL Y MAXILOFACIAL',
    description: [
      'Los implantes dentales son la solución más avanzada y duradera para reemplazar dientes perdidos. Consisten en un tornillo de titanio que se coloca en el hueso maxilar y funciona como la raíz de un diente natural, sobre el cual se coloca una corona protésica.',
      'El Dr. Sandy Muñoz, nuestro cirujano implantólogo, utiliza tecnología de planificación 3D para colocar los implantes con máxima precisión. Los implantes dentales permiten recuperar la función masticatoria completa y una estética indistinguible de los dientes naturales.',
    ],
    keyPoints: [
      'Solución definitiva para dientes perdidos',
      'Aspecto y función de un diente natural',
      'Durabilidad de por vida con cuidado adecuado',
      'Preserva el hueso maxilar',
      'No afecta los dientes adyacentes',
      'Planificación 3D para máxima precisión',
    ],
  },
  {
    slug: 'biopsias-patologia-oral',
    name: 'Biopsias y Patología Oral',
    serviceId: 'cirugia-oral',
    serviceName: 'CIRUGÍA ORAL Y MAXILOFACIAL',
    description: [
      'Las biopsias orales son procedimientos diagnósticos esenciales que permiten analizar tejidos de la cavidad oral para identificar o descartar lesiones precancerosas, tumores benignos, infecciones y otras patologías.',
      'El procedimiento es rápido, se realiza bajo anestesia local y la muestra de tejido se envía a un laboratorio especializado para su análisis histopatológico. Un diagnóstico temprano es fundamental para el tratamiento exitoso de cualquier condición.',
    ],
    keyPoints: [
      'Diagnóstico temprano de lesiones orales',
      'Procedimiento rápido y ambulatorio',
      'Análisis histopatológico profesional',
      'Fundamental para detección precoz',
      'Mínimas molestias postoperatorias',
      'Resultados en pocos días',
    ],
  },

  // ═══ REHABILITACIÓN ORAL ═══
  {
    slug: 'coronas-puentes-porcelana',
    name: 'Coronas y Puentes de Porcelana',
    serviceId: 'rehabilitacion-oral',
    serviceName: 'REHABILITACIÓN ORAL',
    description: [
      'Las coronas de porcelana son restauraciones que cubren completamente un diente dañado, devolviéndole su forma, tamaño, fuerza y apariencia natural. Los puentes permiten reemplazar uno o más dientes perdidos apoyándose en los dientes adyacentes.',
      'Utilizamos porcelana de alta estética y sistemas CAD/CAM para fabricar restauraciones con ajuste perfecto. Nuestras coronas y puentes son prácticamente indistinguibles de los dientes naturales en color, forma y translucidez.',
    ],
    keyPoints: [
      'Restauración completa del diente dañado',
      'Porcelana de alta estética y resistencia',
      'Tecnología CAD/CAM para ajuste perfecto',
      'Aspecto natural indistinguible',
      'Duración de 10-15 años con buen cuidado',
      'Protege y fortalece el diente',
    ],
  },
  {
    slug: 'protesis-removibles',
    name: 'Prótesis Removibles de Precisión',
    serviceId: 'rehabilitacion-oral',
    serviceName: 'REHABILITACIÓN ORAL',
    description: [
      'Las prótesis removibles modernas son mucho más cómodas, estéticas y funcionales que las de generaciones anteriores. Fabricadas con materiales flexibles y biocompatibles, se adaptan perfectamente a la anatomía de cada paciente.',
      'Ofrecemos prótesis parciales (para reemplazar algunos dientes) y completas (para reemplazar todos los dientes). Cada prótesis se diseña individualmente, seleccionando el tamaño, forma y color de los dientes para lograr un resultado natural y armonioso.',
    ],
    keyPoints: [
      'Materiales flexibles y cómodos',
      'Diseño personalizado para cada paciente',
      'Aspecto natural y estético',
      'Fáciles de colocar y retirar',
      'Restauran la función masticatoria',
      'Opciones parciales y completas',
    ],
  },
  {
    slug: 'rehabilitacion-sobre-implantes',
    name: 'Rehabilitación sobre Implantes',
    serviceId: 'rehabilitacion-oral',
    serviceName: 'REHABILITACIÓN ORAL',
    description: [
      'La rehabilitación sobre implantes combina la estabilidad de los implantes dentales con prótesis fijas o removibles para restaurar arcadas completas o segmentos amplios de la dentadura. Es la opción más avanzada para pacientes con pérdida dental severa.',
      'Trabajamos en conjunto con el Dr. Sandy Muñoz para planificar cada caso de manera integral, desde la colocación estratégica de los implantes hasta el diseño y fabricación de la prótesis definitiva, logrando resultados funcionales y estéticos excepcionales.',
    ],
    keyPoints: [
      'Máxima estabilidad y retención',
      'No se mueve al comer ni hablar',
      'Preserva el hueso maxilar',
      'Planificación interdisciplinaria completa',
      'Opciones fijas y removibles',
      'Mejora drástica de la calidad de vida',
    ],
  },
  {
    slug: 'reconstruccion-dental-completa',
    name: 'Reconstrucción Dental Completa',
    serviceId: 'rehabilitacion-oral',
    serviceName: 'REHABILITACIÓN ORAL',
    description: [
      'La reconstrucción dental completa es un plan de tratamiento integral que aborda todos los aspectos de la salud y estética dental del paciente. Está indicada para personas con múltiples problemas dentales como desgaste severo, dientes fracturados y pérdida dental.',
      'Este tratamiento puede combinar coronas, puentes, implantes, carillas y otros procedimientos restauradores para devolver la función masticatoria completa y una sonrisa armoniosa. Cada plan se diseña de manera personalizada según las necesidades del paciente.',
    ],
    keyPoints: [
      'Plan de tratamiento integral y personalizado',
      'Combina múltiples especialidades',
      'Restaura función y estética completamente',
      'Mejora la calidad de vida del paciente',
      'Seguimiento a largo plazo',
      'Resultados transformadores',
    ],
  },

  // ═══ PERIODONCIA ═══
  {
    slug: 'limpieza-profunda-raspado',
    name: 'Limpieza Profunda (Raspado y Alisado)',
    serviceId: 'periodoncia',
    serviceName: 'PERIODONCIA',
    description: [
      'El raspado y alisado radicular es un tratamiento no quirúrgico que consiste en la remoción de placa bacteriana y cálculo (sarro) por debajo de la línea de la encía. Es el tratamiento principal para la enfermedad periodontal en sus etapas iniciales y moderadas.',
      'Se realiza bajo anestesia local para mayor comodidad y utiliza instrumentos ultrasónicos y manuales especializados para limpiar profundamente las superficies de las raíces dentales, promoviendo la curación y readherencia de las encías al diente.',
    ],
    keyPoints: [
      'Tratamiento principal para enfermedad periodontal',
      'Remoción de sarro subgingival',
      'Procedimiento bajo anestesia local',
      'Instrumentos ultrasónicos especializados',
      'Promueve la curación de las encías',
      'Previene la progresión de la enfermedad',
    ],
  },
  {
    slug: 'cirugia-periodontal-regenerativa',
    name: 'Cirugía Periodontal Regenerativa',
    serviceId: 'periodoncia',
    serviceName: 'PERIODONCIA',
    description: [
      'La cirugía periodontal regenerativa es un procedimiento avanzado que busca regenerar el hueso y los tejidos de soporte perdidos por la enfermedad periodontal. Utiliza membranas biológicas e injertos óseos para estimular el crecimiento de nuevo tejido.',
      'Este tratamiento está indicado cuando la enfermedad periodontal ha causado pérdida ósea significativa y el raspado por sí solo no es suficiente. Los resultados permiten estabilizar dientes que de otra forma tendrían que ser extraídos.',
    ],
    keyPoints: [
      'Regenera hueso y tejido perdido',
      'Utiliza biomateriales de última generación',
      'Salva dientes con pronóstico comprometido',
      'Procedimiento quirúrgico ambulatorio',
      'Resultados comprobados científicamente',
      'Mejora el soporte dental a largo plazo',
    ],
  },
  {
    slug: 'tratamiento-gingivitis',
    name: 'Tratamiento de Gingivitis',
    serviceId: 'periodoncia',
    serviceName: 'PERIODONCIA',
    description: [
      'La gingivitis es la inflamación de las encías causada por la acumulación de placa bacteriana. Es la etapa inicial de la enfermedad periodontal y es completamente reversible con el tratamiento adecuado. Los síntomas incluyen encías rojas, inflamadas y que sangran al cepillarse.',
      'Nuestro tratamiento incluye una limpieza profesional profunda, instrucciones personalizadas de higiene oral y seguimiento para asegurar la recuperación completa. Detectar y tratar la gingivitis a tiempo previene su progresión a periodontitis, una forma más severa de la enfermedad.',
    ],
    keyPoints: [
      'Condición completamente reversible',
      'Limpieza profesional especializada',
      'Instrucciones personalizadas de higiene',
      'Previene la periodontitis',
      'Control y seguimiento periódico',
      'Mejora visible en pocas semanas',
    ],
  },
  {
    slug: 'mantenimiento-periodontal',
    name: 'Mantenimiento Periodontal',
    serviceId: 'periodoncia',
    serviceName: 'PERIODONCIA',
    description: [
      'El mantenimiento periodontal es un programa de visitas regulares diseñado para pacientes que han sido tratados por enfermedad periodontal. Su objetivo es prevenir la recurrencia de la enfermedad y mantener la salud de las encías a largo plazo.',
      'Las citas de mantenimiento incluyen evaluación del estado periodontal, limpieza profesional subgingival, actualización de técnicas de higiene y monitoreo de cualquier cambio. La frecuencia típica es cada 3-4 meses, según la gravedad del caso.',
    ],
    keyPoints: [
      'Previene la recurrencia de la enfermedad',
      'Visitas cada 3-4 meses',
      'Limpieza profesional especializada',
      'Monitoreo continuo del estado periodontal',
      'Actualización de técnicas de higiene',
      'Clave para la salud a largo plazo',
    ],
  },

  // ═══ ODONTOPEDIATRÍA ═══
  {
    slug: 'sellantes-fosas-fisuras',
    name: 'Sellantes de Fosas y Fisuras',
    serviceId: 'odontopediatria',
    serviceName: 'ODONTOPEDIATRÍA Y ORTOPEDIA MAXILOFACIAL',
    description: [
      'Los sellantes dentales son una capa protectora de resina que se aplica en las superficies masticatorias de las muelas, donde se acumulan más bacterias y restos de alimentos. Son una de las medidas preventivas más efectivas contra las caries en niños.',
      'El procedimiento es rápido, indoloro y no requiere anestesia. Se aplica en pocos minutos y puede proteger los dientes hasta por 10 años. Es especialmente recomendado para los primeros molares permanentes que erupcionan alrededor de los 6 años.',
    ],
    keyPoints: [
      'Protección efectiva contra caries',
      'Procedimiento rápido e indoloro',
      'No requiere anestesia',
      'Protección hasta por 10 años',
      'Ideal para primeros molares permanentes',
      'Recomendado para niños de 6 años en adelante',
    ],
  },
  {
    slug: 'fluorizacion-profesional',
    name: 'Fluorización Profesional',
    serviceId: 'odontopediatria',
    serviceName: 'ODONTOPEDIATRÍA Y ORTOPEDIA MAXILOFACIAL',
    description: [
      'La fluorización profesional es la aplicación tópica de flúor en alta concentración directamente sobre los dientes. El flúor fortalece el esmalte dental, lo hace más resistente a los ácidos de las bacterias y puede incluso revertir caries incipientes.',
      'Se recomienda realizar fluorización profesional cada 6 meses en niños con riesgo moderado a alto de caries. El procedimiento es simple, toma solo unos minutos y es completamente seguro cuando es aplicado por un profesional.',
    ],
    keyPoints: [
      'Fortalece el esmalte dental',
      'Previene y puede revertir caries iniciales',
      'Procedimiento rápido y seguro',
      'Recomendado cada 6 meses',
      'Especialmente importante en niños',
      'Complemento ideal de la higiene diaria',
    ],
  },
  {
    slug: 'ortopedia-funcional-maxilares',
    name: 'Ortopedia Funcional de los Maxilares',
    serviceId: 'odontopediatria',
    serviceName: 'ODONTOPEDIATRÍA Y ORTOPEDIA MAXILOFACIAL',
    description: [
      'La ortopedia funcional de los maxilares utiliza aparatos removibles y funcionales para guiar el crecimiento y desarrollo de los huesos maxilares en niños y preadolescentes. Es diferente a la ortodoncia, ya que actúa sobre el hueso, no solo sobre los dientes.',
      'Estos aparatos aprovechan las fuerzas musculares naturales de la cara para estimular o redirigir el crecimiento óseo. El tratamiento temprano puede corregir problemas de mordida, asimetrías faciales y crear espacio para los dientes permanentes.',
    ],
    keyPoints: [
      'Guía el crecimiento de los maxilares',
      'Aparatos cómodos y removibles',
      'Aprovecha el crecimiento natural del niño',
      'Corrige problemas de mordida tempranos',
      'Puede evitar cirugías futuras',
      'Edad ideal: 6-12 años',
    ],
  },
  {
    slug: 'manejo-conducta-adaptacion',
    name: 'Manejo de Conducta y Adaptación',
    serviceId: 'odontopediatria',
    serviceName: 'ODONTOPEDIATRÍA Y ORTOPEDIA MAXILOFACIAL',
    description: [
      'El manejo de conducta es un conjunto de técnicas especializadas que utilizamos para crear un ambiente positivo y de confianza para los niños durante su visita dental. El objetivo es que cada niño desarrolle una actitud positiva hacia el cuidado dental desde temprana edad.',
      'Nuestro equipo está capacitado en técnicas como el "decir-mostrar-hacer", refuerzo positivo y desensibilización gradual. Cada niño recibe un enfoque personalizado según su edad, temperamento y nivel de ansiedad.',
    ],
    keyPoints: [
      'Técnicas especializadas para niños',
      'Ambiente amigable y de confianza',
      'Enfoque personalizado según cada niño',
      'Previene el miedo al dentista',
      'Construye hábitos positivos de por vida',
      'Equipo capacitado en odontopediatría',
    ],
  },

  // ═══ CIRUGÍA DEL TERCER MOLAR ═══
  {
    slug: 'extraccion-simple-terceros-molares',
    name: 'Extracción Simple de Terceros Molares',
    serviceId: 'cirugia-tercer-molar',
    serviceName: 'CIRUGÍA DEL TERCER MOLAR',
    description: [
      'La extracción simple se realiza cuando la muela del juicio ha erupcionado correctamente y tiene acceso directo. El procedimiento es relativamente rápido y la recuperación suele ser más corta comparada con una extracción quirúrgica.',
      'Bajo anestesia local, el diente se afloja con instrumentos especializados y se retira. El procedimiento completo suele tomar entre 20-30 minutos y la mayoría de los pacientes pueden retomar sus actividades normales en 2-3 días.',
    ],
    keyPoints: [
      'Procedimiento rápido (20-30 minutos)',
      'Recuperación en 2-3 días',
      'Anestesia local confortable',
      'Mínima inflamación postoperatoria',
      'Instrucciones claras de cuidado',
      'Seguimiento postoperatorio incluido',
    ],
  },
  {
    slug: 'extraccion-quirurgica-muelas-impactadas',
    name: 'Extracción Quirúrgica de Muelas Impactadas',
    serviceId: 'cirugia-tercer-molar',
    serviceName: 'CIRUGÍA DEL TERCER MOLAR',
    description: [
      'Las muelas del juicio impactadas son aquellas que no pueden erupcionar normalmente por falta de espacio o por estar en una posición incorrecta dentro del hueso. Estas requieren un abordaje quirúrgico para su remoción segura.',
      'El procedimiento incluye una pequeña incisión en la encía, posible remoción de hueso circundante y sección del diente si es necesario. Utilizamos radiografías panorámicas y en algunos casos tomografías 3D para planificar cada extracción con máxima precisión.',
    ],
    keyPoints: [
      'Abordaje quirúrgico preciso y planificado',
      'Planificación con radiografías y tomografía 3D',
      'Manejo efectivo del dolor postoperatorio',
      'Suturas reabsorbibles que no necesitan retirarse',
      'Protocolo de recuperación paso a paso',
      'Previene daño a nervios y estructuras adyacentes',
    ],
  },
  {
    slug: 'evaluacion-radiografica-preoperatoria',
    name: 'Evaluación Radiográfica Preoperatoria',
    serviceId: 'cirugia-tercer-molar',
    serviceName: 'CIRUGÍA DEL TERCER MOLAR',
    description: [
      'Antes de cualquier extracción de terceros molares, realizamos una evaluación radiográfica completa que incluye radiografía panorámica y, cuando es necesario, tomografía computarizada 3D. Esto nos permite visualizar la posición exacta de la muela, sus raíces y su relación con estructuras importantes.',
      'Esta evaluación es fundamental para planificar el abordaje quirúrgico más seguro, identificar posibles complicaciones y determinar si la extracción es necesaria o si se puede realizar un seguimiento conservador.',
    ],
    keyPoints: [
      'Radiografía panorámica digital',
      'Tomografía 3D cuando es necesario',
      'Evaluación de la posición y raíces',
      'Identificación de estructuras anatómicas',
      'Planificación quirúrgica precisa',
      'Determina la necesidad real de extracción',
    ],
  },
  {
    slug: 'protocolo-recuperacion-personalizado',
    name: 'Protocolo de Recuperación Personalizado',
    serviceId: 'cirugia-tercer-molar',
    serviceName: 'CIRUGÍA DEL TERCER MOLAR',
    description: [
      'Después de cada extracción de terceros molares, proporcionamos un protocolo de recuperación detallado y personalizado. Incluye indicaciones sobre medicación, alimentación, higiene, actividad física y señales de alerta que requieren atención.',
      'Nuestro equipo realiza seguimiento postoperatorio para asegurar una recuperación óptima. Estamos disponibles por WhatsApp para resolver cualquier duda o inquietud durante el periodo de recuperación, brindando tranquilidad y soporte constante al paciente.',
    ],
    keyPoints: [
      'Instrucciones detalladas paso a paso',
      'Medicación personalizada para el dolor',
      'Guía de alimentación postoperatoria',
      'Seguimiento postoperatorio presencial',
      'Soporte por WhatsApp 24/7',
      'Recuperación típica de 5-7 días',
    ],
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

export function getTreatmentsByService(serviceId: string): Treatment[] {
  return treatments.filter((t) => t.serviceId === serviceId);
}

// Map from item name to slug for linking
export function getSlugForItem(serviceId: string, itemName: string): string | undefined {
  const treatment = treatments.find(
    (t) => t.serviceId === serviceId && t.name === itemName
  );
  return treatment?.slug;
}
