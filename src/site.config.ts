/**
 * Owner-editable site settings. Everything the pages link to or display
 * about the author lives here. Placeholders in [brackets] are intentional
 * until the owner fills them in.
 */
export const site = {
  name: 'Donatas Navidonskis',
  domain: 'navidonskis.com',
  url: 'https://navidonskis.com',
  location: 'Vilnius, Lithuania',
  bio: 'Staff Engineer running production infrastructure on Google Cloud. Independent consulting on GCP cost and CI/CD. Vilnius, Lithuania.',

  // Home page <title> and meta description.
  homeTitle: 'Donatas Navidonskis: a second opinion on your Google Cloud setup',
  homeDescription:
    'Cost, platform and architecture. Bring your bill, your diagram or just the question, and in thirty minutes you get the three things I would look at first.',

  // Default description for other pages, the RSS channel and JSON-LD.
  description:
    'Cloud cost, platform engineering and system design on Google Cloud, from someone who runs it in production.',

  // Contact. Set bookingUrl to the real scheduling link (Cal.com, Calendly, ...).
  bookingUrl: 'https://cal.com/navidonskis/30min',
  email: 'donatas@navidonskis.com',

  // Social links shown in the footer.
  github: 'https://github.com/navidonskis',
  linkedin: 'https://www.linkedin.com/in/navidonskis/',
} as const;

export type SiteConfig = typeof site;
