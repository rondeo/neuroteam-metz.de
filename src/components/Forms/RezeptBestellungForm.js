import React from "react"
import styled from "styled-components"
import { FlexContainer } from "../SharedComponents/Containers"
import { BasicInput } from "../SharedComponents/Inputs"
import { InputEmail } from "../SharedComponents/Inputs"

const Form = styled.form`
  width: 40rem;
  color: #313131;
  box-shadow: 7px 5px 30px rgba(72, 73, 121, 0.15);
  padding: 3rem;
  border-radius: 5px;
`

function RezeptBestellungForm() {
  return (
    <FlexContainer>
      <Form>
        <BasicInput placeholder="Name" />
        <BasicInput placeholder="Vorname" />
        <BasicInput type="email" placeholder="Email" />
        <BasicInput placeholder="Telefon" />
        <BasicInput placeholder="Geburtsdatum" />
      </Form>
    </FlexContainer>
  )
}

export default RezeptBestellungForm
