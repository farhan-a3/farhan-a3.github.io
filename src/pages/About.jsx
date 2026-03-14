import PageLayout from '../components/PageLayout';

const cityImages = [
  {
    src: 'https://static.wixstatic.com/media/de0c29_e8953d47d94946a2b2fbcc5057f0e397~mv2.png/v1/fill/w_400,h_600,al_c,q_85,enc_avif,quality_auto/de0c29_e8953d47d94946a2b2fbcc5057f0e397~mv2.png',
    alt: 'Toronto skyline',
  },
  {
    src: 'https://static.wixstatic.com/media/de0c29_33f7b0cbbbdb49b8b517338274a058e0~mv2.png/v1/fill/w_400,h_480,al_c,q_85,enc_avif,quality_auto/de0c29_33f7b0cbbbdb49b8b517338274a058e0~mv2.png',
    alt: 'Modern architecture in Toronto',
  },
];

const pcImages = [
  {
    src: 'https://static.wixstatic.com/media/de0c29_5d5d37b949074c80bfddf1864fbab2f8~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,enc_avif,quality_auto/de0c29_5d5d37b949074c80bfddf1864fbab2f8~mv2.jpg',
    alt: 'Custom PC build side view',
  },
  {
    src: 'https://static.wixstatic.com/media/de0c29_d3e38e3cca6f4f1895a39bf4019393d7~mv2.jpg/v1/fill/w_468,h_623,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/gamingpc2.jpg',
    alt: 'Custom PC build front view',
  },
];

const paragraphs = [
  `Hi! I'm Farhan Ahmed, a fourth year Computer Science student at York University's Lassonde School of Engineering. I have always been intrigued by technology, programming, and gaming. My curiosity for how technology worked as a kid quickly turned into a genuine passion for computer science and programming, a field where logic and creativity reign supreme. My unique strengths lie in my problem solving abilities and my ability to clearly explain complex concepts not only to myself but to others around me.`,
  `I was born and raised in Toronto, a lively city known for its diversity and abundance of opportunities. Growing up here exposed me to many different kinds of people and cultures, helping me to develop an open mind. I was fortunate to have a supportive family and live in a stable neighborhood which played a big role in shaping who I am today. These experiences coming up have been instrumental in influencing how I navigate both academic and personal challenges.`,
  `My journey at York University started with the desire to study at a school that values both academic knowledge and practical experience. I was drawn to Lassonde because of how much they focus on innovation, co-op opportunities, and promoting community engagement. I chose Computer Science in particular because of my passion for technology and coding. I desire to create software that has a positive impact on society. My inherent ability to solve problems and my enthusiasm for boundless learning have been the two greatest contributors to my success so far in both work and study.`,
  `My greatest source of inspiration has been my dad, whose consistent strength, wisdom, and encouragement taught me that success stems from dedication and perseverance rather than mere talent. His unwavering support has helped me face and overcome numerous challenges, pushing me to always strive to be the best version of myself in all aspects of life.`,
  `The artifacts below are photos of the custom PC I recently built from scratch. To me it’s not just a piece of hardware, it’s a passion project that brought together my interests in technology and gaming. The build process took a lot of patience and creativity as I searched for compatible parts, balanced performance and budget, and troubleshooted unexpected issues along the way. Every challenge pushed me to learn something new, which mirrors my ongoing journey as a Computer Science student. Building this computer showed me that when I'm passionate about something and really put my mind to it, I can create something genuinely rewarding, and that keeps me excited to continue exploring new ideas.`,
];

function About() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-[1650px] px-6 pt-6 sm:px-8 lg:px-10">
        <div className="grid gap-8 border-b border-[#f6f3ed]/55 pb-10 md:grid-cols-[154px_minmax(0,1fr)] md:items-center md:gap-10">
          <img
            src="https://static.wixstatic.com/media/de0c29_c1abf838a2184b68bbd9acd483f0c8b1~mv2.jpg/v1/fill/w_154,h_154,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/de0c29_c1abf838a2184b68bbd9acd483f0c8b1~mv2.jpg"
            alt="Farhan Ahmed portrait"
            className="h-[154px] w-[154px] object-cover"
          />

          <div>
            <h1 className="text-[clamp(3rem,5vw,5.4rem)] font-black uppercase italic leading-[0.95] tracking-tight text-[#f6f3ed]">
              Farhan Ahmed
            </h1>
            <p className="mt-4 text-[1.25rem] uppercase tracking-wide text-[#f6f3ed] sm:text-[1.45rem]">
              4th Year Computer Science Student
            </p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-[1650px] px-6 py-10 sm:px-8 lg:px-10"
      >
        <div className="grid gap-14 xl:grid-cols-[minmax(0,1.2fr)_400px] xl:gap-20">
          <div className="max-w-[860px]">
            <h2 className="mb-5 text-[1.5rem] font-bold uppercase tracking-wide text-[#f6f3ed]">
              About Me
            </h2>

            <div className="space-y-8 text-[1.2rem] leading-[1.55] text-[#f6f3ed] sm:text-[1.28rem]">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6 xl:pt-8">
            {cityImages.map((image) => (
              <div key={image.src} className="w-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1650px] px-6 pb-2 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-start md:justify-items-center">
          {pcImages.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="w-full max-w-[430px] object-cover"
            />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

export default About;
