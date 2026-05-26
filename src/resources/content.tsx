import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Said",
  lastName: "Oudrhich",
  name: "Said Oudrhich",
  role: "Desarrollador Web Full Stack",
  avatar: "/images/avatar-bn.jpg",
  email: "soudrich@gmail.com",
  location: "Europe/Madrid", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Español", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Suscríbete al Newsletter de {person.firstName}</>,
  description: <>Mi newsletter semanal sobre creatividad e ingeniería</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ssaiid14",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/said-oudrhich",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Inicio",
  title: `Portfolio de ${person.name}`,
  description: `Portfolio web mostrando mi trabajo como ${person.role}`,
  headline: <>Creando experiencias web modernas y funcionales</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Proyecto Destacado</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Trabajo destacado
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Soy Said, un{" "}
      <Text as="span" size="xl" weight="strong">
        Desarrollador Web Full Stack
      </Text>{" "}
      apasionado por crear <br /> aplicaciones web innovadoras con tecnologías modernas.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre mí",
  title: `Sobre mí – ${person.name}`,
  description: `Conoce a ${person.name}, ${person.role} desde España`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/said-oudrhich/15min",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>
        Desarrollador Full Stack con experiencia en desarrollo de APIs REST y gestión de bases de
        datos en proyectos reales. Manejo de PHP, Node.js y SQL, junto con experiencia en frontend
        con React y Next.js. Capacidad para desarrollar aplicaciones completas (frontend y backend)
        con enfoque en rendimiento y escalabilidad. Busco mi primera oportunidad como Backend
        Developer para seguir creciendo en entornos profesionales y proyectos de mayor complejidad.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia Laboral",
    experiences: [
      {
        company: "FDS, A DXC Technology Company",
        timeframe: "Enero 2026 - Mayo 2026",
        role: "Desarrollador Web (Prácticas)",
        achievements: [
          <>
            Diseño, desarrollo e implementación de APIs REST en PHP para una aplicación web
            completa.
          </>,
          <>Consumo e integración de servicios externos y APIs empresariales.</>,
          <>Gestión de bases de datos: consultas optimizadas, modelado de datos y persistencia.</>,
          <>
            Desarrollo del backend completo de la aplicación junto con frontend en React y Next.js.
          </>,
          <>
            Trabajo en entorno real de producción: despliegue, integración y mantenimiento de
            funcionalidades backend.
          </>,
        ],
        images: [],
      },
      {
        company: "FDS, A DXC Technology Company",
        timeframe: "Julio 2024 - Septiembre 2024",
        role: "Técnico Informático",
        achievements: [
          <>Instalación, configuración y mantenimiento de equipos, servidores y redes.</>,
          <>Soporte técnico a usuarios y resolución de incidencias.</>,
          <>Administración básica de sistemas y despliegue de nuevo equipamiento.</>,
        ],
        images: [],
      },
      {
        company: "Proyectos y Seguros S.A",
        timeframe: "Abril 2024 - Junio 2024",
        role: "Técnico Informático (Prácticas)",
        achievements: [
          <>Instalación y mantenimiento de sistemas, servidores y redes.</>,
          <>Administración de usuarios y resolución de incidencias técnicas.</>,
          <>Elaboración de documentación técnica y soporte a usuarios.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Formación Académica",
    institutions: [
      {
        name: "IES Leonardo Da Vinci",
        description: (
          <>Desarrollo de Aplicaciones Web (Grado Superior) | Septiembre 2024 – Junio 2026</>
        ),
      },
      {
        name: "IES El Cañaveral",
        description: (
          <>Sistemas Microinformáticos y Redes (Grado Medio) | Septiembre 2022 – Junio 2024</>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "Backend",
        description: (
          <>
            Desarrollo de APIs y servicios backend robustos y escalables, gestionando bases de datos
            y la persistencia de la información.
          </>
        ),
        tags: [
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "APIs REST",
            icon: "globe",
          },
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
        ],
        images: [],
      },
      {
        title: "Frontend",
        description: (
          <>
            Creación de interfaces de usuario modernas, responsivas e interactivas utilizando
            frameworks y tecnologías de vanguardia.
          </>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwindcss",
          },
        ],
        images: [],
      },
      {
        title: "Otras Habilidades",
        description: (
          <>
            Control de versiones, contenedores, administración de sistemas y entornos de desarrollo.
          </>
        ),
        tags: [
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "GitHub",
            icon: "github",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Linux",
            icon: "linux",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Escribiendo sobre desarrollo y tecnología...",
  description: `Lee lo que ${person.name} ha estado haciendo recientemente`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Proyectos",
  title: `Proyectos – ${person.name}`,
  description: `Proyectos de diseño y desarrollo de ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galería",
  title: `Galería de fotos – ${person.name}`,
  description: `Una colección de fotos de ${person.name}`,
  // Imágenes de la galería
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
