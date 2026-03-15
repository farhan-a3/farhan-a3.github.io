const socialLinks = [
  {
    href: 'mailto:farhan.a3hd@gmail.com',
    label: 'Email Farhan',
    image:
      'https://static.wixstatic.com/media/de0c29_4f3d27be99854e35b2b0f0c4f6182837~mv2.png/v1/fill/w_106,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/de0c29_4f3d27be99854e35b2b0f0c4f6182837~mv2.png',
    sizeClass: 'h-[84px] w-[84px]',
  },
  {
    href: 'https://www.linkedin.com/in/farhan-ahmed-37124a23b/',
    label: 'Farhan on LinkedIn',
    image:
      'https://static.wixstatic.com/media/de0c29_30d7c80d03444590a35a401d97a4ab45~mv2.png/v1/fill/w_106,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/de0c29_30d7c80d03444590a35a401d97a4ab45~mv2.png',
    sizeClass: 'h-[84px] w-[84px]',
  },
  {
    href: 'https://github.com/farhan-a3',
    label: 'Farhan on GitHub',
    image:
      'https://static.wixstatic.com/media/de0c29_0e30be630d024b77a789c9136136857d~mv2.png/v1/fill/w_118,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/de0c29_0e30be630d024b77a789c9136136857d~mv2.png',
    sizeClass: 'h-[90px] w-[90px]',
  },
];

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="mt-16 border-t border-[#f6f3ed]/55">
      <div className="mx-auto max-w-[1600px] px-6 py-10 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-end">
          <div className="text-sm text-[#f6f3ed] lg:self-end">
            © 2026 by Farhan Ahmed
          </div>

          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                aria-label={link.label}
                className="transition-transform hover:-translate-y-1"
              >
                <img
                  src={link.image}
                  alt=""
                  className={`${link.sizeClass} object-contain`}
                />
              </a>
            ))}
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
