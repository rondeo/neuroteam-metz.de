import React from "react"
import styled from "styled-components"

const Header = styled.div`
  background-color: #3f5588;
  color: #ffffff;
  padding: 0 25px;

  h1 {
    font-size: 50px;
    padding: 40px;
    font-weight: normal;
  }
`

function HeaderContainer(props) {
  return (
    <Header>
      <h1>{props.heading}</h1>
    </Header>
  )
}

export default HeaderContainer
