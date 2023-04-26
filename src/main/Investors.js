import React from 'react'
import styled from 'styled-components'
import algorand from '../assets/investors/logo_algorand.png'
import borderless from '../assets/investors/logo_borderless.png'
import kalonia from '../assets/investors/logo_kalonia.png'
import innogen from '../assets/investors/logo_innogen.png'
import advisors from '../assets/investors/logo_advisors.png'
import finnovista from '../assets/investors/logo_finnovista.svg'
import AnimatedText from './AnimatedText.js'

const Investors = () => {
  return (
    <InvestorsSection>
      <AnimatedText>
        <InvestorsTitle>Our Main Investors.</InvestorsTitle>
      </AnimatedText>
      <AnimatedText>
        <InvestorsContainer>
          <img src={algorand} alt="Logo Algorand" width={200} height={50} />

          <img src={borderless} alt="Logo Borderless" width={200} height={50} />

          <img src={finnovista} alt="Logo finnovista" width={200} height={50} />

          <img src={kalonia} alt="Logo Kalonia" width={200} height={50} />

          <img src={innogen} alt="Logo Innogen" width={200} height={50} />

          <img src={advisors} alt="Logo Advisors" width={200} height={50} />
        </InvestorsContainer>
      </AnimatedText>
    </InvestorsSection>
  )
}

const InvestorsSection = styled.div`
  height: auto;
  width: 100%;
  margin: auto;
  background: #000;
  padding: 20px 80px;
  box-sizing: border-box;
  text-align: left;
  @media only screen and (max-width: 850px) {
    padding: 50px 30px;
    padding-bottom: 70px;
    img {
      max-width: 30%;
      object-fit: contain;
    }
  }
`

const InvestorsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 73px;
  max-width: 833px;
  height: auto;
  text-align: center;
`
const Empty = styled.div`
  width: 40px;
`

const InvestorsTitle = styled.h1`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: #ffff00;
  margin-bottom: 50px;
  @media only screen and (max-width: 850px) {
    font-size: 25px;
    margin-bottom: 30px;
  }
`

export default Investors
