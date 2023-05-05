import { Link } from "react-router-dom";
import styled from "styled-components";
import service from "./assets/service.mp4";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FormattedMessage } from "react-intl";

export default function Crypto() {
  return (
    <>
      <Navbar />
      <CryptoSection>
        <CryptoContainer>
          <div style={{minWidth: '50%'}}>
            <CryptoTitle style={{maxWidth: '315px'}}>
              <FormattedMessage id="cryptoservice.title" />
            </CryptoTitle>
            <Content>
              <FormattedMessage id="cryptoservice.subtitle" />
            </Content>
            <Button>
              <FormattedMessage id="cryptoservice.button" />
            </Button>
            <br />
            <br />
          </div>
          <video autoPlay muted loop style={{maxWidth: '90%'}}>
            <source src={service} type="video/mp4" />
          </video>
        </CryptoContainer>
        <CryptoContainer>
          <Benefits>
            {" "}
            <FormattedMessage id="cryptoservice.features" />
          </Benefits>
        </CryptoContainer>
        <BenefitsContainer>
          <div>
            <h5>
              <FormattedMessage id="cryptoservice.features.1.number" />
              <span>.</span>
            </h5>
            <h6>
              <FormattedMessage id="cryptoservice.features.1.text" />
            </h6>
          </div>
          <div>
            <h5>
              <FormattedMessage id="cryptoservice.features.2.number" />
              <span>.</span>
            </h5>
            <h6>
              {" "}
              <FormattedMessage id="cryptoservice.features.2.text" />
            </h6>
          </div>
          <div>
            <h5>
              <FormattedMessage id="cryptoservice.features.3.number" />
              <span>.</span>
            </h5>
            <h6>
              <FormattedMessage id="cryptoservice.features.3.text" />
            </h6>
          </div>
          <div>
            <h5>
              <FormattedMessage id="cryptoservice.features.4.number" />
              <span>.</span>
            </h5>
            <h6>
              <FormattedMessage id="cryptoservice.features.4.text" />
            </h6>
          </div>
          <div>
            <h5>
              <FormattedMessage id="cryptoservice.features.5.number" />
              <span>.</span>
            </h5>
            <h6>
              <FormattedMessage id="cryptoservice.features.5.text" />
            </h6>
          </div>
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
  padding-top: 0;
  box-sizing: border-box;
  height: auto;
  text-align: left;
  gap: 10px;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
  h5 {
    font-family: "Poppins";
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
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #ffffff;
    max-width: 200px;
  }
`;

const Benefits = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;

  color: #ff5000;
`;

const CryptoContainer = styled(BenefitsContainer)`
  max-width: 1140px;
  align-items: center;
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
