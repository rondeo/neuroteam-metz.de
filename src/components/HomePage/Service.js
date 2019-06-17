import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "../../images/PR1A4105.jpg"
import { Button } from "../SharedComponents/Buttons"
const ServiceContainer = styled.div`
  color: #3f5588;
  width: 350px;
  margin-left: 50px;
  border: 1px solid #eeeeee;
  transition: all 0.5s;
  margin: 20px;
  :hover {
    transform: translateY(-10px);
    box-shadow: 7px 5px 30px rgba(72, 73, 121, 0.15);
    background: #ffffff;
    border-color: #ffffff;
  }

  h3 {
    font-size: 2rem;
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
    top: -2px;
    clip-path: polygon(50% 0%, 100% 0, 100% 88%, 50% 100%, 0 88%, 0 0);
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  p {
    color: black;
    text-align: center;
    font-size: 1.1rem;
    font-weight: normal;
  }
`

const Img = styled.img`
  clip-path: polygon(50% 0%, 100% 0, 100% 88%, 50% 100%, 0 88%, 0 0);
`

function Service({ service }) {
  return (
    <ServiceContainer>
      <ImageContainer>
        <Img src={service.serviceImage.file.url} />
      </ImageContainer>
      <TextContent>
        <h3>{service.serviceName}</h3>
        <p>{documentToReactComponents(service.serviceDescription.json)}</p>
        <Link to={service.slug}>
          <Button>{service.buttonLabel}</Button>
        </Link>
      </TextContent>
    </ServiceContainer>
  )
}

export default Service
