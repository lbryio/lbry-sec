export const m = {
  title: 'title',
  faq: 'faq',
  help_lbry: 'help_lbry',
  save_crypto: 'save_crypto',
  go_home: 'go_home',
  og_description: 'og_description',
  landing_subtitle: 'landing_subtitle',
  landing_action: 'landing_action',
  summary_title: 'summary_title',
  summary_subtitle: 'summary_subtitle',
};

const en = {
  title: 'LBRY, THE SEC, & THE FUTURE OF CRYPTO',
  faq: 'VIEW FAQ',
  help_lbry: 'HELP LBRY',
  save_crypto: 'SAVE CRYPTO',
  go_home: 'Go Home',
  og_description:
    'The SEC doesn’t understand blockchain. The claims made in SEC vs. LBRY, Inc. would destroy the United States cryptocurrency industry.',
  landing_subtitle:
    'The SEC doesn’t understand blockchain. The claims made in SEC vs. LBRY would destroy the United States cryptocurrency industry.',
  landing_action: 'Help us educate the SEC',
  summary_title: 'What’s the big deal?',
  summary_subtitle:
    'The entire blockchain industry is at risk in the United States. Big tech and Wall St. would have more power and many people could lose their jobs!',
};

const es = {};

const languages = {
  es,
};

export function t(string, lang) {
  let val;

  if (languages[lang]) {
    val = languages[lang][string];
  }

  if (val) {
    return val;
  } else {
    return en[string];
  }
}
