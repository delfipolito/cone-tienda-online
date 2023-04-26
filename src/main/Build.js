import React from 'react'
import styled from 'styled-components'
import build from '../assets/main/build.svg'
import AnimatedText from './AnimatedText.js'

const Build = () => (
  <BuildSection>
      <BuildContainer>
        <AnimatedText>
          <h2>making it easier to build on blockchain.</h2>
        </AnimatedText>
        <AnimatedText>
          <Button href="https://build.koibanx.com/">Learn more</Button>
          <img
            src={build}
            alt="build"
            width="340"
            height="278"
          />
        </AnimatedText>
      </BuildContainer>
  </BuildSection>
)

const BuildSection = styled.div`
  background: #faff00;
  box-sizing: border-box;
  height: auto;
  color: black;
  padding: 0 80px;
  @media only screen and (max-width: 850px) {
    padding: 0px 30px;
  }
  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 65px;
    line-height: 98px;
    text-align: left;
    margin: 35px 0;
    text-transform: lowercase;
    font-feature-settings: 'ss04' on, 'ss02' on, 'ss01' on;
    color: #000000;
    text-decoration-line: underline;
    text-underline-offset: 7px;
    text-decoration-thickness: 4px;
    mix-blend-mode: normal;
    max-width: 660px;
    @media only screen and (max-width: 750px) {
      max-width: 468px;
      text-align: left;
      font-size: 29px;
      line-height: 60px;
      margin-top: 30px;
      text-underline-offset: 5px;
      text-decoration-thickness: 3px;
    }
  }
  img {
    max-width: 70%;
    object-fit: contain;
  }
`

const BuildContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  div {
    display: flex;
    align-items: center;
  }

`

const Button = styled.a`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0.01em;
  padding: 7px 23px;
  border: 2px solid #000;
  border-radius: 26px;
  color: #000;
  text-decoration: none;
  @media only screen and (max-width: 850px) {
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.02em;
    padding: 6px 23px;
  }
`

export default Build
