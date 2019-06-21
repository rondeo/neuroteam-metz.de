import styled, {css} from "styled-components"

const InputStyle = css`
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
    font-size: 20px;
    font-weight: normal;
    color: #313131;
 }

  &:focus {
    border-color: #3f5588;
    border-bottom-width: 2px;
  }
`

export const BasicInput = styled.input.attrs(props => ({
  type: props.type || "text",
  placeholder: props.placeholder || "Please enter the required value",
  name: props.name || "",
  value: props.value || "",
}))`
  ${InputStyle};
  height: 4rem;
  margin-bottom: 8px;
  padding-top: 8px;
  padding-left: 3px;
   
`
export const TextArea = styled.textarea.attrs(props => ({
  placeholder: props.placeholder || "Please enter the required value",
  name: props.name || "",
  value: props.value || "",
  rows: props.rows || "5",
}))`
  ${InputStyle};
 top: 50px;


 &::placeholder{
   padding-top: 10px;
 }
`

 