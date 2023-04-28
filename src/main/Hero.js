import React from 'react'
import styled from 'styled-components'
import AnimatedText from './AnimatedText.js'

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <AnimatedText>
          <HeroTitle>
            REINVENTING THE BANKING INFRASTRUCTURE
            <span>.</span>
          </HeroTitle>
          <HeroSubtitle>
            The Koibanx platform integrates<br/>
            <b>Blockchain and web3 to the financial system, </b> allowing banks
            to connect with the
            <b> financial technology of the future. </b>
          </HeroSubtitle>
        </AnimatedText>
      </HeroContainer>
    </HeroSection>
  )
}

const HeroSection = styled.div`
  min-height: calc(100vh - 90px);
  height: auto;
  width: 100%;
  margin: auto;
  background: transparent;
  box-sizing: border-box;
  text-align: left;
  text-rendering: optimizeLegibility;
  padding: 60px 80px 30px 80px;
  position: relative;
  @media only screen and (max-width: 850px) {
    padding: 50px 30px;
  }
  video {
    position: absolute;
    z-index: 0;
    left: 50%;
    transform: translate(-50%, 0);
    top: -25px;
  }
`

const HeroContainer = styled.div`
  flex-wrap: wrap;
  padding-top: 50px;
  height: auto;
  div {
    position: relative;
    z-index: 1;
  }
`

const HeroTitle = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 123px;
  line-height: 123px;
  letter-spacing: 0.01em;
  color: #ffffff;
  text-transform: uppercase;
  max-width: 920px;
  margin-bottom: 10px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  span {
    color: #ff5900;
  }
`

const HeroSubtitle = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.02em;
  max-width: 582px;
  color: #ffffff;
  b {
    font-weight: 700;
  }
`

export default Hero
