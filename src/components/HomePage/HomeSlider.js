import React, { Component } from "react"
import styled from "styled-components"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
 
import Img from "gatsby-image"
import Slider from "react-slick"

const getSliderImages = graphql`
{
    image: allContentfulSliderImage (filter: { node_locale: { eq: "de-DE" } }) {
      edges {
        node {
          id
          sliderImage {
            fluid (maxWidth: 2500, quality: 90) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const Container = styled.div`
border-top: 6px solid #3f5588;
  border-bottom: 16px solid #3f5588;
`

const Image = styled(Img)`
  height: 100%;
`

function SliderImage({ image }) {
    return <Image fluid={image.sliderImage.fluid} />
  }
  
  export default function HomeSlider() {
    return (
      <StaticQuery
        query={getSliderImages}
        render={data => {
          const settings = {
            dots: false,
            autoplay: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
  
          return (
            <Container>
              <Slider {...settings}>
                {data.image.edges.map(({ node: image }) => {
                  return <SliderImage key={image.id} image={image} />
                })}
              </Slider>
            </Container>
          )
        }}
      />
    )
  }