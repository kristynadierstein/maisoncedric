const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const productPage = path.resolve(`src/templates/produit.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query MyQuery {
      allAirtable(filter: {data: {Images: {elemMatch: {size: {gt: 1}}}}}) {
        nodes {
          data {
            ID
            Categories
            Sub_Categories
            Created_Time
            Prix_de_vente
            Statut
            Titre_de_l_annonce__FR_
            Titre_de_l_annonce__EN_
            Images {
              url
            }
          }
        }
      }
    }`, { limit: 1000 }).then(result => {
      if (result.errors) {
        throw result.errors
      }

      // Create blog post pages.
      result.data.allAirtable.nodes.forEach(node => {
        createPage({
          // Path for this page — required
          path: `/produit/${node.data.ID}`,
          component: productPage,
          context: {
            id: node.data.ID,
          },
        })
      })
    }
  )
}
