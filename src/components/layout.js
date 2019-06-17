
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import GlobalStyles from "./SharedComponents/GlobalStyles"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <GlobalStyles/>
        <Header siteTitle={data.site.siteMetadata.title} />
         
          <main>{children}</main>
        <Footer/> 
            
          
         
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
