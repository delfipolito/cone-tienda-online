import React from "react";
import styled from "styled-components";
import background from "../assets/main/orange-gradient.mp4";
import { FormattedMessage } from "react-intl";

const General = ({ about }) => {
  return (
    <GeneralSection>
      <BackgroundVideo autoPlay muted loop>
        <source src={background} type="video/mp4" />
      </BackgroundVideo>
      <GeneralContainer>
        <Box>
          <p>
            {" "}
            <FormattedMessage id="about.1" />
          </p>
          <p>
            {" "}
            <FormattedMessage id="about.2" />
          </p>
          <p>
            {" "}
            <FormattedMessage id="about.3" />
          </p>
        </Box>
        <h2>
          <FormattedMessage id="about.text" />
        </h2>
      </GeneralContainer>
    </GeneralSection>
  );
};

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

const GeneralSection = styled.section`
  min-height: 700px;
  height: 100vh;
  width: 100%;
  margin: auto;
  background: transparent;
  overflow: hidden;
  padding: 100px 80px;
  position: relative;
  box-sizing: border-box;
  @media only screen and (max-width: 850px) {
    padding: 50px 30px;
  }
`;

const GeneralContainer = styled.div`
  padding-top: 30px;
  height: auto;
  text-align: center;
  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 25px;
    color: #ffffff;
    max-width: 823px;
    /* margin: 100px 42px 100px auto; */
    padding-left: 50px;
    padding-top: 100px;
    text-align: left;


    @media only screen and (max-width: 1050px) {
      font-size: 25px;

    }

    @media only screen and (max-width: 1000px) {
      margin-right: 60px;
    }

    @media only screen and (max-width: 850px) {
      font-size: 20px;
      padding-left: 30px;
      padding-top: 50px;

    }

    @media only screen and (max-width: 600px) {
      font-size: 18px;
      padding-left: 15px;
      line-height: 20px;

    }

    @media only screen and (max-width: 500px) {
      font-size: 15px;
    }
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 114.5%;
    letter-spacing: 0.02em;
    color: #ff5900;
    text-align: left;
    width: auto;
    &:nth-child(1) {
      max-width: 250px;
    }
    &:nth-child(2) {
      max-width: 422px;
    }
    &:nth-child(3) {
      max-width: 290px;
    }
  }

  @media only screen and (max-width: 1050px) {
    p {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1px;
    padding-left: 30px;

    p {
      text-align: left;
      color: white;
      font-size: 25px;
    }
  }

  @media only screen and (max-width: 600px) {
    padding-left: 15px;

    p {
      text-align: left;
      font-size: 22px;
    }
  }
`;

const GeneralTitle = styled.h1`
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: white;
  margin-bottom: 50px;
  @media only screen and (max-width: 850px) {
    font-size: 25px;
    margin-bottom: 30px;
  }
`;
export default General;
