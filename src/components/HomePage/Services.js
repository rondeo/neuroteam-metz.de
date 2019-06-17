import React from "react"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import Service from "./Service"
import { FlexContainer } from "../SharedComponents/Containers"
const getServices = graphql`
  {
    service: allContentfulService(filter: { node_locale: { eq: "de-DE" } }) {
      edges {
        node {
          id
          slug
          serviceName
          serviceImage {
            file {
              url
            }
          }
          serviceDescription {
            json
          }
          buttonLabel
        }
      }
    }
  }
`

function Services() {
  const data = useStaticQuery(getServices)
  return (
    <FlexContainer>
      {data.service.edges.map(({ node: service }) => {
        return <Service key={service.id} service={service} />
      })}
    </FlexContainer>
  )
}

export default Services
