import styled from "styled-components"

export const BasicInput = styled.input.attrs(props => ({
  type: props.type || "text",
  placeholder: props.placeholder || "Please enter the required value",
}))`
  height: 4.5rem;
  margin-bottom: 8px;
  padding-top: 8px;
  padding-left: 3px;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  border-bottom-width: 1px;
  border-bottom-color: #ebedf2;
  background-color: transparent;
  font-size: 1.3rem;
  font-weight: 400;
  width: 100%;
  color: #3f5588;

  &::placeholder {
    font-size: 1.3rem;
    font-weight: normal;
    color: #313131;

    :hover {
      color: red;
    }
  }

  &:focus {
    border-color: #3f5588;
  }
`
