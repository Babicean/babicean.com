/** Everything about the person behind the site, in one place. */
export const site = {
  name: 'Brendon Babicean',
  tagline: ['AI and cybersecurity', 'QUT'],
  location: ['Brisbane', 'AU'],
  description:
    'Brendon Babicean is an IT student at QUT, double-majoring in Cybersecurity and AI. Projects, GitHub and contact.',

  // Switch to hello@babicean.com once Cloudflare Email Routing is set up
  // (README → Later). Until then this address actually receives mail.
  email: 'dev.babicean@gmail.com',

  links: [
    { label: 'GitHub', meta: 'github.com/Babicean', href: 'https://github.com/Babicean' },
    {
      label: 'LinkedIn',
      meta: 'Brendon Babicean',
      href: 'https://www.linkedin.com/in/brendon-babicean-013622410',
    },
  ],
} as const;
