module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    themeColor: "#ec008c"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui"
        // icon: "src/images/gatsby-icon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Varela Round", "Montserrat"]
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    }
  ]
};
