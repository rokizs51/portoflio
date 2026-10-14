/**
 * Site-wide identity and links. The one file to edit for personalizing
 * the whole site. Set a social key to null to hide its footer icon.
 */
export const site = {
  name: 'Roki Zain S',
  /** Shown inside the circular badge and the favicon. Swap for a photo later if you prefer. */
  monogram: 'RZ',
  description: 'Roki Zain S — personal site and a public log of what I’m learning.',
  /**
   * TODO: your real domain before deploying (canonical links, RSS, sitemap, OG).
   */
  url: 'https://example.com',
  nav: [
    { key: 'about', label: 'About', href: '/' },
    { key: 'writing', label: 'Writing', href: '/writing/' },
  ] as const,
  social: {
    email: 'mailto:zainsroki@gmail.com',
    x: null, // set a URL here to show the X/Twitter icon
    github: 'https://github.com/rokizs51',
    linkedin: 'https://www.linkedin.com/in/roki-zain',
  },
} as const;
