import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import ImageBanner from "../components/SharedComponents/ImageBanner"
import { FlexContainer } from "../components/SharedComponents/Containers"

const TextContent = styled.div`
  padding: 2rem;
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;

    margin: 2rem 0px;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
  }
`

export default function BasicPageTemplate(props) {
  return (
    <Layout>
      <ImageBanner
        image={props.data.contentfulBasicPage.image}
        background={props.data.contentfulBasicPage.image.fluid.src}
      />

      <FlexContainer columns>
        <TextContent>
          {documentToReactComponents(
            props.data.contentfulBasicPage.textContent.json
          )}
        </TextContent>
      </FlexContainer>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulBasicPage(id: { eq: $id }) {
      id
      slug
      pageTitle
      image {
        fluid(maxWidth: 2500, quality: 90) {
          ...GatsbyContentfulFluid
        }
      }
      textContent {
        json
      }
    }
  }
`
