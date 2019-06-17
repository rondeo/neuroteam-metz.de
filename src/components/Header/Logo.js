import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"

const styledLogo = styled.div`
  img {
    height: 90px;
    width: 150px;
  }
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
    <div>
      <img src={data.contentfulLogo.logo.file.url}></img>
    </div>
  )
}

export default Logo
