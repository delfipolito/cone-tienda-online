import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import cube from "../assets/mobilehero/image 1.png";

const HeroMobile = () => {
  return (
    <>
      <HeroMobileSection>
        <HeroMobileContainer>
          <img src={cube} />
          <HeroTitle>
            <FormattedMessage id="hero.title" />
            <span>.</span>
          </HeroTitle>
          <h3>
            <FormattedMessage
              id="hero.text"
              values={{ b: (word) => <b>{word}</b>, brTag: () => <br /> }}
            />
          </h3>
        </HeroMobileContainer>
      </HeroMobileSection>
    </>
  );
};

const HeroMobileSection = styled.div`
  width: 100%;
  margin: auto;
  background: transparent;
  text-align: left;
  text-rendering: optimizeLegibility;
  display: flex;
  min-height: 500px;
  max-height: 500px;
`;

const HeroMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: 0 auto;


  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    color: #ffffff;
    max-width: 400px;


    @media only screen and (max-width: 415px) {
      font-size: 13px;
      line-height: 18px;
      max-width: 270px;
    }
  }

  img{
    position:relative;
    width: 400px;
    height: 400px;
    top:200px;

    @media only screen and (max-width: 415px) {
      width: 300px;
    height: 300px;
    }

  }
`;

const HeroTitle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 50px;
  letter-spacing: 0.01em;
  color: #ffffff;
  text-transform: uppercase;
  max-width: 500px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100;

  span {
    color: #ff5900;
  }

  @media only screen and (max-width: 415px) {
    font-size: 35px;
    line-height: 40px;
    max-width: 300px;
  }
`;

export default HeroMobile;
