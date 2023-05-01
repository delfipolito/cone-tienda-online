import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AnimatedText from './AnimatedText.js'
import background from '../assets/main/orange-gradient.mp4'
import { FormattedMessage } from 'react-intl'

const Solutions = () => {
  return (
    <SolutionsSection id="prooducts">
      <BackgroundVideo autoPlay muted loop>
        <source src={background} type="video/mp4" />
      </BackgroundVideo>
      <AnimatedText>
        <SolutionsTitle>  <FormattedMessage id="solution.title" /></SolutionsTitle>
      </AnimatedText>
      <Box>
        <Item className="large">
          <AnimatedText>
            <div>
              <h2><FormattedMessage id="solution.1.title" /></h2>
              <p>
              <FormattedMessage id="solution.1.text" />
              </p>
            </div>
            <a ><FormattedMessage id="solution.1.button" /></a>
          </AnimatedText>
        </Item>

        <AnimatedText delay={500}>
          <Item>
            <div>
              <h2><FormattedMessage id="solution.2.title" /></h2>
              <p>
              <FormattedMessage id="solution.2.text" />
              </p>
            </div>
            <a><FormattedMessage id="solution.2.button" /></a>
          </Item>
        </AnimatedText>
        <AnimatedText delay={500}>
          <Item>
            <div>
              <h2><FormattedMessage id="solution.3.title" /></h2>
              <p>
              <FormattedMessage id="solution.3.text" />
              </p>
            </div>
            <Link to='/crypto-checkout'><FormattedMessage id="solution.3.button" /></Link>
          </Item>
        </AnimatedText>
        <AnimatedText delay={1000}>
          <Item>
            <div>
              <h2><FormattedMessage id="solution.4.title" /></h2>
              <p>
              <FormattedMessage id="solution.4.text" />
              </p>
            </div>
            <a><FormattedMessage id="solution.4.button" /></a>
          </Item>
        </AnimatedText>
      </Box>
    </SolutionsSection>
  )
}

const SolutionsSection = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: auto;
  background: transparent;
  padding: 20px 80px;
  position: relative;
  text-align: left;
  box-sizing: border-box;
  @media only screen and (max-width: 850px) {
    padding: 50px 30px;
  }
`

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-auto-rows: 1fr;
  column-gap: 70px;
  row-gap: 40px;

  @media only screen and (min-width: 751px) and (max-width: 1170px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    max-width: 790px;
  }
  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    max-width: 90%;
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
`

const SolutionsTitle = styled.h1`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: #ff5900;
  margin-bottom: 40px;
  @media only screen and (max-width: 850px) {
    font-size: 25px;
    margin-bottom: 30px;
  }
`

const Item = styled.div`
  color: white;
  letter-spacing: 0.02em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  &.large {
    grid-column-start: 1;
    grid-column-end: 4;
    p {
      max-width: 720px;
    }
  }
  h2 {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 30px;
    @media only screen and (max-width: 850px) {
      font-size: 19px;
    }
  }
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
    margin-top: 15px;
    @media only screen and (max-width: 850px) {
      font-size: 12px;
      line-height: 20px;
    }
  }
  a {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.01em;
    padding: 7px 23px;
    border: solid 1.5px white;
    border-radius: 26px;
    color: #ffffff;
    margin-top: 6px;
    display: inline-block;
    text-decoration: none;

    @media only screen and (max-width: 850px) {
      font-size: 14px;
      line-height: 28px;
      letter-spacing: 0.02em;
      padding: 6px 23px;
    }
  }
`

export default Solutions
