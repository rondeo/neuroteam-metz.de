import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Image = styled(Img)`
  width: 100%;
  
`

const ImageContainer = styled.div`
  border-top: 6px solid #3f5588;
  border-bottom: 16px solid #3f5588;
  position: relative;
  display: flex;
  width: 100%;

  /* background: ${props => `url(${props.background}) no-repeat `};
  background-size: cover;
  background-position: center; */
`
export default function ImageBanner(props) {
  return <ImageContainer>  <Image fluid={props.image.fluid} /></ImageContainer>
}
