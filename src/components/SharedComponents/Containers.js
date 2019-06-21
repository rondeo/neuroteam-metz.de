import styled from "styled-components"

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
 
  flex-wrap: wrap;
  flex-direction: ${props => (props.columns ? "column" : "row")};
  flex-direction: ${props => (props.columns ? "column" : "row")};
  padding: ${props => (props.nopadding ? "0px" : "30px")};
   
`
