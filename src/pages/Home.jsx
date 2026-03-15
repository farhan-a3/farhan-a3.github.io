import PageLayout from '../components/PageLayout';

const videoPoster =
  'https://static.wixstatic.com/media/de0c29_eded70abe3284117bc8b101182e1062ff000.jpg/v1/fill/w_731,h_414,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/de0c29_eded70abe3284117bc8b101182e1062ff000.jpg';

const videoSource =
  'https://video.wixstatic.com/video/de0c29_eded70abe3284117bc8b101182e1062f/720p/mp4/file.mp4';

function Home() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-[1600px] px-6 pt-14 sm:px-8 lg:px-10 lg:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-20">
          <div className="max-w-[560px]">
            <p className="mb-3 text-[1.35rem] leading-none text-[#f6f3ed]">
              Hello, my name is
            </p>

            <h1 className="text-[clamp(4rem,9vw,8rem)] font-black uppercase italic leading-[0.88] tracking-tight text-[#f6f3ed]">
              FARHAN
              <br />
              AHMED
            </h1>

            <p className="mt-5 text-[1.55rem] uppercase tracking-wide text-[#f6f3ed] sm:text-[1.7rem]">
              Computer Science Student
            </p>
          </div>

          <div className="max-w-[630px] text-[1.3rem] leading-[1.55] text-[#f6f3ed] sm:text-[1.45rem] lg:pt-10">
            <p>
              Welcome! I'm Farhan, a passionate and driven programmer with experience 
              in software testing, AI-focused development, and data engineering. With 
              a background in tutoring and leadership, I enjoy breaking down complex 
              concepts and collaborating on innovative projects. Whether it's coding, 
              building practical software, or learning new technologies, I'm always eager 
              to grow and contribute. Feel free to explore my work and connect with me!
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[760px]">
          <h2 className="mb-6 text-center text-[2.6rem] font-black italic tracking-tight text-[#f6f3ed] sm:text-[3rem]">
            Why Me?
          </h2>

          <div className="overflow-hidden border border-black/30 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <video
              className="block aspect-video w-full bg-black object-cover"
              controls
              preload="none"
              poster={videoPoster}
            >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Home;
