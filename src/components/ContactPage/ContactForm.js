import React from "react"
import { BasicInput } from "../SharedComponents/Inputs"
import { graphql, useStaticQuery } from "gatsby"
function ContactForm() {
  // const getFormInfo = graphql`
  // {
  //     contentfulFormLabels {
  //       name
  //       vorname
  //       email
  //       telefon
  //       geburtsdatum
  //       medikament
  //       medikamentGuide
  //       abholdatum
  //       buttonLabel
  //       checkboxText {
  //         json
  //       }
  //       anliegen
  //       schilderungDieBeschwerden
  //       vorherigeUntersuchungen
  //       radioButton1Text
  //       radioButton2Text
  //     }
  //   }

  // `

  return (
    <div>
      <BasicInput />
      <BasicInput />
      <BasicInput />
      <BasicInput />
    </div>
  )
}

export default ContactForm
