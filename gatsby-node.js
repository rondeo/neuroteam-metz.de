const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulBasicPage(filter: { node_locale: { eq: "de-DE" } }) {
        edges {
          node {
            node_locale
            id
            slug
            pageTitle
            image {
              fluid {
                src
              }
            }
            textContent {
              json
            }
          }
        }
      }
    }
  `).then(result => {
    // Object.values(result.data).reduce((acc,value)=>[...acc,...value.edges],[])
    result.data.allContentfulBasicPage.edges.forEach(({ node }) => {
      createPage({
        path: `${node.slug}`,
        component: path.resolve(`./src/templates/BasicPage.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id: node.id,
          locale: node.node_locale,
        },
      })
    })
  })
}
