import React from "react"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { FlexContainer } from "../SharedComponents/Containers"
import { BasicInput } from "../SharedComponents/Inputs"
import { Button } from "../SharedComponents/Buttons"
import { InputEmail } from "../SharedComponents/Inputs"

const Form = styled.form`
  width: 40rem;
  color: #313131;
  box-shadow: 7px 5px 30px rgba(72, 73, 121, 0.15);
  padding: 3rem;
  border-radius: 5px;
`

function RezeptBestellungForm(props) {
  return (
    <FlexContainer>
      <Form>
        <h1>{props.firstheadline}</h1>
        <p>{props.firstparagraph}</p>
        <BasicInput placeholder={props.name} />
        <BasicInput placeholder={props.vorname} />
        <BasicInput type="email" placeholder={props.email} />
        <BasicInput placeholder={props.telefon} />
        <BasicInput placeholder={props.geburtsdatum} />
        <h2>{props.secondheadline}</h2>
        <p>{props.secondparagraph}</p>
        <BasicInput placeholder={props.medikament} />
        <BasicInput placeholder={props.abholdatum} />
        <p>{documentToReactComponents(props.checkboxtext)}</p>
        <Button>{props.buttontext}</Button>
      </Form>
    </FlexContainer>
  )
}

export default RezeptBestellungForm
