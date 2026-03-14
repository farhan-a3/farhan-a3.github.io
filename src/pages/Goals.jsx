import PageLayout from '../components/PageLayout';

const goalSections = [
  {
    title: 'Critical Thinking and Problem-Solving Skills',
    goals: [
      'By May 30, 2025, I will improve my ability to solve LeetCode problems (and possibly with multiple solutions). To achieve this, I will consistently attempt LeetCode problems everyday, brainstorming various approaches before starting to code, and consult friends or online resources if needed.',
      'By April 30, 2025, I will try to ask at least one clarifying question when I sit down with my manager at my co-op placement. I will keep note of the useful insights I get from my questions, ensuring that I can work effectively and bring more value to the company.',
    ],
  },
  {
    title: 'Curiosity and Imagination',
    goals: [
      'By May 30, 2025, I will experiment with at least one new technology or coding library outside of my regular work assignments every month, for example a new AI framework. I will note what I tried, what I learned, and how I can apply it to future projects.',
      'By April 30, 2025, I will participate in at least one innovation day or hackathon at my co-op, presenting a new innovative idea or prototype. I will get feedback from my managers and peers and work out and submit a final concept.',
    ],
  },
  {
    title: 'Initiative-Taking and Entrepreneurial Skills',
    goals: [
      'By June 30, 2025, I will develop a personal software project independent of my coursework. I will spend at least two hours a week on this side project and post regular progress updates in a GitHub repository, showing my initiative and entrepreneurial spirit.',
      'Within the first four months of my co-op, I will find at least one repetitive or inefficient task/process and propose a potential solution to improve our processes. I will submit this proposal to my supervisor and work with the team to implement and test the solution if it is approved.',
    ],
  },
];

function Goals() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-[1650px] px-6 pt-10 sm:px-8 lg:px-10 lg:pt-14">
        <div className="border-b border-[#f6f3ed]/55 pb-10">
          <h1 className="text-[clamp(3.1rem,5vw,5.4rem)] font-black uppercase italic leading-[0.95] tracking-tight text-[#f6f3ed]">
            Smart Goals
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1650px] px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[930px]">
          <div className="space-y-12">
            {goalSections.map((section) => (
              <div
                key={section.title}
                className="grid gap-8 md:grid-cols-[240px_minmax(0,1fr)] md:gap-10"
              >
                <div className="pt-1">
                  <h2 className="max-w-[220px] text-[1.9rem] font-normal leading-[1.15] text-[#f6f3ed]">
                    {section.title}
                  </h2>
                </div>

                <div className="border-l border-[#f6f3ed]/45 pl-6 text-[#f6f3ed] sm:pl-8">
                  <div className="space-y-10">
                    {section.goals.map((goal) => (
                      <p
                        key={goal}
                        className="text-[1.05rem] leading-[1.9] sm:text-[1.1rem]"
                      >
                        {goal}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Goals;
