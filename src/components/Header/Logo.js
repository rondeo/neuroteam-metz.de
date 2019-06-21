import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
const styledLogo = styled.div`
  
`
const getLogo = graphql`
  {
    contentfulLogo {
      logo {
        file {
          url
        }
      }
    }
  }
`

function Logo() {
  const data = useStaticQuery(getLogo)
  return (
    <styledLogo>
    <Link to="/">
      <img src={data.contentfulLogo.logo.file.url}></img>
    </Link>
    </styledLogo>
  )
}

export default Logo
