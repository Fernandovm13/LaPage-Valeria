// ============================================================================
//  CONTENIDO DEL PORTAFOLIO —  Gómez Sotelo (Datos Reales y Obras Actualizadas)
// ============================================================================

const artist = {
  nombre: "K. Valeria Gómez Sotelo",
  firma: "K. Valeria Sotelo",
  titulo: "Artista Visual",
  statement: "Exploro la relación entre el dibujo, la pintura y las formas tradicionales del arte visual, construyendo un lenguaje donde la materia y mi práctica disciplinada convergen.",
  bio: "Soy estudiante de la Licenciatura en Artes Visuales en la Universidad de Ciencias y Artes de Chiapas (UNICACH). Mi producción plástica se centra principalmente en la pintura al óleo, el acrílico, las técnicas secas y el dibujo tradicional, complementando mi formación artística con disciplinas de expresión corporal como el ballet folclórico.",
  origen: "Tuxtla Gutiérrez, Chiapas, México",
  residencia: "Tuxtla Gutiérrez, Chiapas",
  rfc: "XAXX010101000",
  intereses: ["Pintura al Óleo", "Acrílico y Técnicas Secas", "Dibujo Académico", "Ballet Folclórico UNICACH"],
  destacados: {
    disciplina: "Pintura · Dibujo Académico",
    tecnicas: "Óleo, acrílico, técnica seca",
    ubicacion: "Tuxtla Gutiérrez, Chis.",
    trayectoria: "Estudiante de Licenciatura"
  }
};

const contacto = {
  email: "karlavaleria.gomezsotelo@gmail.com",
  telefono: "963 140 0182",
  whatsapp: "https://wa.me/529631400182",
  direccion: "Del Ejército Nacional 2, Bienestar Soc, 29077 Tuxtla Gutiérrez, Chis.",
  ubicacion: "Tuxtla Gutiérrez, Chiapas, México",
  instagram: "https://www.instagram.com/valsotelo_9?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  instagram_handle: "@valsotelo_9",
  facebook: "https://www.facebook.com/Valgomezsotelo",
  facebook_handle: "Val Gómez Sotelo",
  cv_pdf_url: "cv-imprimir.html"
};

const formacion = [
  {
    grado: "Licenciatura en Artes Visuales",
    institucion: "Universidad de Ciencias y Artes de Chiapas (UNICACH)",
    especialidad: "Artes Visuales (Actualmente cursando 2.º semestre | Cursado previo hasta 4.º semestre)",
    inicio: "2024",
    fin: "Presente"
  },
  {
    grado: "Curso Preuniversitario en Artes Visuales",
    institucion: "Universidad de Ciencias y Artes de Chiapas (UNICACH)",
    especialidad: "Formación previa en producción visual y exposición de mis proyectos finales",
    inicio: "2025",
    fin: "2025"
  },
  {
    grado: "Formación Complementaria en Ballet Folclórico",
    institucion: "UNICACH",
    especialidad: "Formación artística interdisciplinaria y expresión corporal",
    inicio: "2024",
    fin: "Presente"
  }
];

const cursos = [
  {
    nombre: "Taller de Producción y Lenguaje de las Artes Visuales",
    institucion: "Facultad de Artes, UNICACH",
    anio: "2025"
  },
  {
    nombre: "Clases de Ballet Folclórico",
    institucion: "UNICACH",
    anio: "2024 - 2025"
  }
];

const trayectoria = [
  {
    anio: "2026",
    actividad: "Producción Pictórica",
    descripcion: "Desarrollo de obra al óleo de formato mediano (Obra 'ECO').",
    lugar: "Tuxtla Gutiérrez, Chiapas"
  },
  {
    anio: "2025",
    actividad: "Exposición Académica",
    descripcion: "Presentación de mis proyectos finales de la asignatura Producción y Lenguaje de las Artes Visuales.",
    lugar: "Facultad de Artes, UNICACH · Noviembre 2025"
  },
  {
    anio: "2025",
    actividad: "Convocatoria y Mención Honorífica",
    descripcion: "Reconocimiento otorgado por la Facultad de Artes en la Exposición de Proyectos de fin de curso Preuniversitario.",
    lugar: "UNICACH, Tuxtla Gutiérrez, Chiapas"
  },
  {
    anio: "2024",
    actividad: "Formación Interdisciplinaria",
    descripcion: "Integración de mi práctica del ballet folclórico como complemento de mi desarrollo corporal e interpretativo.",
    lugar: "UNICACH, Chiapas"
  }
];

const colectivos = [];

const exposiciones = [
  {
    id: "exp-1",
    nombre: "Exposición de Proyectos de Fin de Curso Preuniversitario en Artes 2025",
    tipo: "colectiva",
    anio: "2025",
    lugar: "Facultad de Artes, UNICACH",
    ciudad: "Tuxtla Gutiérrez",
    estado: "Chiapas",
    descripcion: "Muestra de mis proyectos finales de la asignatura Producción y Lenguaje de las Artes Visuales (Noviembre de 2025).",
    evidencias: [
      {
        tipo: "Fotografía de sala",
        url: "img/evidencia-sala.jpg"
      },
      {
        tipo: "Reconocimiento",
        url: "img/mencion-honorifica.jpg"
      }
    ],
    resena: "Presentación de proyectos finales de los alumnos del curso preuniversitario de la Facultad de Artes."
  }
];

const obras = [
  {
    id: "obra-8",
    titulo: "ECO",
    anio: "2026",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "30 × 40 cm",
    descripcion: "Obra pictórica al óleo desarrollada en lienzo.",
    url: "img/obra-8.jpg"
  },
  {
    id: "obra-1",
    titulo: "Una joven italiana (práctica de estudio académica)",
    anio: "2025",
    tecnica: "Acrílico sobre minagris",
    dimensiones: "30 × 30 cm",
    descripcion: "Práctica de estudio académica de figura y color.",
    url: "img/obra-1.jpg"
  },
  {
    id: "obra-2",
    titulo: "Estudio Académico, Bodegón de análogos",
    anio: "2025",
    tecnica: "Acrílico sobre minagris",
    dimensiones: "30 × 30 cm",
    descripcion: "Estudio académico de color y armonía análoga.",
    url: "img/obra-2.jpg"
  },
  {
    id: "obra-3",
    titulo: "El viaje del Sol",
    anio: "2025",
    tecnica: "Acrílico sobre lienzo",
    dimensiones: "30 × 30 cm",
    descripcion: "Composición en acrílico sobre lienzo.",
    url: "img/obra-3.jpg"
  },
  {
    id: "obra-4",
    titulo: "Estudio académico, Estatua",
    anio: "2025",
    tecnica: "Acrílico sobre minagris",
    dimensiones: "30 × 30 cm",
    descripcion: "Estudio de estatua clásica y claroscuro en acrílico.",
    url: "img/obra-4.jpg"
  },
  {
    id: "obra-5",
    titulo: "Mujer joven de las montañas sabine (Estudio académico)",
    anio: "2025",
    tecnica: "Técnica seca, lápices de colores sobre papel Fabriano",
    dimensiones: "55 × 55 cm",
    descripcion: "Estudio académico detallado a lápices de colores sobre papel Fabriano.",
    url: "img/obra-5.jpg"
  },
  {
    id: "obra-6",
    titulo: "Estudio académico",
    anio: "2025",
    tecnica: "Acrílico sobre minagris",
    dimensiones: "30 × 30 cm",
    descripcion: "Ejercicio académico de valores tonales y forma.",
    url: "img/obra-6.jpg"
  },
  {
    id: "obra-7",
    titulo: "Retrato",
    anio: "2025",
    tecnica: "Acrílico sobre lienzo",
    dimensiones: "30 × 30 cm",
    descripcion: "Retrato en estilo posterizado, exploración de síntesis de color y forma.",
    url: "img/obra-7.jpg"
  },
  {
    id: "obra-9",
    titulo: "Retrato de mascota",
    anio: "2026",
    tecnica: "Acrílico sobre lienzo",
    dimensiones: "30 × 30 cm",
    descripcion: "Estudio pictórico y representación afectiva en acrílico sobre lienzo.",
    url: "img/obra-9.jpg"
  }
];

// Sección de Galería de Danza Folclórica
const danzaFotos = [
  { url: "img/danza-1.jpg", titulo: "Ballet Folclórico UNICACH", desc: "16 de noviembre de 2024 · Teatro Universitario UNICACH" },
  { url: "img/danza-2.jpg", titulo: "Ballet Folclórico UNICACH", desc: "16 de noviembre de 2024 · Teatro Universitario UNICACH" },
  { url: "img/danza-3.jpg", titulo: "Ballet Folclórico UNICACH", desc: "Formación e interpretación de danza tradicional." },
  { url: "img/danza-4.jpg", titulo: "Ballet Folclórico UNICACH", desc: "16 de noviembre de 2024 · Teatro Universitario UNICACH" },
  { url: "img/danza-5.jpg", titulo: "Ballet Folclórico UNICACH", desc: "18 de septiembre de 2025 · Parque Central, Tuxtla Gutiérrez" },
  { url: "img/danza-6.jpg", titulo: "Ballet Folclórico UNICACH", desc: "25 de septiembre de 2025 · Teatro Universitario UNICACH" }
];

const reconocimientos = [
  {
    anio: "2025",
    nombre: "Mención Honorífica — Exposición de Proyectos Preuniversitario 2025",
    institucion: "Facultad de Artes, UNICACH",
    descripcion: "Reconocimiento que me otorgó la Facultad de Artes de la UNICACH por mi destacada participación en la convocatoria y presentación de proyectos finales."
  },
  {
    anio: "2025",
    nombre: "Reconocimiento por Participación",
    institucion: "Facultad de Artes, UNICACH",
    descripcion: "Reconocimiento por mi participación en la Exposición de proyectos de fin de curso preuniversitario en Artes 2025 (Noviembre de 2025)."
  }
];

const tecnicas = [
  "Pintura al óleo",
  "Pintura acrílica",
  "Acuarela",
  "Dibujo tradicional",
  "Lápices de colores sobre papel Fabriano",
  "Acrílico sobre minagris",
  "Ballet folclórico (Expresión corporal)"
];

const documentos = [
  {
    id: "doc-1",
    nombre: "Mención Honorífica — UNICACH 2025",
    tipo: "Constancia",
    anio: "2025",
    relacionado: "Exposición de Proyectos Preuniversitario 2025",
    url: "img/mencion-honorifica.jpg"
  },
  {
    id: "doc-2",
    nombre: "Reconocimiento de Participación",
    tipo: "Reconocimiento",
    anio: "2025",
    relacionado: "Facultad de Artes, UNICACH",
    url: "img/reconocimiento-participacion.jpg"
  },
  {
    id: "doc-3",
    nombre: "Entrevista Televisiva — Canal 10 Chiapas",
    tipo: "Video / Prensa",
    anio: "2025",
    relacionado: "Canal 10 Chiapas",
    url: "img/entrevista.jpg",
    posterUrl: "img/entrevista.jpg",
    videoUrl: "img/entrevista-canal10.mp4"
  }
];

const heroArtwork = "img/hero-obra.jpg";
const artistPortrait = "img/retrato.jpg";

const marqueeItems = [
  "Artes Visuales UNICACH", "Pintura al óleo · ECO 2026", "Acrílico · Minagris", "Dibujo Fabriano",
  "Tuxtla Gutiérrez, Chiapas", "Mención Honorífica 2025", "Ballet Folclórico UNICACH",
  "Canal 10 Chiapas · Entrevista"
];

// ─── PRENSA Y MEDIOS ────────────────────────────────────────────────────────
// Para video local: pon el archivo en img/ y escribe la ruta (ej: "img/entrevista-canal10.mp4")
// Para YouTube:     pega la URL completa del video (ej: "https://www.youtube.com/watch?v=XXXX")
const prensa = [
  {
    id: "prensa-1",
    tipo: "video",          // "video" = archivo local .mp4 | "youtube" = enlace de YouTube
    src: "img/entrevista-canal10.mp4",   // <-- cambia por la ruta del archivo o URL de YouTube
    titulo: "Entrevista Canal 10 Chiapas",
    descripcion: "Entrevista televisiva al Canal 10 de Chiapas sobre mi producción artística y participación en la Facultad de Artes de la UNICACH.",
    medio: "Canal 10 Chiapas",
    anio: "2025"
  }
];
