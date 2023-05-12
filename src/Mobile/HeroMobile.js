import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import cubo from '../assets/cube.mp4'

const HeroMobile = () => {
  return (
    <>
      <HeroMobileSection>
        <HeroMobileContainer>
          <video autoPlay muted loop>
            <source src={cubo} type="video/mp4" />
          </video>
          <HeroTitle>
            <FormattedMessage id="hero.title" />
            <span>.</span>
          </HeroTitle>
          <h3>
            <FormattedMessage
              id="hero.text"
              values={{ b: word => <b>{word}</b>, brTag: () => <br /> }}
            />
          </h3>
        </HeroMobileContainer>
      </HeroMobileSection>
    </>
  )
}

const HeroMobileSection = styled.div`
  width: 100%;
  margin: 40px auto auto auto;
  background: transparent;
  text-align: left;
  text-rendering: optimizeLegibility;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const HeroMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  padding-top: 80px;

  h3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    color: #ffffff;
    max-width: 400px;
    z-index: 100;

    @media only screen and (max-width: 502px) {
      font-size: 13px;
      line-height: 20px;
      max-width: 270px;
    }

    @media only screen and (max-width: 422px) {
      font-size: 12px;
      line-height: 19px;
    }
  }

  video {
    position: absolute;
    width: 70%;
    height: auto;
    top: -10px;

    @media only screen and (max-width: 610px) {
      top: 30px;
    }

    @media only screen and (max-width: 502px) {
      top: 150px;
    }

    @media only screen and (max-width: 422px) {
      top: 150px;
    }
  }
`

const HeroTitle = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 58px;
  line-height: 75px;
  letter-spacing: 0.04em;
  color: #ffffff;
  text-transform: uppercase;
  /* max-width: 500px; */
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100;

  span {
    color: #ff5900;
  }

  @media only screen and (max-width: 610px) {
    font-size: 50px;
    line-height: 55px;
    max-width: 300px;
  }

  @media only screen and (max-width: 502px) {
    font-size: 42px;
    line-height: 50px;
    max-width: 300px;
  }

  @media only screen and (max-width: 422px) {
    font-size: 38px;
    line-height: 47px;
  }

  @media only screen and (max-width: 382px) {
    font-size: 35px;
    line-height: 45px;
  }
`

export default HeroMobile
