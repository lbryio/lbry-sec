export const m = {
  faq: 'faq',
  help_lbry: 'help_lbry',
  save_crypto: 'save_crypto',
  go_home: 'go_home',
  og_description: 'og_description',
  landing_subtitle: 'landing_subtitle',
  landing_action: 'landing_action',
  summary_title: 'summary_title',
  summary_subtitle: 'summary_subtitle',
  p1_a: 'p1_a',
  p1_b: 'p1_b',
  p2_a: 'p2_a',
  p2_b: 'p2_b',
  share_story_title: 'share_story_title',
  share_story_subtitle: 'share_story_subtitle',
  petition_title: 'petition_title',
  petition_subtitle: 'petition_subtitle',
  petition_link: 'petition_link',
  read_more_title: 'read_more_title',
  read_more_subtitle: 'read_more_subtitle',
  read_more_link: 'read_more_link',
  email_title: 'email_title',
  email_subtitle: 'email_subtitle',
  email_input_label: 'email_input_label',
  email_input_button: 'email_input_button',
  email_input_button_loading: 'email_input_button_loading',
  email_success: 'email_success',
  email_error: 'email_error',
};

const en = {
  faq: 'VIEW FAQ',
  help_lbry: 'HELP LBRY',
  save_crypto: 'SAVE CRYPTO',
  go_home: 'Go Home',
  og_description:
    'The SEC doesn’t understand blockchain. The claims made in SEC vs. LBRY would destroy the United States cryptocurrency industry.',

  landing_subtitle:
    'The SEC doesn’t understand blockchain. The claims made in SEC vs. LBRY would destroy the United States cryptocurrency industry.',
  landing_action: 'Help us educate the SEC',

  summary_title: 'What’s the big deal?',
  summary_subtitle:
    'The entire blockchain industry is at risk in the United States. Big tech and Wall St. would have more power and many people could lose their jobs!',

  p1_a:
    'The SEC is advancing an aggressive and disastrous new standard that would make almost all blockchain tokens securities.',
  p1_b:
    'Classifying all actively-developed blockchain tokens as securities will be a bureaucratic nightmare for United States residents and businesses operating in the US.',

  p2_a:
    'Under this new standard, almost any token is a security, including the previously safe Ethereum. The nature of technology is that it is never "finished"!',
  p2_b:
    'This change will make it much harder for startups to form new blockchain companies, cause massive job loss, and stunt the development of a critical new technology. All the while, big tech and Wall St. prosper!',

  share_story_title: 'Share this story',
  share_story_subtitle: 'Post to social media to spread awareness.',

  petition_title: 'Sign the petition',
  petition_subtitle:
    'Tell the SEC that cryptocurrency must remain legal and free.',
  petition_link: 'Add your signature',

  read_more_title: 'Read more',
  read_more_subtitle: 'Read our case guide and FAQ',
  read_more_link: 'here',

  email_title: 'Stay Informed',
  email_subtitle: 'We will keep you up to date with the latest on this case.',
  email_input_label: 'Email',
  email_input_button: 'Submit',
  email_input_button_loading: 'Submitting',
  email_success: 'Thank you! We will keep you in the loop.',
  email_error: 'Sorry, there was an error. Please try again.',
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
