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
    Soy Said, un <Text as="span" size="xl" weight="strong">Desarrollador Web Full Stack</Text> apasionado por crear <br /> aplicaciones web innovadoras con tecnologías modernas.
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
        Said es un desarrollador web Full Stack basado en España, apasionado por crear 
        aplicaciones web modernas y funcionales. Su trabajo abarca desde interfaces de usuario 
        intuitivas hasta sistemas backend robustos, siempre utilizando las tecnologías más actuales.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia Laboral",
    experiences: [
      {
        company: "DXC Technology",
        timeframe: "3 meses",
        role: "Técnico Informático",
        achievements: [
          <>
            Soporte técnico y mantenimiento de sistemas informáticos en entorno empresarial.
          </>,
          <>
            Resolución de incidencias y atención a usuarios en primera línea de soporte.
          </>,
        ],
        images: [],
      },
      {
        company: "Proyectos y Seguros S.A",
        timeframe: "3 meses",
        role: "Técnico Informático",
        achievements: [
          <>
            Gestión y mantenimiento de infraestructura IT de la empresa.
          </>,
          <>
            Implementación de soluciones tecnológicas para mejorar procesos internos.
          </>,
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
        name: "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
        description: <>Cursando actualmente - Segundo Año. Formación avanzada en desarrollo web, programación, bases de datos y tecnologías frontend y backend.</>,
      },
      {
        name: "Técnico en Sistemas Microinformáticos y Redes (SMR)",
        description: <>Completado. Conocimientos en administración de sistemas, redes informáticas, mantenimiento de equipos y soporte técnico.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "Frontend",
        description: (
          <>Desarrollo de interfaces de usuario modernas y responsivas con las últimas tecnologías web.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "HTML5",
            icon: "html5",
          },
          {
            name: "CSS3",
            icon: "css3",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwindcss",
          },
        ],
        images: [],
      },
      {
        title: "Backend",
        description: (
          <>Desarrollo de APIs y servicios backend robustos y escalables.</>
        ),
        tags: [
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Python",
            icon: "python",
          },
        ],
        images: [],
      },
      {
        title: "Bases de Datos",
        description: (
          <>Diseño y gestión de bases de datos relacionales y NoSQL.</>
        ),
        tags: [
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
        ],
        images: [],
      },
      {
        title: "Herramientas",
        description: (
          <>Control de versiones, entornos de desarrollo y contenedores.</>
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
            name: "VS Code",
            icon: "vscode",
          },
          {
            name: "Docker",
            icon: "docker",
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
