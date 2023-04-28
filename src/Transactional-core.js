import { Link } from 'react-router-dom'
import styled from 'styled-components'
import wallet from './assets/wallet.png'
import Footer from './Footer'
import Navbar from './Navbar'
import Carousel from 'react-elastic-carousel'

export default function Crypto() {
  return (
    <>
      <Navbar />
      <CryptoSection>
        <CryptoContainer>
          <div>
            <CryptoTitle>
              <b>Transactional software</b> that connects to the banking core.
              Apified and Blockchain based.
            </CryptoTitle>
            <Content>
              It allows creating and managing multiple types of assets (tokens),
              logically programming business on them, compatible with crypto and
              interconnected with the services of the Financial Institution.
            </Content>
            <br />
            <br />
          </div>
          <img src={wallet} alt="wallet" />
        </CryptoContainer>
        <CryptoContainer>
          <Benefits>Main Core Aplications.</Benefits>
        </CryptoContainer>
        <BenefitsContainer>
          <Carousel
            itemsToShow={3}
            enableTilt={true}
            enableAutoPlay={true}
            autoPlaySpeed={3000}
            pagination={false}
            outerSpacing={100}
          >
            <Item>
              <h5>
                Virtual Wallet
                <span>.</span>
              </h5>
              <h6>
                We provide the complete framework for virtual wallets and
                neobanks. Collection licenses by country, Apified connection to
                the interbank payment system and implementation of the entire
                core to manage aggregator, collector, derivative and sub-account
                accounts.
              </h6>
              <Button>Learn more</Button>
            </Item>
            <Item>
              <h5>
                Cashless Collections
                <span>.</span>
              </h5>
              <h6>
                Implementation of the core to manage collections from multiple
                sources in real time. Ideal for distributors, marketing networks
                and chains. The different collection points record all
                transactions on the Blockchain...
              </h6>
              <Button>Learn more</Button>
            </Item>
            <Item>
              <h5>
                Private Issuing
                <span>.</span>
              </h5>
              <h6>
                Creation of own token or coin for transactions within the
                ecosystem. The token is backed by the issuer's liabilities,
                replicating the scheme of loyalty programs, allowing the payment
                commitment to circulate within system and implementation of the entire
                core to manage aggregator...
              </h6>
              <Button>Learn more</Button>
            </Item>
            <Item>
              <h5>
                Subsidies & Directed Consumption
                <span>.</span>
              </h5>
              <h6>
                We provide the complete framework for virtual wallets and
                neobanks. Collection licenses by country, Apified connection to
                the interbank payment system and implementation of the entire
                core to manage aggregator...
              </h6>
              <Button>Learn more</Button>
            </Item>
            <Item>
              <h5>
                Otra
                <span>.</span>
              </h5>
              <h6>
                We provide the complete framework for virtual wallets and
                neobanks. Collection licenses by country, Apified connection to
                the interbank payment system and implementation of the entire
                core to manage aggregator, collector, derivative and sub-account
                accounts.
              </h6>
              <Button>Learn more</Button>
            </Item>
          </Carousel>
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
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 0;
  box-sizing: border-box;
  height: auto;
  text-align: left;

  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }

  .rec-carousel {
    width: calc(100% + 90px);
    min-height: 300px;
    @media only screen and (max-width: 850px) {
      width: 90vw;
    }
  }
  .rec-slider-container {
    margin: 0;
  }
  .rec-arrow {
    background-color: transparent;
    color: #ffffff57;
    box-shadow: none;
  }
  .rec-arrow:hover,
  .rec-arrow:active,
  .rec-arrow:focus {
    background-color: transparent;
    color: #ffffff;
    box-shadow: none;
  }
`

const Item = styled.div`
  background: #272727;
  border-radius: 25px;
  width: 310px;
  padding: 40px 20px;
  margin: 0 10px;

  h5 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    line-height: 40px;
    color: #ffffff;
    margin: 0;
    span {
      padding-left: 3px;
      color: #ff5900;
    }
  }
  h6 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
`

const Benefits = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;

  color: #ff5000;
`

const CryptoContainer = styled.div`
  max-width: 1140px;
  align-items: center;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  padding-top: 0;
  box-sizing: border-box;
  height: auto;
  text-align: left;
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
