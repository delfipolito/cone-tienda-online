import { Link } from 'react-router-dom'
import styled from 'styled-components'
import wallet from './assets/wallet.png'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Crypto() {
  return (
    <>
      <Navbar />
      <CryptoSection>
        <CryptoContainer>
          <div>
            <CryptoTitle>
              <b>Crypto Checkout</b> allows your merchants, ecommerce,
              collection provider, and gateways to receive payments in any
              cryptocurrency.{' '}
            </CryptoTitle>
            <Content>
              All payments can be credited directly in cryptocurrencies or
              automatically converted (in whole or in part) into fiat money, or
              it can also be invested in other cryptocurrencies or stablecoins.
            </Content>
            <Button>Learn more</Button>
            <br />
            <br />
          </div>
          <img src={wallet} alt="wallet" />
        </CryptoContainer>
        <CryptoContainer>
          <Benefits>Main benefits.</Benefits>
        </CryptoContainer>
        <BenefitsContainer>
          <div>
            <h5>
              01
              <span>.</span>
            </h5>
            <h6>
              Enables the commerce to accept payment in multiple
              cryptocurrencies and/or custom assets.
            </h6>
          </div>
          <div>
            <h5>
              02
              <span>.</span>
            </h5>
            <h6>SaaS platform accessible from any device.</h6>
          </div>
          <div>
            <h5>
              03
              <span>.</span>
            </h5>
            <h6>APIs are very intuitive and easy to integrate.</h6>
          </div>
          <div>
            <h5>
              04
              <span>.</span>
            </h5>
            <h6>Reduces payment transaction costs in stores.</h6>
          </div>
          <div>
            <h5>
              05
              <span>.</span>
            </h5>
            <h6>
              Automatic convertibility of cryptocurrencies to local currency.
            </h6>
          </div>
        </BenefitsContainer>
      </CryptoSection>
      <Footer />
    </>
  )
}

const CryptoSection = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: auto;
  background: #000;
  padding: 150px 80px 100px 80px;
  box-sizing: border-box;
  @media only screen and (max-width: 850px) {
    padding: 50px 30px;
  }
`

const BenefitsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 0;
  box-sizing: border-box;
  height: auto;
  text-align: left;
  gap: 10px;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
  h5 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 28px;
    letter-spacing: 0.02em;
    color: #ffffff;
    span {
      color: #ff5900;
    }
  }
  h6 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #ffffff;
    max-width: 200px;
  }
`

const Benefits = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;

  color: #ff5000;
`

const CryptoContainer = styled(BenefitsContainer)`
  max-width: 1140px;
  align-items: center;
`

const CryptoTitle = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 38px;
  line-height: 44px;
  color: #ffffff;
  width: 700px;
`

const Content = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 22px;
  max-width: 540px;
  margin-left: 0;
  color: #ffffff;
`

const Button = styled.a`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0.01em;
  padding: 7px 23px;
  border: solid 1.5px #ff5000;
  border-radius: 26px;
  color: #ff5000;
  margin-top: 30px;
  display: inline-block;
  text-decoration: none;

  @media only screen and (max-width: 850px) {
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.02em;
    padding: 6px 23px;
  }
`
