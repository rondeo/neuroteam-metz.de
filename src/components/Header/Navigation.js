import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const getNavigationLink = graphql`
  {
    navigationlink: allContentfulNavigation {
      edges {
        node {
          navigationLink {
            ... on ContentfulNavigationItem {
              id
              label
              link {
                ... on Node {
                  ... on ContentfulBasicPage {
                    slug
                    title
                  }
                  ... on ContentfulContactPage {
                    title
                    slug
                  }
                  ... on ContentfulOurTeamPage {
                    title
                    slug
                  }
                  ... on ContentfulArzteTherapeutenPage {
                    title
                    slug
                  }
                  ... on ContentfulOnlineRezeptbestellungPage {
                    title
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

function Navigation() {
  const data = useStaticQuery(getNavigationLink)
  console.log(data)
  return data.navigationlink.edges[0].node.navigationLink.map(node => (
    <ul>
      {node.label}
      {node.link.map(link => (
        <Link to={link.slug}>
          <li>{link.title}</li>
        </Link>
      ))}
    </ul>
  ))
}

export default Navigation
