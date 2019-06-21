import React from "react"
import Logo from "./Logo"
import { setFlex, setColor } from "../../pages/styles"
import { FlexContainer } from "../SharedComponents/Containers"
import Navigation from "./Navigation"
export default function Header() {
  return (
    <FlexContainer>
      <Logo />
      
      <Navigation />
       
    </FlexContainer>
  )
}
