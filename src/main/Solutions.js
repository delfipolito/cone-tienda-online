import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AnimatedText from './AnimatedText.js'
import background from '../assets/main/orange-gradient.mp4'

const Solutions = () => {
  return (
    <SolutionsSection id="prooducts">
      <BackgroundVideo autoPlay muted loop>
        <source src={background} type="video/mp4" />
      </BackgroundVideo>
      <AnimatedText>
        <SolutionsTitle>Our Solutions.</SolutionsTitle>
      </AnimatedText>
      <Box>
        <Item className="large">
          <AnimatedText>
            <div>
              <h2>Transactional Core</h2>
              <p>
                Transactional software that connects to the banking core.
                Apified and Blockchain based. It allows creating and managing
                multiple types of assets (tokens), programming business logic on
                them, compatible with cryptocurrencies and interconnected with
                the services of the Financial Institution.
              </p>
            </div>
            <a>Learn more</a>
          </AnimatedText>
        </Item>

        <AnimatedText delay={500}>
          <Item>
            <div>
              <h2>Cross border settlements</h2>
              <p>
                Instant transfers to +8 countries in LATAM. Collecting USD in
                the USA via ACH transfers, credit, debit or prepaid cards and/or
                cryptocurrencies and settling real time payments in local
                currency at the final destination.
              </p>
            </div>
            <a>Learn more</a>
          </Item>
        </AnimatedText>
        <AnimatedText delay={500}>
          <Item>
            <div>
              <h2>Crypto check out</h2>
              <p>
                It allows your merchants, e-Commerce platforms, collecting
                providers and gateways to receive payments in any
                cryptocurrency, fiat and cards.
              </p>
            </div>
            <Link to='/crypto-checkout'>Learn more</Link>
          </Item>
        </AnimatedText>
        <AnimatedText delay={1000}>
          <Item>
            <div>
              <h2>Crypto as a Service</h2>
              <p>
                We enable banks and digital wallets to provide their own
                customers the ability to buy, sell, receive, transfer and store
                cryptocurrencies on their own platforms.
              </p>
            </div>
            <a>Learn more</a>
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
