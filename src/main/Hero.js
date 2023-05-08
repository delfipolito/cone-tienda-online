import React from "react";
import styled from "styled-components";
import AnimatedText from "./AnimatedText.js";
import { FormattedMessage } from "react-intl";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <AnimatedText>
          <HeroTitle>
            <FormattedMessage id="hero.title" />
            <span>.</span>
          </HeroTitle>
          <HeroSubtitle>
            <FormattedMessage
              id="hero.text"
              values={{ b: (word) => <b>{word}</b>, brTag: () => <br /> }}
            />
          </HeroSubtitle>
        </AnimatedText>
      </HeroContainer>
    </HeroSection>
  );
};

const HeroSection = styled.div`
  min-height: calc(100vh - 90px);
  height: auto;
  width: 100%;
  margin: auto;
  background: transparent;
  box-sizing: border-box;
  text-align: left;
  text-rendering: optimizeLegibility;
  padding: 60px 80px 30px 80px;
  position: relative;

  @media only screen and (min-width: 990px) and (max-width: 1200px) {
    padding: 130px 80px 30px 80px;
  }

  @media only screen and (min-width: 850px) and (max-width: 990px) {
    padding: 150px 80px 30px 80px;
  }

  @media only screen and (max-width: 849px) {
    padding: 170px 80px 30px 50px;

  }

  video {
    position: absolute;
    z-index: 0;
    left: 50%;
    transform: translate(-50%, 0);
    top: -25px;
  }
`;

const HeroContainer = styled.div`
  flex-wrap: wrap;
  padding-top: 50px;
  height: auto;
  div {
    position: relative;
    z-index: 1;
  }
`;

const HeroTitle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 123px;
  line-height: 123px;
  letter-spacing: 0.01em;
  color: #ffffff;
  text-transform: uppercase;
  max-width: 920px;
  margin-bottom: 10px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  span {
    color: #ff5900;
  }

  @media only screen and (min-width: 990px) and (max-width: 1200px) {
    font-size: 100px;
    line-height: 95px;
  }

  @media only screen and (min-width: 850px) and (max-width: 990px) {
    font-size: 80px;
    line-height: 90px;
  }

  @media only screen and (max-width: 849px) {
    font-size: 73px;
    line-height: 80px;
  }
`;

const HeroSubtitle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.02em;
  max-width: 582px;
  color: #ffffff;
  b {
    font-weight: 700;
  }

  @media only screen and (min-width: 990px) and (max-width: 1200px) {
    font-size: 22px;
  }

  @media only screen and (min-width: 850px) and (max-width: 990px) {
    font-size: 20px;
    padding-top: 30px;
  }

  @media only screen and (max-width: 849px) {
    font-size: 19px;
    padding-top: 30px;
  }
`;

export default Hero;
