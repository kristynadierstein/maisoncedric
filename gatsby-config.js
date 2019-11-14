/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Maison Cédric`,
    siteUrl: `https://maisoncedric.netlify.com/`,
    description: `Sélection éclectique de pièces du XXème siècle`,
  },
  plugins: [
    /* Your site config here */
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: 'appK4wTXeUcuTawQa',
            tableName: 'All'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `fr`],
        // language file path
        defaultLanguage: `fr`,
        // option to redirect to `/fr` when connecting `/`
        redirect: true,
      },
    },
  ]
}
