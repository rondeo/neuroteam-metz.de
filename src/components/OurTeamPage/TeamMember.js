import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const PersonCardContainer = styled.div`
  color: #3f5588;
  width: 350px;
  margin-left: 50px;
  border: 2px solid #eeeeee;
  transition: all 0.5s;
  margin: 20px;
  :hover {
    transform: translateY(-10px);
    box-shadow: 7px 5px 30px rgba(72, 73, 121, 0.15);
    background: #ffffff;
    border-color: #ffffff;
  }

  h3 {
    font-size: 2.5rem;
    margin-bottom: 0px;
    padding: 10px;
  }
`

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    background-color: #3f5588;
    width: 100%;
    height: 100%;
    z-index: -1;
    left: 0;
    top: 0;
    clip-path: polygon(50% 0%, 100% 0, 100% 88%, 50% 100%, 0 88%, 0 0);
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: 6px solid #3f5588;
  transition: all 0.5s;
`

const Image = styled(Img)`
  width: 100%;
  top: -10px;
  clip-path: polygon(50% 0%, 100% 0, 100% 88%, 50% 100%, 0 88%, 0 0);
`

function TeamMember({ teammember }) {
  return (
    <PersonCardContainer>
      <ImageContainer>
        <Image fluid={teammember.photo.fluid} />
      </ImageContainer>
      <TextContent>
        <h3>{teammember.name}</h3>
      </TextContent>
    </PersonCardContainer>
  )
}

export default TeamMember
