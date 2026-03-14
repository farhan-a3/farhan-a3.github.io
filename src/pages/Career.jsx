import PageLayout from '../components/PageLayout';

const education = {
  school: 'York University',
  years: '2021 - 2026 (expected)',
  degree: 'Honours Bachelor of Science in Computer Science',
  gpa: '3.5/4.0',
  coursework:
    'Data Structures, Algorithm Design & Analysis, Web Development, Object Oriented Programming, Software Design, Database Management Systems, Software Tools, Operating Systems, UI/UX Design',
};

const experiences = [
  {
    title: 'QA Automation Engineer Coop | theScore',
    dates: 'January 2025 - Present',
    bullets: [
      'Developed and maintained automated test suites in Kotlin, executed regression test cycles, and resolved test failures to enhance test coverage, ensure stable app releases, and support reliable CI/CD pipeline performance',
    ],
  },
  {
    title: 'Data Engineer Intrapreneur | Comparastore',
    dates: 'May 2023 - June 2023',
    bullets: [
      'Containerized and deployed an end-to-end ELT pipeline using Docker with Airbyte, Airflow, and Superset, extracting website data from Google Analytics into Postgres and visualizing insights through interactive dashboards',
    ],
  },
  {
    title: 'Supplemental Instructor | York University',
    dates: 'Sept. 2022 - Apr. 2023',
    bullets: [
      'Led bi-weekly study sessions for Discrete Mathematics and Linear Algebra, supporting student learning through collaborative review, concept reinforcement, and promotion of active study strategies',
    ],
  },
];

const resumePreview =
  'https://static.wixstatic.com/media/de0c29_8c6e396f886546b5a0d65a7e831df866~mv2.jpg/v1/fill/w_667,h_865,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Farhan%20Ahmed%20-%20Resume_page-0001.jpg';

const resumePdf =
  'https://de0c29d0-e7d9-4dc4-b425-d59e106e9591.usrfiles.com/ugd/de0c29_552bde457f9f402db981a4ab2bc4311e.pdf';

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 3.75h7l5 5V20.25H7z" />
      <path d="M14 3.75v5h5" />
      <path d="M9 14.25h6" />
      <path d="M9 17.25h6" />
    </svg>
  );
}

function Career() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-[1650px] px-6 pt-10 sm:px-8 lg:px-10 lg:pt-14">
        <div className="border-b border-[#f6f3ed]/55 pb-10">
          <h1 className="text-[clamp(3.1rem,5vw,5.4rem)] font-black uppercase italic leading-[0.95] tracking-tight text-[#f6f3ed]">
            Career
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1650px] px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid gap-14 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.72fr)] xl:gap-20">
          <div className="max-w-[760px]">
            <div>
              <h2 className="text-[1.8rem] font-bold uppercase tracking-wide text-[#f6f3ed]">
                Education
              </h2>

              <div className="mt-5 text-[#f6f3ed]">
                <p className="text-[1.45rem] leading-[1.45]">
                  <span className="font-bold">{education.school}</span>
                  <span> | {education.years}</span>
                </p>

                <p className="mt-1 text-[1.25rem] leading-[1.45]">
                  <span className="font-bold">{education.degree}</span>
                  <span> | GPA: {education.gpa}</span>
                </p>

                <p className="mt-8 text-[1.2rem] leading-[1.5]">
                  <span className="font-bold">Relevant Coursework</span>
                  <span>: {education.coursework}</span>
                </p>
              </div>
            </div>

            <div className="mt-14">
              <h2 className="text-[1.8rem] font-bold uppercase tracking-wide text-[#f6f3ed]">
                Experience
              </h2>

              <div className="mt-5 space-y-10">
                {experiences.map((experience) => (
                  <div key={experience.title}>
                    <h3 className="text-[1.45rem] font-bold leading-[1.4] text-[#f6f3ed]">
                      {experience.title}
                    </h3>

                    <p className="mt-1 text-[1.2rem] leading-[1.45] text-[#f6f3ed]">
                      {experience.dates}
                    </p>

                    <ul className="mt-3 list-disc pl-7 text-[1.2rem] leading-[1.55] text-[#f6f3ed] marker:text-[#f6f3ed]">
                      {experience.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start xl:items-center xl:pt-4">
            <img
              src={resumePreview}
              alt="Resume preview"
              className="w-full max-w-[470px] bg-white object-cover shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
            />

            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-10 inline-flex items-center gap-3 border border-[#b7ff15] px-7 py-4 text-[1.1rem] font-medium leading-[1.25] text-[#b7ff15] transition-colors hover:bg-[#b7ff15] hover:text-[#010127]"
              aria-label="Farhan Ahmed Resume PDF"
            >
              <FileIcon />
              <span>Farhan Ahmed - Resume.pdf</span>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Career;
