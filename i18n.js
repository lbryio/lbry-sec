export const m = { title: 'title' };

const en = {
  title: 'LBRY, THE SEC, & THE FUTURE OF CRYPTO',
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
