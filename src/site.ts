/** Everything about the person behind the site, in one place. */
export const site = {
  name: 'Brendon Babicean',
  /** Used in the homepage <title>. */
  title: 'Software, AI and cybersecurity',
  description:
    'Brendon Babicean is an IT student at QUT studying Cybersecurity and AI, building mobile apps in Brisbane. Projects, reading and contact.',

  /** Bottom-left of every page. */
  quote: 'Growth mindset',

  // Switch to hello@babicean.com once Cloudflare Email Routing is set up
  // (README → Later). Until then this address actually receives mail.
  email: 'dev.babicean@gmail.com',

  /** The About sidebar. */
  studying: {
    degree: 'Bachelor of Information Technology',
    school: 'Queensland University of Technology',
    detail: 'Full-time · Cybersecurity and AI majors',
  },
  building: ['React', 'TypeScript', 'Capacitor'],
  location: ['Brisbane', 'Australia'],

  links: {
    github: 'https://github.com/Babicean',
    linkedin: 'https://www.linkedin.com/in/brendon-babicean-013622410',
  },
} as const;
