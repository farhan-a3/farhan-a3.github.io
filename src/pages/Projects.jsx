import PageLayout from '../components/PageLayout';

const projects = [
  {
    title: 'NEXUS - AI Learning Constellation App',
    stack: 'React, Node.js, Three.js, Gemini API',
    image: '/projects/nexus.png',
    alt: 'NEXUS AI Learning Constellation App screenshot',
    bullets: [
      'Built a hackathon AI learning platform that generates interactive concept dependency maps from user topics using React, Three.js, and Gemini.',
      'Developed backend evaluation flows for spoken explanations and AI grading, unlocking new concepts as users demonstrated understanding.',
    ],
  },
  {
    title: 'E-commerce Web App',
    stack: 'React, Node.js, Express, Prisma, SQLite, Docker',
    image: '/projects/ecommerce-web-app.png',
    alt: 'E-commerce Web App screenshot',
    bullets: [
      'Built a full-stack e-commerce platform with product browsing, shopping cart, and order management features across a React and Express stack.',
      'Designed REST APIs, Prisma database models, and Dockerized the app for more consistent development and deployment.',
    ],
  },
  {
    title: 'AI Image Generator',
    stack: 'React, JavaScript, CSS, REST API',
    image: '/projects/ai-image-generator.png',
    alt: 'AI Image Generator screenshot',
    bullets: [
      'Built a React web app that turns text prompts into AI-generated images, letting users create and view results in real time.',
      'Integrated external image APIs and asynchronous request handling, then designed a polished responsive UI for a smooth experience.',
    ],
  },
  {
    title: 'Library Management System',
    stack: 'Java, Swing',
    image:
      'https://static.wixstatic.com/media/de0c29_0beddfe0167749e5a4f1a51771170c34~mv2.png/v1/crop/x_35,y_0,w_713,h_525/fill/w_456,h_336,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/library%20management%20system.png',
    alt: 'Library Management System project screenshot',
    bullets: [
      'Co-developed a Java Swing-based Library Management System for YorkU to manage books, users, and transactions.',
      'Implemented core features using object-oriented programming and Java Collections in a collaborative team environment.',
    ],
  },
  {
    title: 'Leaderboards Discord Bot',
    stack: 'JavaScript, Node.js',
    image:
      'https://static.wixstatic.com/media/de0c29_8e8f55503aae45c0afe2d3ab5e2f5fdd~mv2.jpg/v1/crop/x_0,y_118,w_900,h_663/fill/w_456,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/discord%20bot.jpg',
    alt: 'Leaderboards Discord Bot project screenshot',
    bullets: [
      'Developed a Discord bot using Node.js and Discord.js to support dynamic leaderboard features.',
      'Implemented ranking functionality that tracked and displayed user standings based on server activity and statistics.',
    ],
  },
  {
    title: 'Weather App',
    stack: 'HTML, CSS, JavaScript',
    image:
      'https://static.wixstatic.com/media/de0c29_a2c8e8d25e374e6f8d4d34775aa76afe~mv2.png/v1/crop/x_0,y_218,w_610,h_449/fill/w_456,h_336,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/weather%20app.png',
    alt: 'Weather App project screenshot',
    bullets: [
      'Developed a website to display live weather information for user-inputted locations.',
      'Used the OpenWeatherMap API to fetch and present temperature, humidity, and wind data in a clear UI.',
    ],
  },
  {
    title: 'Big Integer Library',
    stack: 'C',
    image:
      'https://static.wixstatic.com/media/de0c29_c6ca0dc3f2ec44469c4e4456ff4ec0d9~mv2.jpg/v1/crop/x_0,y_81,w_612,h_451/fill/w_456,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/istockphoto-615714450-612x612.jpg',
    alt: 'Big Integer Library project screenshot',
    bullets: [
      'Built a Big Integer library in C to handle arithmetic on values larger than built-in numeric types.',
      'Implemented carry handling, string parsing, and memory management for accurate large-number computation.',
    ],
  },
  {
    title: 'Number Guessing Game',
    stack: 'Android Studio, Java, JUnit, XML',
    image:
      'https://static.wixstatic.com/media/de0c29_0fa84fa6c28b4944b80278b29d31e16e~mv2.png/v1/crop/x_0,y_108,w_488,h_359/fill/w_456,h_336,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/gtn.png',
    alt: 'Number Guessing Game project screenshot',
    bullets: [
      'Developed an Android app where users guess a randomly generated number across multiple difficulty levels.',
      'Implemented the UI and game logic using Java, XML layouts, and supporting Android Studio tooling.',
    ],
  },
  {
    title: 'Terminal Wordle Game',
    stack: 'C',
    image:
      'https://static.wixstatic.com/media/de0c29_344715c3ffe84bfbb964e11b238bf742~mv2.jpg/v1/crop/x_0,y_95,w_720,h_531/fill/w_456,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1699448130785.jpg',
    alt: 'Terminal Wordle Game project screenshot',
    bullets: [
      'Developed a terminal-based Wordle game in C with user input, colored feedback, and limited attempts.',
      'Used file I/O, string manipulation, and control flow to recreate the core gameplay mechanics.',
    ],
  },
];

function ProjectCard({ project }) {
  return (
    <article className="w-full max-w-[360px] overflow-hidden bg-[#421b25] text-[#f6f3ed]">
      <img
        src={project.image}
        alt={project.alt}
        className="h-[235px] w-full object-cover"
      />

      <div className="px-7 py-6">
        <h2 className="text-[1.7rem] font-bold leading-[1.15]">{project.title}</h2>
        <p className="mt-1 text-[1.05rem] text-[#f6f3ed]">{project.stack}</p>

        <ul className="mt-5 list-disc space-y-2 pl-5 text-[1rem] leading-[1.45] marker:text-[#f6f3ed]">
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-[1800px] px-6 pt-10 sm:px-8 lg:px-10 lg:pt-14">
        <div className="border-b border-[#f6f3ed]/55 pb-10">
          <h1 className="text-[clamp(3.1rem,5vw,5.4rem)] font-black uppercase italic leading-[0.95] tracking-tight text-[#f6f3ed]">
            Projects
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-6 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-[30px] sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 2xl:items-start 2xl:justify-items-start">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

export default Projects;
