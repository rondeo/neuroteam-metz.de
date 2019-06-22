import React from "react"
import Services from "../components/HomePage/Services"
import HomeSlider from "../components/HomePage/HomeSlider"
// import HomeSlider from "../components/HomePage/HomeSlider"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <HomeSlider/>
    <Services />
  </Layout>
)

export default IndexPage
