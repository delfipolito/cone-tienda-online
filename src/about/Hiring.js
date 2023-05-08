import React from 'react'
import styled from 'styled-components'
import Loop from '../main/Loop'
import { FormattedMessage } from 'react-intl'

const Hiring = ({ about }) => {
  return (
    <HiringSection>
      <Loop
        content={
          <Title>
            <h1>We are hiring!</h1>
            <h1 className="hollow">We are hiring!</h1>
            <h1>We are hiring!</h1>
            <h1 className="hollow">We are hiring!</h1>
            <h1>We are hiring!</h1>
            <h1 className="hollow">We are hiring!</h1>
            <h1>We are hiring!</h1>
            <h1 className="hollow">We are hiring!</h1>
          </Title>
        }
      />

      <HiringContainer>
        <p>
          <FormattedMessage
            id="about.hiring.text"
            values={{ b: word => <b>{word}</b> }}
          />
        </p>
        <Button href="/jobs" passHref>
          <FormattedMessage id="about.hiring.button" />
        </Button>
      </HiringContainer>
    </HiringSection>
  )
}

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 95px;
    line-height: 100px;
    color: #ff5000;
    margin-right: 30px;
    &.hollow {
      -webkit-text-stroke: #ff5000 1px;
      color: transparent;
      outline: 1px solid transparent;
      outline-offset: -1px;
    }
  }
`

const HiringSection = styled.section`
  min-height: 630px;
  height: auto;
  width: 100%;
  margin: auto;
  background: #000;
  overflow-x: hidden;

  @media only screen and (max-width: 850px) {
    /* padding: 50px 30px; */
  }
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 26px;
    color: #ffffff;
    max-width: 650px;

    @media only screen and (max-width: 600px) {
      font-size: 16px;
    }

    @media only screen and (max-width: 500px) {
      font-size: 15px;
    }
    b {
      font-weight: 700;
    }
  }
`

const HiringContainer = styled.div`
  box-sizing: border-box;
  padding: 0 80px 20px 80px;
  height: auto;
  text-align: left;

  @media only screen and (max-width: 600px) {
    padding: 0 80px 0px 40px;
  }

  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.02em;
    color: #ffffff;
    max-width: 488px;
    text-align: left;
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
    margin-top: 70px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 13px;
    line-height: 28px;
    letter-spacing: 0.02em;
    padding: 6px 23px;
    margin-top: 50px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 12px;
    letter-spacing: 0.01em;
    padding: 6px 13px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`

export default Hiring
