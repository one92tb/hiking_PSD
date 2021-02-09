module.exports = {
  siteMetadata: {
    title: "hiking_PSD",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "PpvDtaGN3reluRiRzUOov1tTHK6kv8tbIK4XETwBAlA",
        spaceId: "tf67omcacimj",
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
