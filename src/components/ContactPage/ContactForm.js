import React from "react"
import styled from "styled-components"
import { BasicInput, TextArea } from "../SharedComponents/Inputs"
import {FlexContainer} from "../SharedComponents/Containers"
import { graphql, useStaticQuery } from "gatsby"
import { Button } from "../SharedComponents/Buttons"

const Form = styled.form`
 max-width: 40%;
 color: #313131;
  box-shadow: 7px 5px 30px rgba(72, 73, 121, 0.15);
  padding: 20px;
  border-radius: 5px;
  margin: 20px;
 
`
const RadioButtonsContainer = styled.div`
display: flex;
font-size: 1.3rem;
font-weight: normal;

label {
  color:  #313131;
  margin-left: 5px;
}
`
const getContactFormInfo = graphql`
  {
      contentfulFormLabels {
        name
        vorname
        email
        telefon
        geburtsdatum
        medikament
        medikamentGuide
        abholdatum
        buttonLabel
        checkboxText {
          json
        }
        anliegen
        schilderungDieBeschwerden
        vorherigeUntersuchungen
        radioButton1Text
        radioButton2Text
      }
    }

  `

function ContactForm() {
  const data = useStaticQuery(getContactFormInfo)
  

  return (
     
    <Form>
       
       
      <BasicInput placeholder={data.contentfulFormLabels.name} />
      <BasicInput placeholder={data.contentfulFormLabels.email}/>
      <BasicInput placeholder={data.contentfulFormLabels.telefon}/>
      <BasicInput placeholder={data.contentfulFormLabels.geburtsdatum}/>
      <RadioButtonsContainer>
      <div>
      <input type="radio"/><label>{data.contentfulFormLabels.radioButton1Text}</label>
      </div>
      <div>
      <input type="radio"/><label>{data.contentfulFormLabels.radioButton2Text}</label>
      </div>
      </RadioButtonsContainer>
     
       
      <BasicInput placeholder={data.contentfulFormLabels.anliegen}/>
      <TextArea placeholder={data.contentfulFormLabels.schilderungDieBeschwerden}/>
      
      
      <BasicInput placeholder={data.contentfulFormLabels.vorherigeUntersuchungen}/>
      
       
      <Button>{data.contentfulFormLabels.buttonLabel}</Button>
    </Form>
     
  )
}

export default ContactForm
