import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import RezeptBestellungForm from "../components/Forms/RezeptBestellungForm"
import Layout from "../components/layout"
import ImageBanner from "../components/SharedComponents/ImageBanner"

const getOnlineRezeptbestellungPage = graphql`
  {
    contentfulOnlineRezeptbestellungPage {
      title
      imageBanner {
        fluid(maxWidth: 2500, quality: 90) {
          ...GatsbyContentfulFluid
        }
      }
      firstHeadline
      firstParagraph
      nameFieldText
      vornameFieldText
      emailFieldText
      telefonFieldText
      geburtsdatumFieldText
      secondHeadline
      secondParagraph
      medikamentFieldText
      abholdatumFieldText
      checkboxText {
        json
      }
      buttonLabel
    }
  }
`

function OnlineRezeptbestellung(props) {
  const data = useStaticQuery(getOnlineRezeptbestellungPage)
  return (
    <Layout>
      <ImageBanner
        background={
          data.contentfulOnlineRezeptbestellungPage.imageBanner.fluid.src
        }
      />
      <RezeptBestellungForm
        firstheadline={data.contentfulOnlineRezeptbestellungPage.firstHeadline}
        firstparagraph={
          data.contentfulOnlineRezeptbestellungPage.firstParagraph
        }
        secondheadline={
          data.contentfulOnlineRezeptbestellungPage.secondHeadline
        }
        secondparagraph={
          data.contentfulOnlineRezeptbestellungPage.secondParagraph
        }
        name={data.contentfulOnlineRezeptbestellungPage.nameFieldText}
        vorname={data.contentfulOnlineRezeptbestellungPage.vornameFieldText}
        email={data.contentfulOnlineRezeptbestellungPage.emailFieldText}
        telefon={data.contentfulOnlineRezeptbestellungPage.telefonFieldText}
        geburtsdatum={
          data.contentfulOnlineRezeptbestellungPage.geburtsdatumFieldText
        }
        medikament={
          data.contentfulOnlineRezeptbestellungPage.medikamentFieldText
        }
        abholdatum={
          data.contentfulOnlineRezeptbestellungPage.abholdatumFieldText
        }
        checkboxtext={
          data.contentfulOnlineRezeptbestellungPage.checkboxText.json
        }
        buttontext={data.contentfulOnlineRezeptbestellungPage.buttonLabel}
      />
    </Layout>
  )
}

export default OnlineRezeptbestellung
