import React from 'react'
import styled from 'styled-components'
import Carousel from './Carousel.js'
import AnimatedText from './AnimatedText.js'

const Press = () => {
  return (
    <PressSection>
      <AnimatedText>
        <PressTitle>Press.</PressTitle>
      </AnimatedText>
      <PressContainer>
        <div>
          <Carousel />
          <Button href="https://koibanx.medium.com/" target="_blank">
            News blog
          </Button>
        </div>
      </PressContainer>
    </PressSection>
  )
}

const PressSection = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  z-index: 30;
  position: relative;
  height: auto;
  width: 100%;
  text-align: left;
  margin: auto;
  background: transparent;
  padding: 20px 80px;
  @media only screen and (max-width: 850px) {
    padding: 50px 30px;
  }
`

const PressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0 70px;
  height: auto;
  text-align: center;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`

const PressTitle = styled.h1`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: #ff5900;
  margin-bottom: 90px;
  @media only screen and (max-width: 850px) {
    font-size: 25px;
    margin-bottom: 30px;
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
  border: solid 2px #ff5900;
  border-radius: 26px;
  color: #ff5900;
  text-decoration: none;
  display: inline-block;
  margin-top: 100px;

  @media only screen and (max-width: 850px) {
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.02em;
    padding: 6px 23px;
  }
`

export default Press
