function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3.75 6.75h16.5v10.5H3.75z" />
      <path d="m4.5 7.5 7.5 6 7.5-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm-1.69-1.55c1.08 0 1.94-.8 1.94-1.8-.02-1.03-.86-1.8-1.92-1.8S3.31 4.12 3.31 5.15c0 1 .84 1.8 1.92 1.8h.02Zm4.17 13.05h3.38v-6.42c0-.34.02-.68.12-.92.27-.67.88-1.37 1.9-1.37 1.34 0 1.88 1.03 1.88 2.53V20h3.38v-6.57c0-3.52-1.88-5.16-4.39-5.16-2.03 0-2.93 1.12-3.43 1.9h.02V8.5H9.42c.04 1.08 0 11.5 0 11.5Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56 0-.28-.01-1.19-.02-2.15-3.2.69-3.88-1.36-3.88-1.36-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.19 1.18a11.1 11.1 0 0 1 5.8 0c2.22-1.49 3.19-1.18 3.19-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.05.78 2.13 0 1.54-.01 2.77-.01 3.15 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function Footer() {
  const socialLinks = [
    {
      href: 'mailto:farhan.a3hd@gmail.com',
      label: 'Email Farhan',
      icon: <MailIcon />,
    },
    {
      href: 'https://www.linkedin.com/in/farhan-ahmed-37124a23b/',
      label: 'Farhan on LinkedIn',
      icon: <LinkedInIcon />,
    },
    {
      href: 'https://github.com/farhan-a3',
      label: 'Farhan on GitHub',
      icon: <GitHubIcon />,
    },
  ];

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="mt-16 border-t border-[#f6f3ed]/55"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-10 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-end">
          <div className="text-sm text-[#f6f3ed] lg:self-end">
            © 2025 by Farhan Ahmed
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                  aria-label={link.label}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f6f3ed] text-[#010127] transition-transform hover:-translate-y-1"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <a
              href="mailto:farhan.a3hd@gmail.com"
              className="text-sm text-[#f6f3ed]/90 hover:text-[#b7ff15]"
            >
              farhan.a3hd@gmail.com
            </a>
          </div>

          <div className="flex items-end justify-start lg:justify-end">
            <button
              type="button"
              onClick={handleBackToTop}
              className="flex items-center gap-3 bg-transparent p-0 text-sm font-semibold tracking-wide text-[#f6f3ed] hover:text-[#b7ff15]"
            >
              <span className="text-xl leading-none">↑</span>
              <span>BACK TO TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
