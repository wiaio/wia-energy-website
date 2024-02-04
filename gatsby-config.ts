import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  pathPrefix: "/wia-energy-websit",
  siteMetadata: {
    title: `WIA-ENERGY-WEBSITE`,
    siteUrl: `https://www.yourdomain.tld`,
    author: `wia`, // Replace with your twitter handle
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `GA-TRACKING_ID`, // Replace with your Google Analytics tracking ID
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    // Use this plugin if you are deploying you site to Gatsby Cloud
    // To learn more, visit: https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-gatsby-cloud/
    // `gatsby-plugin-gatsby-cloud`,
  ],
};

export default config;
