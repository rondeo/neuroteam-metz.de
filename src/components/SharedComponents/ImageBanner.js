import React from "react"
import styled from "styled-components"

const ImageContainer = styled.div`
  border-top: 6px solid #3f5588;
  border-bottom: 16px solid #3f5588;
  position: relative;
  display: flex;
  width: 100%;
  height: 50rem;
  background: ${props => `url(${props.background}) no-repeat `};
  background-size: contain;
  resize: both;
`
export default function ImageBanner(props) {
  return <ImageContainer background={props.background}></ImageContainer>
}
