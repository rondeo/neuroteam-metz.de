import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import ImageBanner from "../components/SharedComponents/ImageBanner"

export default function BasicPageTemplate(props) {
  return (
    <Layout>
      <ImageBanner
        image={props.data.contentfulBasicPage.image}
        background={props.data.contentfulBasicPage.image.fluid.src}
      />

      <div>
        {documentToReactComponents(
          props.data.contentfulBasicPage.textContent.json
        )}
      </div>
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
