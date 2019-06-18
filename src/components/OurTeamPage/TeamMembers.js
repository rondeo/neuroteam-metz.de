import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import TeamMember from "./TeamMember"
import { FlexContainer } from "../SharedComponents/Containers"
// import splitEvery from "ramda/src/splitEvery"

const getTeamMembers = graphql`
  {
    teammember: allContentfulTeamMember(
      filter: { node_locale: { eq: "de-DE" } }
    ) {
      edges {
        node {
          photo {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          name
          id
        }
      }
    }
  }
`

function TeamMembers() {
  const data = useStaticQuery(getTeamMembers)
  // {
  //   splitEvery(3, data.teammember.edges).map(teammembers => {
  //     return (
  //       <FlexContainer>
  //         {teammembers.edges.map(({ node: teammember }) => {
  //           return <TeamMember key={teammember.id} teammember={teammember} />
  //         })}
  //       </FlexContainer>
  //     )
  //   })
  // }
}
export default TeamMembers
