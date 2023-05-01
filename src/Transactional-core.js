import { Link } from "react-router-dom";
import styled from "styled-components";
import wallet from "./assets/wallet.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Carousel from "react-elastic-carousel";
import { FormattedMessage } from "react-intl";

export default function Crypto() {
  return (
    <>
      <Navbar />
      <CryptoSection>
        <CryptoContainer>
          <div>
            <CryptoTitle>
              <FormattedMessage
                id="transactionalcore.title"
                values={{ b: (word) => <b>{word}</b> }}
              />
            </CryptoTitle>
            <Content>
              <FormattedMessage id="transactionalcore.subtitle" />
            </Content>
            <br />
            <br />
          </div>
          <img src={wallet} alt="wallet" />
        </CryptoContainer>
        <CryptoContainer>
          <Benefits>
            {" "}
            <FormattedMessage id="transactionalcore.aplications" />
          </Benefits>
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
              <FormattedMessage id="transactionalcore.aplications.1.title" />
                <span>.</span>
              </h5>
              <h6>
              <FormattedMessage id="transactionalcore.aplications.1.text" />
              </h6>
              <Button><FormattedMessage id="transactionalcore.aplications.button" /></Button>
            </Item>
            <Item>
              <h5>
              <FormattedMessage id="transactionalcore.aplications.2.title" />
                <span>.</span>
              </h5>
              <h6>
              <FormattedMessage id="transactionalcore.aplications.2.text" />
              </h6>
              <Button><FormattedMessage id="transactionalcore.aplications.button" /></Button>
            </Item>
            <Item>
              <h5>
              <FormattedMessage id="transactionalcore.aplications.3.title" />
                <span>.</span>
              </h5>
              <h6>
              <FormattedMessage id="transactionalcore.aplications.3.text" />
              </h6>
              <Button><FormattedMessage id="transactionalcore.aplications.button" /></Button>
            </Item>
            <Item>
              <h5>
              <FormattedMessage id="transactionalcore.aplications.4.title" />
                <span>.</span>
              </h5>
              <h6>
              <FormattedMessage id="transactionalcore.aplications.4.text" />
              </h6>
              <Button><FormattedMessage id="transactionalcore.aplications.button" /></Button>
            </Item>
            <Item>
              <h5>
              <FormattedMessage id="transactionalcore.aplications.5.title" />
                <span>.</span>
              </h5>
              <h6>
              <FormattedMessage id="transactionalcore.aplications.5.text" />
              </h6>
              <Button>  <FormattedMessage id="transactionalcore.aplications.button" /></Button>
            </Item>
          </Carousel>
        </BenefitsContainer>
      </CryptoSection>
      <Footer />
    </>
  );
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
`;

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
`;

const Item = styled.div`
  background: #272727;
  border-radius: 25px;
  width: 310px;
  padding: 40px 20px;
  margin: 0 10px;

  h5 {
    font-family: "Poppins";
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
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
`;

const Benefits = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;

  color: #ff5000;
`;

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
`;

const CryptoTitle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 38px;
  line-height: 44px;
  color: #ffffff;
  width: 700px;
`;

const Content = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 22px;
  max-width: 540px;
  margin-left: 0;
  color: #ffffff;
`;

const Button = styled.a`
  font-family: "Poppins";
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
`;
