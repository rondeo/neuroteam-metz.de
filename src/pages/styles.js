import styled, { css } from "styled-components"

export const setColor = {
  primaryGold: "#b88f00",
  primaryGray: "#333333",
  mainWhite: "#ffffff",
  darkGray: "#666666",
  lightGray: "#333333",
  bckGray: "#f8f8f8",
}

export const setFont = {
  mainFont: "font-family: 'Libre Baskerville', serif",
  secondaryFont: "font-family: 'Open Sans', sans-serif",
}

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display: flex; 
        align-items:${y};
        justify-content:${x}
        flex-wrap: wrap;`
}

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

export const media = Object.keys(sizes).reduce((acc, curr) => {
  acc[curr] = (...args) => css`
    @media (max-width: ${sizes[curr]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})