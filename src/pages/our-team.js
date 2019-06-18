import React from "react"
import Layout from "../components/layout"
import TeamMembers from "../components/OurTeamPage/TeamMembers"
import { graphql, useStaticQuery } from "gatsby"
import HeaderContainer from "../components/SharedComponents/HeaderContainer"
import { FlexContainer } from "../components/SharedComponents/Containers"
const getOurPageContent = graphql`
  {
    contentfulOurTeamPage {
      mainHeading
      subheading
      introParagraph
    }
  }
`

function OurTeam() {
  const data = useStaticQuery(getOurPageContent)
  return (
    <Layout>
      <HeaderContainer heading={data.contentfulOurTeamPage.mainHeading} />
      <FlexContainer columns>
        <h1>{data.contentfulOurTeamPage.subheading}</h1>
        <p>{data.contentfulOurTeamPage.introParagraph}</p>
      </FlexContainer>
      <TeamMembers />
    </Layout>
  )
}

export default OurTeam
