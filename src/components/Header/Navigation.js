import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const NavBar = styled.nav`
position: relative;
 
background-color: blue;

`
const List = styled.ul`
background-color: red;
li:hover > ul {
    display: block;
    
  }
`

const ListItem = styled.li`
 list-style-type: none;
 display: inline-block;
 background-color: yellow;

`
 
const DropDownList = styled.ul`
display: none;
background-color: pink;

li {
  display: block;
  width: 100%;
  margin: 20px;

  
}

`

const NavLink = styled(Link)`
text-decoration: none;
`
const getNavigationLink = graphql`
  {
    navigationlink: allContentfulNavigation {
      edges {
        node {
          navigationLink {
            ... on ContentfulNavigationItem {
              id
              label
              link {
                ... on Node {
                  ... on ContentfulBasicPage {
                    slug
                    title
                  }
                  ... on ContentfulContactPage {
                    title
                    slug
                  }
                  ... on ContentfulOurTeamPage {
                    title
                    slug
                  }
                  ... on ContentfulArzteTherapeutenPage {
                    title
                    slug
                  }
                  ... on ContentfulOnlineRezeptbestellungPage {
                    title
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

function Navigation() {
  const data = useStaticQuery(getNavigationLink)
  console.log(data)
  return data.navigationlink.edges[0].node.navigationLink.map(node => (
    <NavBar>
     <List>
    <ListItem>
      {node.label}
      <DropDownList>
      {node.link.map(link => (
        <NavLink to={link.slug}>
          <li>{link.title}</li>
        </NavLink>
        
      ))}
      </DropDownList>  
    </ListItem>
   </List>
   </NavBar>
  ))
  
}

export default Navigation
