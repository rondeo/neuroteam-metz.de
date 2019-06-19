import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import TeamMember from "./TeamMember"
import { FlexContainer } from "../SharedComponents/Containers"
// import splitEvery from "ramda/src/splitEvery"

const Container = styled.div`
  display: flex;
  max-width: 1400px;
  flex-wrap: wrap;
  justify-content: center;
`

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

  return (
    <FlexContainer>
      <Container>
        {data.teammember.edges.map(({ node: teammember }) => {
          return <TeamMember key={teammember.id} teammember={teammember} />
        })}
      </Container>
    </FlexContainer>
  )
}

export default TeamMembers
