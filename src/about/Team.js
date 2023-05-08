import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import linkedin from '../assets/linkedin.svg'
import leo from '../assets/team/leo.png'
import lety from '../assets/team/lety.png'
import fran from '../assets/team/fran.png'
import cata from '../assets/team/cata.png'
import mar from '../assets/team/mar.png'
import nico from '../assets/team/nico.png'
import Carousel from 'react-elastic-carousel'
import { FormattedMessage } from 'react-intl'

const Team = ({ about }) => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  const medium = 1000

  return (
    <TeamSection>
      <TeamTitle>
        {' '}
        <FormattedMessage id="about.team" />
      </TeamTitle>

      {width > medium ? (
        <>
          <Box>
            <Item>
              <Image src={leo} alt="Leo" />
              <div>
                <h2>
                  <FormattedMessage id="about.team.1.name" /> <br />
                  <span>
                    {' '}
                    <FormattedMessage id="about.team.1.position" />
                  </span>
                </h2>
                <p>
                  <FormattedMessage id="about.team.1.description" />
                </p>
                <a
                  href="https://www.linkedin.com/in/leo-elduayen-a2314399/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={linkedin} alt="Linkedin" />
                </a>
              </div>
            </Item>
            <Item>
              <Image src={lety} alt="Lety" />
              <div>
                <h2>
                  <FormattedMessage id="about.team.2.name" />
                  <br />
                  <span>
                    <FormattedMessage id="about.team.2.position" />
                  </span>
                </h2>
                <p>
                  <FormattedMessage id="about.team.2.description" />
                </p>
                <a
                  href="https://www.linkedin.com/in/edy-weber-045258/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={linkedin} alt="Linkedin" />
                </a>
              </div>
            </Item>
            <Item>
              <Image src={fran} alt="Fran" />
              <div>
                <h2>
                  <FormattedMessage id="about.team.3.name" />
                  <br />
                  <span>
                    <FormattedMessage id="about.team.3.position" />
                  </span>
                </h2>
                <p>
                  <FormattedMessage id="about.team.3.description" />
                </p>
                <a
                  href="https://www.linkedin.com/in/francisco-mayora-3301b93b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={linkedin} alt="Linkedin" />
                </a>
              </div>
            </Item>
            <Item>
              <Image src={cata} alt="Cata" />
              <div>
                <h2>
                  <FormattedMessage id="about.team.4.name" />
                  <br />
                  <span>
                    {' '}
                    <FormattedMessage id="about.team.4.position" />
                  </span>
                </h2>
                <p>
                  <FormattedMessage id="about.team.4.description" />
                </p>
                <a
                  href="https://www.linkedin.com/in/leticia-l%C3%B3pez-tiznado-27699337/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={linkedin} alt="Linkedin" />
                </a>
              </div>
            </Item>
            <Item>
              <Image src={mar} alt="Mar" />
              <div>
                <h2>
                  <FormattedMessage id="about.team.5.name" />
                  <br />
                  <span>
                    {' '}
                    <FormattedMessage id="about.team.5.position" />
                  </span>
                </h2>
                <p>
                  <FormattedMessage id="about.team.5.description" />
                </p>
                <a
                  href="https://www.linkedin.com/in/tulionunezh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={linkedin} alt="Linkedin" />
                </a>
              </div>
            </Item>
            <Item>
              <Image src={nico} alt="Nico" />
              <div>
                <h2>
                  <FormattedMessage id="about.team.6.name" />
                  <br />
                  <span>
                    {' '}
                    <FormattedMessage id="about.team.6.position" />
                  </span>
                </h2>
                <p>
                  <FormattedMessage id="about.team.6.description" />
                </p>
                <a
                  href="https://www.linkedin.com/in/mariannferr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={linkedin} alt="Linkedin" />
                </a>
              </div>
            </Item>
          </Box>
        </>
      ) : (
        <>
          <BenefitsContainer>
            <Carousel itemsToShow={1.3} enableTilt={true} pagination={false}>
              <Item>
                <Image src={leo} alt="Leo" />
                <div>
                  <h2>
                    <FormattedMessage id="about.team.1.name" /> <br />
                    <span>
                      {' '}
                      <FormattedMessage id="about.team.1.position" />
                    </span>
                  </h2>
                  <p>
                    <FormattedMessage id="about.team.1.description" />
                  </p>
                  <a
                    href="https://www.linkedin.com/in/leo-elduayen-a2314399/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={linkedin} alt="Linkedin" />
                  </a>
                </div>
              </Item>
              <Item>
                <Image src={lety} alt="Lety" />
                <div>
                  <h2>
                    <FormattedMessage id="about.team.2.name" />
                    <br />
                    <span>
                      <FormattedMessage id="about.team.2.position" />
                    </span>
                  </h2>
                  <p>
                    <FormattedMessage id="about.team.2.description" />
                  </p>
                  <a
                    href="https://www.linkedin.com/in/edy-weber-045258/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={linkedin} alt="Linkedin" />
                  </a>
                </div>
              </Item>
              <Item>
                <Image src={fran} alt="Fran" />
                <div>
                  <h2>
                    <FormattedMessage id="about.team.3.name" />
                    <br />
                    <span>
                      <FormattedMessage id="about.team.3.position" />
                    </span>
                  </h2>
                  <p>
                    <FormattedMessage id="about.team.3.description" />
                  </p>
                  <a
                    href="https://www.linkedin.com/in/francisco-mayora-3301b93b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={linkedin} alt="Linkedin" />
                  </a>
                </div>
              </Item>
              <Item>
                <Image src={cata} alt="Cata" />
                <div>
                  <h2>
                    <FormattedMessage id="about.team.4.name" />
                    <br />
                    <span>
                      {' '}
                      <FormattedMessage id="about.team.4.position" />
                    </span>
                  </h2>
                  <p>
                    <FormattedMessage id="about.team.4.description" />
                  </p>
                  <a
                    href="https://www.linkedin.com/in/leticia-l%C3%B3pez-tiznado-27699337/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={linkedin} alt="Linkedin" />
                  </a>
                </div>
              </Item>
              <Item>
                <Image src={mar} alt="Mar" />
                <div>
                  <h2>
                    <FormattedMessage id="about.team.5.name" />
                    <br />
                    <span>
                      {' '}
                      <FormattedMessage id="about.team.5.position" />
                    </span>
                  </h2>
                  <p>
                    <FormattedMessage id="about.team.5.description" />
                  </p>
                  <a
                    href="https://www.linkedin.com/in/tulionunezh/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={linkedin} alt="Linkedin" />
                  </a>
                </div>
              </Item>
              <Item>
                <Image src={nico} alt="Nico" />
                <div>
                  <h2>
                    <FormattedMessage id="about.team.6.name" />
                    <br />
                    <span>
                      {' '}
                      <FormattedMessage id="about.team.6.position" />
                    </span>
                  </h2>
                  <p>
                    <FormattedMessage id="about.team.6.description" />
                  </p>
                  <a
                    href="https://www.linkedin.com/in/mariannferr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={linkedin} alt="Linkedin" />
                  </a>
                </div>
              </Item>
            </Carousel>
          </BenefitsContainer>
        </>
      )}

      <Button
        target="_blank"
        href="https://www.linkedin.com/company/koibanx/mycompany/"
        variant="outline-warning"
      >
        <FormattedMessage id="about.team.button" />
      </Button>
    </TeamSection>
  )
}

const Image = styled.img``

const TeamSection = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: auto;
  background: #000;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 100px 80px;
  @media only screen and (max-width: 850px) {
    padding: 50px 30px;
  }
`

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-auto-rows: 1fr;
  column-gap: 30px;
  row-gap: 50px;

  @media only screen and (min-width: 751px) and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    max-width: 1100px;
  }
  /* @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    max-width: 90%;
  } */
`

const TeamTitle = styled.h1`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: white;
  margin-bottom: 30px;

  @media only screen and (max-width: 850px) {
    font-size: 25px;
    margin-bottom: 30px;
    padding-left: 50px;
  }
`

const Item = styled.div`
  color: white;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    height: 400px;
    align-items: left;
    justify-content: center;
    align-items: flex-start !important;
    padding: 50px;
    margin-left: 5px;
  }
  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 0;
    color: #ffffff;
    span {
      font-size: 13px;
    }

    @media only screen and (max-width: 850px) {
      font-size: 14px;
    }
  }
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #ffffff;
    margin-top: 0;
    word-break: break-word;

    @media only screen and (max-width: 850px) {
      font-size: 12px;
      line-height: 20px;
    }
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
  border: solid 2px #ffff00;
  border-radius: 26px;
  color: #ffff00;
  margin-top: 30px;
  display: inline-block;
  text-decoration: none;

  @media only screen and (max-width: 850px) {
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.02em;
    padding: 6px 23px;
  }

  @media only screen and (max-width: 850px) {
    font-size: 12px;
    line-height: 25px;
    margin-left: 50px;
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

export default Team
