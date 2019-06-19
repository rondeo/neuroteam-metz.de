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
              label
              link {
                ... on Node {
                  ... on ContentfulBasicPage {
                    slug
                  }
                  ... on ContentfulContactPage {
                    slug
                  }
                  ... on ContentfulOurTeamPage {
                    slug
                  }
                  ... on ContentfulArzteTherapeutenPage {
                    slug
                  }
                  ... on ContentfulOnlineRezeptbestellungPage {
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
    navigationitem: allContentfulNavigationItem {
      edges {
        node {
          id
          label
          link {
            ... on Node {
              ... on ContentfulContactPage {
                slug
                mainHeading
              }
            }
            ... on ContentfulBasicPage {
              slug
              pageTitle
            }
            ... on ContentfulArzteTherapeutenPage {
              mainHeading
              slug
            }
            ... on ContentfulOurTeamPage {
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
`

function Navigation() {
  const data = useStaticQuery(getNavigationLink)
  console.log(data)
  return <div></div>
}

export default Navigation
