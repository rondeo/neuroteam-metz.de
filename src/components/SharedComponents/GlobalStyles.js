import { createGlobalStyle } from "styled-components"
import { setColor, setFont } from "../../pages/styles"

// font-family: 'Bitter', serif;
// font-family: 'Open Sans', sans-serif;

const GlobalStyle = createGlobalStyle`
 
@import url('https://fonts.googleapis.com/css?family=Bitter:400,700&display=swap'); 
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700&display=swap&subset=latin-ext');
 
@import url('https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700&display=swap');
*,
*::after, 
*::before {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: inherit;
    font-family: 'Yanone Kaffeesatz', sans-serif;
}
html {
  font-size: 62.5%;
}
body {
  font-family: 'Yanone Kaffeesatz', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    margin: 0;
    padding: 0;
    background: ${setColor.mainWhite};
    text-shadow: none !important;
    box-sizing: border-box;
   color: #3f5588;
   
}
 
a,
  a:focus,
  a:active {
    outline: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-transform: uppercase;
    font-weight: bold;
    color: #333333;
    
    
  }
  h1 {
    
    
    font-size: 25px;
    margin-bottom: 20px;
    text-transform: capitalize;
     
  }
  h2 {
    font-size: 20px;
    
  }
  h3 {
    font-size: 18px;
    color: #777777;
    font-family: 'Yanone Kaffeesatz', sans-serif;
  }
  h4 {
    font-size: 2rem;
    color: #777777;
    
    font-weight: normal;
    line-height: 2rem;
    text-transform: capitalize;
    text-align: center;
  }
  h5 {
    font-size: 15px;
  }
  h6 {
    font-size: 13px;
    font-weight: normal;
    text-transform: capitalize;
    color: #6AAB35;
    
    
  }
  
`

export default GlobalStyle
