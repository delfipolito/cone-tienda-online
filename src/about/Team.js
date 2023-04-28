import React from 'react'
import styled from 'styled-components'
import linkedin from '../assets/linkedin.svg'
import leo from '../assets/team/leo.png'
import lety from '../assets/team/lety.png'
import fran from '../assets/team/fran.png'
import cata from '../assets/team/cata.png'
import mar from '../assets/team/mar.png'
import nico from '../assets/team/nico.png'

const Team = ({ about }) => {
  return (
    <TeamSection>
      <TeamTitle>Executive Team.</TeamTitle>
      <Box>
        <Item>
          <Image src={leo} alt="Leo"/>
          <div>
            <h2>
              Leo Elduayen <br />
              <span> Co Founder & CEO</span>
            </h2>
            <p>
              CoFounder & CEO + 10 years in Crypto. VP Bitcoin Argentina NGO.
              Crypto Pioneer. Lawyer & Coder. He previously worked at
              MercadoLibre and Philip Morris International.
            </p>
            <a
              href="https://www.linkedin.com/in/leo-elduayen-a2314399/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={linkedin} alt="Linkedin"/>
            </a>
          </div>
        </Item>
        <Item>
          <Image src={lety} alt="Lety"/>
          <div>
            <h2>
              Edy Weber
              <br />
              <span>Co Founder & CTO</span>
            </h2>
            <p>
              Chief Operations Officer Economist and Public Policy Specialist.
              +9 years of professional experience across the public and private
              sector.{' '}
            </p>
            <a
              href="https://www.linkedin.com/in/edy-weber-045258/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={linkedin} alt="Linkedin"/>
            </a>
          </div>
        </Item>
        <Item>
          <Image src={fran} alt="Fran"/>
          <div>
            <h2>
              Fran Mayora
              <br />
              <span>CFO</span>
            </h2>
            <p>
              Chief Financial Officer Economist, Master in Finance, CFA. +10
              years of experience in financial markets, specializing in pricing
              and financial structuring.{' '}
            </p>
            <a
              href="https://www.linkedin.com/in/francisco-mayora-3301b93b/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={linkedin} alt="Linkedin"/>
            </a>
          </div>
        </Item>
        <Item>
          <Image src={cata} alt="Cata"/>
          <div>
            <h2>
              Lety Lopez Tiznado
              <br />
              <span>Chief of Staff</span>
            </h2>
            <p>
              Chief of Staff +12 years of experience in fintech, SaaS & in
              venture capital and innovation ecosystem in Latam. MBA
              professional. She previously worked at Ruta N, NXTP, Designit and
              Yaydoo.
            </p>
            <a
              href="https://www.linkedin.com/in/leticia-l%C3%B3pez-tiznado-27699337/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={linkedin} alt="Linkedin"/>
            </a>
          </div>
        </Item>
        <Item>
          <Image src={mar} alt="Mar"/>
          <div>
            <h2>
              Tulio Nuñez
              <br />
              <span>Head of Legal & Compliance</span>
            </h2>
            <p>
              Head of Marketing Publicist & Art. + 10 years of experience in
              Brand design, building and growth. Member of women in crypto &
              women in fintech.{' '}
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
          <Image src={nico} alt="Nico"/>
          <div>
            <h2>
              Mar Fernández
              <br />
              <span>Head of Marketing</span>
            </h2>
            <p>
              Head of Deployment +10 years of experience working in Development,
              Maintenance & Technical/Software support. He previously worked in
              companies of government and communications technology
            </p>
            <a
              href="https://www.linkedin.com/in/mariannferr/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={linkedin} alt="Linkedin"/>
            </a>
          </div>
        </Item>
      </Box>
      <Button
        target="_blank"
        href="https://www.linkedin.com/company/koibanx/mycompany/"
        variant="outline-warning"
      >
        Meet the rest of the team
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
  }
`

const Item = styled.div`
  color: white;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
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
    margin-top:0;
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
`

export default Team
