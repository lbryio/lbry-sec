module.exports = {
  async redirects() {
    return [
      {
        source: '/faq',
        destination: 'https://odysee.com/@OdyseeHelp/faq',
        permanent: false,
      },
    ];
  },
};
