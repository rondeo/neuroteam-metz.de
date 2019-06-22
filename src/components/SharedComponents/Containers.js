import styled from "styled-components"

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
   flex-direction: ${props => (props.columns ? "column" : "row")};
  padding: ${props => (props.nopadding ? "0px" : "30px")};
  text-align: ${props => (props.center ? "center" : "left")};
   
   
`
