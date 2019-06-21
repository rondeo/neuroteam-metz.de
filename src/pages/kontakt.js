import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Map from "../components/ContactPage/Map"
import ContactForm from "../components/ContactPage/ContactForm"
import ContactInfo from "../components/ContactPage/ContactInfo"
import Layout from "../components/layout"
import HeaderContainer from "../components/SharedComponents/HeaderContainer"
import {FlexContainer} from "../components/SharedComponents/Containers"


const getContactPageInfo = graphql`
{
  contentfulContactPage{
    mainHeading
    contactInfoHeading
    linkButtonLabel
  }
}
`

function kontakt() {
  const data = useStaticQuery(getContactPageInfo)
  return (
    <Layout>
      <HeaderContainer  heading={data.contentfulContactPage.mainHeading}/>
      <FlexContainer nopadding>
      <h1>{data.contentfulContactPage.contactInfoHeading}</h1>
      </FlexContainer>

      <FlexContainer nopadding>
      <ContactForm />
      <ContactInfo/>
      </FlexContainer>
      <Map />
      
    </Layout>
  )
}

export default kontakt
