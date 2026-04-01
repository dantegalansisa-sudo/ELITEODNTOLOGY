# 🦷 ELITE DENTAL CARE — CLAUDE.md DEFINITIVO
## Clínica Odontológica Premium — Web de Última Generación

---

## ⚠️ INSTRUCCIÓN #1 — LIMPIAR ANTES DE CONSTRUIR

```
ANTES DE ESCRIBIR CUALQUIER CÓDIGO:
1. Elimina todo en /src/components/
2. Elimina todo en /src/sections/
3. Ejecuta: npm install framer-motion
4. Lee este CLAUDE.md completo
5. Construye desde cero limpio
```

---

## 🎯 VISIÓN DE DISEÑO

**Estética:** Medical Luxury Clean — blanco puro + azul dental profundo + toques cyan.
**Referencia:** Web dental moderna tipo la imagen provista — hero full-screen con foto
de paciente en tratamiento, servicios en slider con fotos, stats grandes, equipo de doctoras.
**Diferenciador:** Hero con foto impactante + floating cards con doctora del día + 
partículas de luz suaves + morphing blob azul animado detrás del contenido.
**Sensación:** "Esta clínica es moderna, confiable, de primera. Quiero agendar YA."

---

## 🎨 SISTEMA DE DISEÑO — MEDICAL LUXURY CLEAN

### Colores
```css
:root {
  /* Fondos CLAROS — odontología = limpieza = luz */
  --bg-base:     #F0F7FF;       /* Azul muy muy claro — fondo principal */
  --bg-white:    #FFFFFF;       /* Blanco puro — cards y hero */
  --bg-section:  #E8F4FD;       /* Azul claro suave — secciones alternas */

  /* Azules del logo Elite Dental Care */
  --blue-deep:   #1565C0;       /* Azul marino del logo */
  --blue-mid:    #1E88E5;       /* Azul medio — botones */
  --blue-light:  #42A5F5;       /* Azul claro — accents */
  --cyan:        #00BCD4;       /* Cyan brillante — detalles modernos */
  --cyan-light:  #B2EBF2;       /* Cyan muy claro — fondos pills */

  /* Textos */
  --text-dark:   #0D1B2A;       /* Casi negro — títulos */
  --text-body:   #4A5568;       /* Gris oscuro — párrafos */
  --text-muted:  #94A3B8;       /* Gris claro — subtextos */

  /* Bordes y sombras */
  --border:      #E2E8F0;
  --shadow-sm:   0 2px 16px rgba(21,101,192,0.08);
  --shadow-md:   0 8px 40px rgba(21,101,192,0.12);
  --shadow-lg:   0 24px 64px rgba(21,101,192,0.15);
  --shadow-blue: 0 8px 32px rgba(30,136,229,0.3);
}
```

### Tipografía
```html
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet">
```

```css
/* Títulos hero/CEO: Playfair Display 700 Italic — elegancia médica */
--font-display: 'Playfair Display', serif;

/* Todo lo demás: Nunito — amigable, moderno, limpio */
--font-body: 'Nunito', sans-serif;

/* Escala */
--text-hero:  clamp(48px, 6vw, 88px);
--text-h2:    clamp(36px, 4vw, 56px);
--text-h3:    clamp(20px, 2.5vw, 28px);
--text-body:  17px;
--text-label: 12px;
```

### Espaciado OBLIGATORIO
```css
section       { padding: 120px 0; }
.container    { max-width: 1240px; margin: 0 auto; padding: 0 60px; }
/* Mobile: 80px 0 | container 0 24px */
```

---

## 🏗️ STACK

```bash
# Vite + React + TypeScript + Tailwind (existente)
npm install framer-motion
```

---

## 📁 ESTRUCTURA

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── AnimatedCounter.tsx
│   ├── SectionLabel.tsx       ← "🦷 NUESTROS SERVICIOS" en azul
│   ├── DoctorCard.tsx         ← Reutilizable para equipo y CEO
│   └── WhatsAppButton.tsx
├── sections/
│   ├── HeroSection.tsx        ← ⭐ ÚLTIMA GENERACIÓN
│   ├── ServicesSection.tsx    ← Slider horizontal con fotos
│   ├── CEOSection.tsx         ← Sección especial Dra. Hernández
│   ├── StatsSection.tsx
│   ├── AboutSection.tsx
│   ├── TeamSection.tsx        ← Las 3 doctoras
│   ├── ProcessSection.tsx     ← Cómo funciona — 4 pasos
│   ├── TestimonialsSection.tsx
│   └── ContactSection.tsx
├── App.tsx
└── index.css
```

---

## 📄 SECCIONES — ESPECIFICACIONES EXACTAS

---

### 1. NAVBAR — Flotante y limpio

```tsx
// sticky top, bg white/90 blur al scroll
// altura: 76px

// Izquierda: Logo Elite Dental Care (diente azul + texto)
// Centro: Nunito 600 14px
//   Inicio · Servicios · Nosotros · Equipo · Contacto
//   color: var(--text-body), hover: var(--blue-mid)
// Derecha: Botón azul pill "📅 Agendar Cita"
//   bg: var(--blue-mid), color: white
//   border-radius: 50px, padding: 12px 28px
//   hover: bg var(--blue-deep), shadow var(--shadow-blue)
//   Pulso sutil en el botón — animate-pulse muy suave

.navbar {
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  position: sticky; top: 0; z-index: 100;
}
```

---

### 2. HERO SECTION ⭐ — ÚLTIMA GENERACIÓN

**Concepto:** Full-screen con foto real de odontología de fondo. Texto bold a la
izquierda. Cards flotantes con info del doctor y servicios chips. Morphing blob
azul animado. Partículas de luz suaves. Exactamente como la referencia enviada.

**Fondo:**
```tsx
// Imagen hero full-screen — paciente en tratamiento dental:
// https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1800&q=80

// Overlay suave (NO oscuro total — la foto debe verse):
background: linear-gradient(
  110deg,
  rgba(255,255,255,0.96) 0%,
  rgba(255,255,255,0.85) 35%,
  rgba(240,247,255,0.6) 60%,
  rgba(21,101,192,0.1) 100%
);

// Morphing blob azul animado (detrás del texto):
// SVG blob que cambia de forma suavemente
// color: rgba(30,136,229,0.08)
// posición: center-left, tamaño: 600px
// animación: morph 8s ease-in-out infinite

@keyframes morph-blob {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  25%  { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  50%  { border-radius: 50% 60% 30% 40% / 30% 50% 70% 60%; }
  75%  { border-radius: 60% 40% 50% 30% / 60% 70% 30% 40%; }
}
```

**Partículas de luz:**
```css
/* 15 círculos pequeños azules/cyan */
/* Tamaños: 4px - 10px, border-radius: 50% */
/* Opacidad: 0.2 - 0.5 */
/* Flotan suavemente — sin caer hacia arriba */
/* duration: 5s-9s, delay: 0s-5s, infinite */

@keyframes float-gentle {
  0%, 100% { transform: translateY(0) translateX(0); }
  33%  { transform: translateY(-12px) translateX(6px); }
  66%  { transform: translateY(6px) translateX(-8px); }
}
```

**Contenido izquierda:**
```tsx
// Línea + badge (delay 0.3s, slideUp):
// ── ODONTOLOGÍA ESPECIALIZADA · SANTO DOMINGO

// Título (cada línea entra con stagger 0.15s, slideUp 40px):
<motion.h1 style={{
  fontFamily: 'Playfair Display, serif',
  fontStyle: 'italic',
  fontSize: 'clamp(48px, 6vw, 88px)',
  fontWeight: 700,
  color: 'var(--text-dark)',
  lineHeight: 1.05,
  letterSpacing: '-0.02em'
}}>
  Odontología
  <br/>
  <span style={{ color: 'var(--blue-mid)' }}>Moderna</span> con
  <br/>
  Cuidado Gentil.
</motion.h1>

// Descripción (delay 0.7s):
<p style={{ Nunito 400 17px, color: var(--text-body), lineHeight: 1.8, maxWidth: 440px }}>
  Expertos en salud bucal comprometidos con tu bienestar.
  La Dra. Hernández y su equipo te brindan una sonrisa
  que transforma tu vida.
</p>

// Chips de servicios (delay 0.9s, stagger 0.08s):
// [🦷 Limpieza Dental] [✨ Ortodoncia] [🔬 Endodoncia] [💎 Carillas] [🩺 Evaluación]
// bg: var(--cyan-light), color: var(--blue-deep)
// border-radius: 50px, Nunito 600 13px
// hover: bg var(--blue-mid), color white, scale 1.05

// Botones (delay 1.1s):
<button className="btn-blue">📅 Agendar Cita →</button>
<button className="btn-outline">Ver Servicios</button>
```

**Foto + floating cards derecha:**
```tsx
// Foto de la clínica/dentista:
// Usar: /public/images/hero-dental.jpg si existe
// O Unsplash: https://images.unsplash.com/photo-1588776814546-1ffbb2a8e90a?w=700&q=80

// La foto en contenedor con border-radius: 24px, overflow: hidden
// Blob azul claro detrás (pseudo-elemento, morphing)
// drop-shadow azul suave

// FLOATING CARD 1 — Superior: Doctor del día
// Posición: top: 10%, left: -15%
<FloatingCard>
  <img src="dra-hernandez-mini.jpg" // pequeño avatar circular
  <div>
    <span style={{ color: 'var(--blue-mid)', fontSize: 11, fontWeight: 700 }}>
      ESPECIALISTA DEL DÍA
    </span>
    <p style={{ fontWeight: 700, fontSize: 14 }}>Dra. Hernández</p>
    <p style={{ color: 'var(--text-muted)', fontSize: 12 }}>Odontología Especializada</p>
  </div>
  <div style={{ /* indicador verde: "Disponible" */ }}>
    <span style={{ color: '#22C55E', fontSize: 12, fontWeight: 600 }}>● Disponible</span>
  </div>
</FloatingCard>

// FLOATING CARD 2 — Rating
// Posición: bottom: 30%, right: -10%
<FloatingCard>
  <div style={{ fontSize: 24 }}>⭐</div>
  <div>
    <p style={{ fontWeight: 800, fontSize: 20, color: 'var(--text-dark)' }}>4.9</p>
    <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>1,735 Pacientes</p>
  </div>
</FloatingCard>

// FLOATING CARD 3 — Próxima cita
// Posición: bottom: 10%, left: 0%
<FloatingCard>
  <span style={{ fontSize: 20 }}>📅</span>
  <div>
    <p style={{ fontSize: 12, fontWeight: 700 }}>Próxima disponibilidad</p>
    <p style={{ fontSize: 11, color: 'var(--blue-mid)', fontWeight: 600 }}>HOY · 3:00 PM</p>
  </div>
</FloatingCard>

// Animaciones floating cards:
// Cada una con float animation diferente
// entrada: delay 0.6s, 0.8s, 1.0s — fadeIn + scale 0.8→1
```

**Barra inferior del hero (como referencia):**
```tsx
// Pills de navegación rápida a servicios:
// [Revisión Dental] [Limpieza] [Relleno] [Tratamiento de Encías] [Retenedores]
// bg: white, border: 1px solid var(--border)
// Nunito 600 13px, color: var(--text-body)
// hover: bg var(--blue-mid) color white
// border-radius: 50px
// Separado del hero con línea sutil
```

---

### 3. SERVICES SECTION — Slider con fotos

```tsx
// Fondo: var(--bg-white)
// padding: 120px 0

// Header:
// [SectionLabel: 🦷 NUESTROS SERVICIOS]
// <h2 Playfair Italic>Descubre Nuestros Servicios<br/>Dentales de Firma</h2>
// Descripción + "750+ Reseñas" con avatares pequeños (como referencia)

// SLIDER HORIZONTAL — 3 cards visibles, arrows izquierda/derecha
// Funcional con framer-motion drag o useState index

const services = [
  {
    name: "Limpieza Dental",
    desc: "Profilaxis profesional para una boca sana y brillante.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&q=80",
    icon: "🦷"
  },
  {
    name: "Revisión Dental",
    desc: "Diagnóstico completo y evaluación del estado bucal.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffbb2a8e90a?w=500&q=80",
    icon: "🔍"
  },
  {
    name: "Carillas Dentales",
    desc: "Transforma tu sonrisa con carillas de porcelana premium.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80",
    icon: "✨"
  },
  {
    name: "Endodoncia",
    desc: "Tratamiento de conducto con máxima precisión y sin dolor.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500&q=80",
    icon: "🔬"
  },
  {
    name: "Ortodoncia",
    desc: "Brackets y alineadores para una sonrisa perfectamente alineada.",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&q=80",
    icon: "😁"
  },
  {
    name: "Blanqueamiento",
    desc: "Dientes varios tonos más blancos en una sola sesión.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=500&q=80",
    icon: "💎"
  }
];

// Estilo cada service card en el slider:
// border-radius: 20px, overflow: hidden
// Imagen: aspect-ratio 4/3, cover
// hover imagen: scale(1.05), transition 0.5s
// Overlay gradient azul desde abajo
// Nombre: Nunito 700 22px blanco
// Descripción: Nunito 400 14px rgba(255,255,255,0.8)
// Flecha →: blanco, aparece en hover
// border-bottom: 3px solid var(--cyan) en hover

// Arrows de navegación:
// Círculos blancos con sombra, ← →
// framer-motion whileTap: scale 0.9
```

---

### 4. CEO SECTION ⭐ — Dra. Hernández

```tsx
// Fondo: var(--bg-section) con blob azul opacity:0.05
// padding: 120px 0

// ⚠️ ESTA ES LA SECCIÓN MÁS IMPORTANTE
// La Dra. Hernández es el corazón de Elite Dental Care

// Layout: Foto izquierda (45%) + Contenido derecha (55%)

// FOTO IZQUIERDA:
// src: /public/images/dra-hernandez.jpg
// (foto de la clínica con bata blanca y gorro floral — imagen 2)
// aspect-ratio: 3/4
// border-radius: 24px
// object-fit: cover
// object-position: top center
// box-shadow: var(--shadow-lg)
// Blob cyan detrás: posición absolute, morphing animation

// Badge sobre la foto (bottom center):
// bg: white, border-radius: 16px, padding: 16px 24px
// box-shadow: var(--shadow-md)
// "Dra. Hernández — CEO & Fundadora"
// Línea azul 2px debajo del nombre
// ⭐ 4.9 · "Odontología Especializada"

// CONTENIDO DERECHA:
// [SectionLabel: 👩‍⚕️ NUESTRA CEO]

// <h2 Playfair Italic>
//   Dra. Hernández
//   <br/>
//   <span color:blue>La Visión Detrás</span>
//   <br/>
//   de Elite Dental Care.
// </h2>

// [Línea azul 60px]

// Párrafo 1:
"En Élite Dental Care, tu sonrisa está en manos de los mejores
especialistas. La Dra. Hernández y su equipo están comprometidos
en ofrecerte una atención personalizada con los más altos
estándares en odontología especializada."

// Párrafo 2:
"Con años de experiencia y una pasión genuina por transformar
sonrisas, la Dra. Hernández fundó Elite Dental Care con una
misión clara: que cada paciente dominicano tenga acceso a
odontología de primer nivel con cuidado personalizado."

// Quote box (bg azul claro, border-left azul 3px):
"Tu sonrisa, nuestra prioridad."
— Dra. Hernández, CEO & Fundadora

// Credenciales (row con iconos):
// 🦷 Odontología Especializada
// 🏆 CEO & Fundadora de Elite Dental Care
// 📱 @elitedentalcare.rd
// 📍 Santo Domingo, Rep. Dom.

// [Botón azul: Agendar con la Dra. Hernández →]
// href WhatsApp con mensaje personalizado
```

---

### 5. STATS SECTION

```tsx
// Fondo: var(--blue-deep) — sección azul oscura
// padding: 80px 0

const stats = [
  { value: 1735, suffix: "+", label: "PACIENTES SATISFECHOS" },
  { value: 98,   suffix: "%", label: "TASA DE SATISFACCIÓN" },
  { value: 3,    suffix: "",  label: "ESPECIALISTAS EN EQUIPO" },
  { value: 4.9,  suffix: "★", label: "CALIFICACIÓN PROMEDIO" }
];

// Número: Playfair Display 700, clamp(56px,7vw,88px), color: white
// Sufijo/star: color var(--cyan)
// Label: Nunito 600 12px uppercase letter-spacing, color: rgba(255,255,255,0.6)
// Separador: 1px solid rgba(255,255,255,0.1)
// AnimatedCounter con IntersectionObserver
```

---

### 6. ABOUT SECTION

```tsx
// Fondo: var(--bg-white)
// padding: 120px 0

// Layout: Imagen izquierda + texto derecha (como la referencia)

// Imagen izquierda:
// https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&q=80
// border-radius: 20px
// Borde azul offset en esquina

// Texto derecha:
// [SectionLabel: Sobre Nosotros /]
// <h2>Excelencia en Odontología<br/>con Cuidado Compasivo</h2>
// Párrafo Nunito 400 17px

// 3 checkmarks azules:
// ✓ Más de 5 años de experiencia
// ✓ Especialistas certificados
// ✓ Tecnología dental de última generación

// Stats inline bajo los checks:
// 98% Satisfaction · 50K+ Smiles · 4.9 Rating
// (como referencia — Nunito 800 big numbers)

// Mini team preview: 2 fotos circulares de doctoras
// "Conoce a nuestras especialistas →"
```

---

### 7. TEAM SECTION — Las 3 Doctoras

```tsx
// Fondo: var(--bg-section)
// padding: 120px 0

// Header centrado:
// [SectionLabel: 👩‍⚕️ NUESTRO EQUIPO]
// <h2 Playfair Italic>Conoce a Nuestras<br/>Especialistas</h2>

// 3 cards en grid

const team = [
  {
    name: "Dra. Hernández",
    role: "CEO & Odontología Especializada",
    specialty: "Directora y especialista principal",
    instagram: "@elitedentalcare.rd",
    image: "/public/images/dra-hernandez.jpg",
    placeholder: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80",
    badge: "CEO & FUNDADORA"
  },
  {
    name: "Dra. María Castillo",
    role: "Odontóloga General",
    specialty: "Evaluaciones, diagnósticos, profilaxis, extracciones y caries",
    instagram: "@mariaecastillo_",
    image: "/public/images/dra-maria.jpg",
    placeholder: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&q=80",
    badge: "ODONTOLOGÍA GENERAL"
  },
  {
    name: "Dra. Kiana Del Orbe",
    role: "Especialista en Endodoncia",
    specialty: "Tratamiento de conducto, conservación de piezas dentales",
    instagram: "@dra.kianadelorbe",
    image: "/public/images/dra-kiana.jpg",
    placeholder: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&q=80",
    badge: "ENDODONCIA"
  }
];

// Estilo card:
// bg: white, border-radius: 24px, overflow: hidden
// box-shadow: var(--shadow-sm)
// border: 1px solid var(--border)
// hover: box-shadow var(--shadow-md), transform translateY(-8px)
// transition: 0.3s ease

// Foto: aspect-ratio 3/4, object-fit cover, object-position top
// Overlay cyan muy sutil en hover

// Badge flotante: bg var(--blue-mid) color white
// Nunito 700 11px uppercase, border-radius: 50px
// posición: top-right de la foto

// Info debajo de la foto:
// padding: 24px
// Nombre: Nunito 700 20px color var(--text-dark)
// Rol: Nunito 600 13px color var(--blue-mid) uppercase
// Specialty: Nunito 400 14px color var(--text-body)
// Instagram: Nunito 500 13px color var(--cyan)
// Línea cyan 40px debajo del nombre

// Entrada al scroll: stagger 0.15s entre cards
// framer-motion: initial opacity:0 y:50 → animate opacity:1 y:0
```

---

### 8. PROCESS SECTION — Cómo Funciona

```tsx
// Fondo: var(--bg-white)
// padding: 120px 0

// Header centrado:
// [SectionLabel: PROCESO]
// <h2>Fácil Camino Hacia<br/>Tu Sonrisa Perfecta</h2>

// 4 pasos en fila con línea conectora (como referencia FlyKit)

const steps = [
  { num: "01", icon: "📞", title: "Agenda tu Cita",    desc: "Llámanos o escríbenos por WhatsApp para reservar tu consulta." },
  { num: "02", icon: "🔍", title: "Evaluación",         desc: "La Dra. Hernández evalúa tu estado bucal con equipos modernos." },
  { num: "03", icon: "🦷", title: "Tratamiento",        desc: "Ejecutamos el plan personalizado con la mayor precisión y cuidado." },
  { num: "04", icon: "😊", title: "Tu Nueva Sonrisa",   desc: "Disfruta de resultados que transforman tu confianza y bienestar." }
];

// Línea conectora: border-top: 2px dashed var(--border) entre pasos (desktop)
// Número: círculo azul con número blanco Nunito 800
// Ícono: 32px
// Título: Nunito 700 18px
// Desc: Nunito 400 14px text-muted
// Cada paso entra con stagger 0.2s al scroll
```

---

### 9. TESTIMONIALS

```tsx
// Fondo: var(--bg-section)
// padding: 120px 0

// Header centrado:
// [SectionLabel: TESTIMONIOS]
// <h2 Playfair Italic>Lo Que Dicen<br/>Nuestros Pacientes</h2>

// 3 cards en grid — NO slider

const testimonials = [
  {
    initials: "AM",
    name: "Ana M.",
    treatment: "Limpieza y Blanqueamiento",
    stars: 5,
    text: "La Dra. Hernández y su equipo son increíbles. Me trataron con mucha paciencia y profesionalismo. Mi sonrisa quedó perfecta. ¡La mejor clínica dental de Santo Domingo!"
  },
  {
    initials: "RG",
    name: "Roberto G.",
    treatment: "Endodoncia — Dra. Kiana",
    stars: 5,
    text: "Tenía miedo de la endodoncia pero la Dra. Kiana fue tan profesional y gentil que no sentí nada. El resultado fue excelente. Totalmente recomendada."
  },
  {
    initials: "LP",
    name: "Laura P.",
    treatment: "Revisión — Dra. María",
    stars: 5,
    text: "La Dra. María Castillo me explicó todo detalladamente. El ambiente de la clínica es muy limpio y moderno. Me siento en excelentes manos en Elite Dental Care."
  }
];

// Card: bg white, border-radius: 20px, padding: 36px
// border: 1px solid var(--border)
// hover: border-color var(--blue-light), shadow var(--shadow-md), translateY(-4px)
// border-top: 3px solid var(--cyan)
// Comilla: Playfair 700 80px color var(--cyan) opacity:0.3
// Estrellas: ★ en var(--blue-mid)
// Avatar: círculo azul con iniciales blancas Nunito 700
```

---

### 10. CONTACT SECTION

```tsx
// Fondo: var(--bg-white)
// padding: 120px 0

// Header centrado:
// [SectionLabel: 📅 AGENDA TU CITA]
// <h2 Playfair Italic>¿Lista Para Tu<br/>Nueva Sonrisa?</h2>
// "Consulta inicial gratuita — Respuesta en menos de 2 horas"

// Layout: 2 cards lado a lado

// CARD IZQUIERDA — Datos de contacto:
// bg: var(--blue-deep), color white, border-radius: 24px, padding: 48px 40px

// Logo Elite Dental Care blanco
// [Línea cyan]

// 📞 (829)-937-6644 / 829-937-6655
// 📧 info@elitedentalcare.rd
// 📍 Santo Domingo, Rep. Dom.
// 📱 @elitedentalcare.rd
// 🌐 wa.me/18299376644

// [Botón cyan full-width: 💬 WhatsApp Directo →]
// href: https://wa.me/18299376644?text=Hola, me interesa agendar una cita en Elite Dental Care

// Mini fotos circulares de las 3 doctoras
// "Nuestro equipo te espera"

// CARD DERECHA — Formulario:
// bg: var(--bg-section), border-radius: 24px, padding: 48px 40px
// box-shadow: var(--shadow-md)

// Campos:
// [Nombre completo]*
// [Teléfono / WhatsApp]*
// [Servicio: Select]
//   → Limpieza Dental
//   → Revisión General
//   → Blanqueamiento
//   → Carillas
//   → Endodoncia
//   → Ortodoncia
//   → Otro
// [Especialista: Select]
//   → Dra. Hernández (Especializada)
//   → Dra. María Castillo (General)
//   → Dra. Kiana Del Orbe (Endodoncia)
//   → Sin preferencia
// [Fecha preferida]
// [Mensaje adicional]
// [Btn azul: Enviar Solicitud →]

// ESTILO INPUTS:
// bg: white, border: 1.5px solid var(--border)
// border-radius: 12px, height: 52px, Nunito 400 16px
// focus: border-color var(--blue-mid), shadow 0 0 0 4px rgba(30,136,229,0.1)
// Label: Nunito 600 13px color var(--text-dark), marginBottom: 8px
```

---

### 11. FOOTER

```tsx
// Fondo: var(--blue-deep) con blob cyan opacity:0.05
// Línea cyan 2px superior
// padding: 72px 0 32px

// 4 columnas:
// Logo + slogan | Servicios | Equipo | Contacto

// "Tu sonrisa, nuestra prioridad." en Playfair Italic blanco
// Links: Nunito 400 14px rgba(255,255,255,0.7) hover blanco
// Íconos sociales: Instagram → @elitedentalcare.rd

// Copyright: "© 2025 Elite Dental Care | Santo Domingo, Rep. Dom."
```

---

## 🎭 ANIMACIONES — Framer Motion

### 1. Hero — Morphing blob
```css
@keyframes morph-blob {
  0%,100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  25%  { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  50%  { border-radius: 50% 60% 30% 40% / 30% 50% 70% 60%; }
  75%  { border-radius: 60% 40% 50% 30% / 60% 70% 30% 40%; }
}
/* duration: 8s, infinite, ease-in-out */
```

### 2. Hero — Entrada escalonada
```tsx
// Badge:    delay 0.3s, slideUp 20px + fadeIn
// Línea 1:  delay 0.4s, slideUp 40px
// Línea 2:  delay 0.55s, slideUp 40px
// Línea 3:  delay 0.7s, slideUp 40px
// Párrafo:  delay 0.85s, fadeIn
// Chips:    delay 1.0s, stagger 0.08s cada chip
// Botones:  delay 1.15s, slideUp
// Foto:     delay 0.6s, slideRight 80px
// Cards:    delay 0.8s, 1.0s, 1.2s — scale 0.8→1 + fadeIn
```

### 3. Floating cards — animación perpetua
```css
@keyframes float-card {
  0%, 100% { transform: translateY(0px); }
  50%  { transform: translateY(-8px); }
}
/* Card 1: 4s ease-in-out infinite */
/* Card 2: 5s ease-in-out infinite 0.7s */
/* Card 3: 3.5s ease-in-out infinite 1.4s */
```

### 4. Scroll animations — todas las secciones
```tsx
// useInView trigger
// initial: { opacity: 0, y: 40 }
// animate: { opacity: 1, y: 0 }
// transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
// staggerChildren: 0.12s
```

### 5. Services slider
```tsx
// drag="x" con dragConstraints
// O: useState(activeIndex) con botones ← →
// Transición entre slides: framer-motion AnimatePresence + x ±100%
```

### 6. Stats — AnimatedCounter
```tsx
// IntersectionObserver trigger
// Cuenta 0 → valor en 2s
// spring({ stiffness: 80, damping: 20 })
```

---

## 🔘 WHATSAPP FLOTANTE

```tsx
// Estilo dental — azul/blanco
// bg: var(--blue-mid), color: white, border-radius: 50px
// "📅 Agendar Cita" en desktop
// box-shadow: var(--shadow-blue)
// animate-ping verde suave detrás

const msg = "Hola Elite Dental Care! Me interesa agendar una cita. ¿Me pueden ayudar?";
const wa = `https://wa.me/18299376644?text=${encodeURIComponent(msg)}`;
```

---

## 📱 RESPONSIVE

```
Mobile (375px):
- Hero: 1 col, foto detrás con overlay, floating cards ocultas
- Chips: wrap en 2 filas
- Services slider: 1 card visible
- Stats: 2x2 grid
- CEO: foto arriba, texto abajo
- Team: 1 columna
- Contact: apiladas

Tablet (768px):
- Hero: foto smaller
- Services: 2 cards visibles
- Team: 2 columnas (CEO ocupa 1 col completa)

Desktop (1024px+): layout completo
Max-width: 1240px
```

---

## 🎯 REGLAS ABSOLUTAS

```
1. FONDO: CLARO — #F0F7FF azul muy suave. Odontología = limpieza = luz
2. FUENTES: Playfair Display Italic para títulos + Nunito para todo lo demás
3. ACENTO: Azul #1E88E5 como primario, Cyan #00BCD4 como acento moderno
4. MORPHING BLOB: En hero y CEO section — marca visual única
5. FLOATING CARDS: 3 en el hero — siempre animadas
6. CEO SECTION: Es tan importante como el hero — Dra. Hernández es la marca
7. CHIPS EN HERO: Los 5 servicios como pills clickeables bajo el título
8. TEAM: Las 3 doctoras con sus datos REALES y sus fotos reales
9. FORMULARIO: Incluye selector de especialista (Dra. específica)
10. ESPACIADO: 120px entre secciones SIN EXCEPCIÓN
11. SKILLS: frontend-design + taste-skill + webapp-testing — TODAS
```

---

## 📌 METADATA SEO

```tsx
title: "Elite Dental Care | Tu Sonrisa, Nuestra Prioridad — Santo Domingo"
description: "Elite Dental Care — Odontología Especializada en Santo Domingo. Dra. Hernández y equipo. Limpieza, Blanqueamiento, Carillas, Endodoncia, Ortodoncia. Citas: (829)-937-6644."
```

---

## 💬 INSTRUCCIÓN EXACTA PARA CLAUDE CODE

```
Lee el CLAUDE.md completo antes de empezar.

PASO 1: Limpia /src/components/ y /src/sections/
PASO 2: npm install framer-motion
PASO 3: Construye en este orden EXACTO:

1. index.css — variables CSS + fuentes Playfair + Nunito
2. FloatingCard.tsx + AnimatedCounter.tsx + SectionLabel.tsx
3. HeroSection.tsx ← PRIORIDAD MÁXIMA
   - Morphing blob azul animado
   - Foto dental de fondo con overlay suave
   - Texto con stagger de entrada
   - 5 chips de servicios bajo el título
   - 3 floating cards animadas
   - Pills de navegación inferior
4. Navbar.tsx
5. ServicesSection.tsx — slider con arrows
6. CEOSection.tsx — Dra. Hernández con blob y badge
7. StatsSection.tsx — fondo azul oscuro
8. AboutSection.tsx
9. TeamSection.tsx — 3 doctoras reales
10. ProcessSection.tsx — 4 pasos
11. TestimonialsSection.tsx
12. ContactSection.tsx — 2 cards
13. Footer + WhatsAppButton

DETENTE después del Hero y muéstramelo.
Espera mi aprobación antes de continuar.

Usa las skills frontend-design, taste-skill y webapp-testing.
El resultado debe ser la web dental más premium y 
moderna de República Dominicana.
```

---

*Proyecto #1 de 15 clínicas dentales — NEXIX Tech Studio | nexixstudio.com*