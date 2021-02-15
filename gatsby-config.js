module.exports = {
  siteMetadata: {
    title: 'hiking_PSD',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'PpvDtaGN3reluRiRzUOov1tTHK6kv8tbIK4XETwBAlA',
        spaceId: 'tf67omcacimj',
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        extensions: ['js', 'jsx'],
        exclude: ['node_modules', '.cache', 'public'],
        // Any eslint-webpack-plugin options below
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
  ],
};
