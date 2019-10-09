/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config()

module.exports = {
  plugins: [
    /* Your site config here */
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-airtable',
      options: process.env.AIRTABLE_API_KEY,
      tables: [
        {
          baseId: 'tblZ5F3dxY0KDSKRB',
          tableName: 'All',
        },
      ],
    },
  ],
}
