import MatomoTracker from '@datapunt/matomo-tracker-js';

export const tracker = new MatomoTracker({
  urlBase: 'https://analytics.lbry.com/',
  siteId: 12,
});
