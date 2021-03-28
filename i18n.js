export const m = {
  title: 'title',
  faq: 'faq',
  help_lbry: 'help_lbry',
  save_crypto: 'save_crypto',
};

const en = {
  title: 'LBRY, THE SEC, & THE FUTURE OF CRYPTO',
  faq: 'VIEW FAQ',
  help_lbry: 'HELP LBRY',
  save_crypto: 'SAVE CRYPTO',
};

const es = {
  title: 'Hola amigo',
};

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
