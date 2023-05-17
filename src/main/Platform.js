import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AnimatedText from './AnimatedText.js'
import { FormattedMessage } from 'react-intl'
import background from '../assets/main/platform.mp4'
import backgroundMobile from '../assets/main/platform-mobile.mp4'

const Platform = ({ about }) => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const medium = 800

  return (
    <PlatformSection id="platform">
      {width > medium && (
        <BackgroundVideo autoPlay muted loop>
          <source src={background} type="video/mp4" />
        </BackgroundVideo>
      )}
      {width <= medium && (
        <BackgroundVideo autoPlay muted loop>
          <source src={backgroundMobile} type="video/mp4" />
        </BackgroundVideo>
      )}
      {width > medium && (
        <PlatformContainer>
          <AnimatedText>
            <h2>
              <FormattedMessage
                id="platform.text"
                values={{ b: word => <b>{word}</b> }}
              />
            </h2>
          </AnimatedText>
        </PlatformContainer>
      )}
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
    padding: 50px 50px;
    min-height: 400px;
  }

  @media only screen and (max-width: 800px) {
    padding: 0px 20px 50px 20px;
    height: auto;
  }
`
const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  @media only screen and (max-width: 800px) {
    top: 90px;
    position: relative;
    z-index: 40;
    max-width: 400px;
  }
`

const PlatformContainer = styled.div`
  padding-top: 30px;
  height: auto;

  /* text-align: center; */
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

  @media only screen and (max-width: 850px) {
    h2 {
      font-size: 28px;
      line-height: 38px;
      max-width: 435px;
      text-align: left;
    }
  }

  @media only screen and (max-width: 700px) {
    h2 {
      font-size: 20px;
      line-height: 24px;
      max-width: 335px;
      text-align: left;
    }
  }
`

export default Platform
