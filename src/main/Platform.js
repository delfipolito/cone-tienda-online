import React from 'react'
import styled from 'styled-components'
import background from '../assets/main/orange-gradient.mp4'
import AnimatedText from './AnimatedText.js'

const Platform = ({ about }) => {
  return (
    <PlatformSection id="platform">
      <PlatformContainer>
        <AnimatedText>
          <h2>
            Our platform integrates <b>Blockchain & Web3</b> to the financial
            system, to develop the banking of the future.
          </h2>
        </AnimatedText>
      </PlatformContainer>
    </PlatformSection>
  )
}

const PlatformSection = styled.section`
  min-height: 700px;
  height: calc(100vh - 80px);
  width: 100%;
  margin: auto;
  background: transparent;
  overflow: hidden;
  padding: 100px 80px;
  position: relative;
  box-sizing: border-box;
  @media only screen and (max-width: 850px) {
    padding: 50px 30px;
  }
`

const PlatformContainer = styled.div`
  padding-top: 30px;
  height: auto;
  text-align: center;
  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 38px;
    line-height: 42px;
    color: #fffefd;
    max-width: 435px;
    text-align: left;
    b {
      font-weight: 700;
    }
  }
`

export default Platform
