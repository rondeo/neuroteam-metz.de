// import React, { Component } from "react"
// import styled from "styled-components"
// import { StaticQuery, graphql } from "gatsby"
// import { setFlex, setColor } from "../../pages/styles"
// import Img from "gatsby-image"
// import Slider from "react-slick"

// const getSliderImages = graphql`
//   {
//     image: contentfulHomePage {
//       sliderImage {
//         id
//         fluid {
//           ...GatsbyContentfulFluid
//         }
//       }
//     }
//   }
// `

// const Container = styled.div``

// const Image = styled(Img)`
//   height: 500px;
// `

// function SliderImage({ image }) {
//   return <Image fluid={image.sliderImage.fluid} />
// }

// export default function HomeSlider() {
//   return (
//     <StaticQuery
//       query={getSliderImages}
//       render={data => {
//         const settings = {
//           dots: false,
//           autoplay: true,
//           fade: true,
//           infinite: true,
//           speed: 400,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }

//         return (
//           <Container>
//             <Slider {...settings}>
//               {data.contentfulHomePage.sliderImage.map(({ node: image }) => {
//                 return <SliderImage key={image.id} image={image} />
//               })}
//             </Slider>
//           </Container>
//         )
//       }}
//     />
//   )
// }
