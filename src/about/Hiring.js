import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Loop from '../main/Loop'

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
          We are constantly looking for people who want <b>to transform, to
          transcend,</b> to be a part of our dream. We embrace talented people who
          also want to create a good atmosphere, based in <b>companionship,</b> who
          share our values and our <b>ambition for professional and personal
          growth.</b>
        </p>
        <Button href="/jobs" passHref>
          Ready to join our team
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

const Image = styled.img``

const HiringSection = styled.section`
  min-height: 630px;
  height: auto;
  width: 100%;
  margin: auto;
  background: #000;
  overflow-x: hidden;
  @media only screen and (max-width: 850px) {
    padding: 50px 30px;
  }
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 26px;
    color: #FFFFFF;
    max-width: 650px;
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
  }
`

export default Hiring
