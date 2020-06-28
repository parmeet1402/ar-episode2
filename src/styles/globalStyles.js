import styled, { css } from "styled-components"

const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;

  @media only screen and (min-width: 1024px) {
    min-width: 960px;
  }
  @media only screen and (min-width: 1216px) {
    min-width: 1152px;
  }
  @media only screen and (min-width: 1408px) {
    min-width: 1244px;
  }

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}
`
const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}

  ${props =>
    props.alignTop &&
    css`
      justify-content: flex-start;
    `}

  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `}
`

export { Container, Flex }
