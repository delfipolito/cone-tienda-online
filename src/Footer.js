import React from 'react'
import styled from 'styled-components'
import { BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import { FormattedMessage } from 'react-intl'

const Footer = props => {
  return (
    <FooterSection>
      <FContainer>
        <FooterContainer>
        <div>
            <Link
              href="https://linktr.ee/koibanxpolicy"
              rel="noreferrer"
              target="_blank"
            >
                   <FormattedMessage id="footer.policies.title" />
            </Link>
            <Link
              href="https://koibanx-webpage-terminos.s3.amazonaws.com/T%C3%A9rminos+de+Uso+-+Koibanx+El+Salvador+2022.pdf"
              target="_blank"
              rel="noreferrer"
            >
               <FormattedMessage id="footer.terms.title" />
            </Link>
          </div>
          <div>
            <Button
              href="www.koibanx.com/jobs"
              rel="noreferrer"
              target="_blank"
            >
             <FormattedMessage id="footer.join" />
            </Button>
          </div>
          <Social>
            <a
              href="https://www.linkedin.com/company/koibanx/mycompany/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://twitter.com/koibanx"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>
            <a
              href=" https://www.youtube.com/c/Koibanx "
              target="_blank"
              rel="noreferrer"
            >
              <BsYoutube />
            </a>
            
          </Social>
         
        </FooterContainer>
      </FContainer>
    </FooterSection>
  )
}

const FooterSection = styled.section`
  height: auto;
  width: 100%;
  margin: auto;
  background: #1B1B1B;
  padding: 30px 80px;
  box-sizing: border-box;
  @media only screen and (max-width: 850px) {
    padding: 30px;
  }
`

const FContainer = styled.div`
  height: auto;
`

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    display: flex;
    gap: 30px;
  }
  @media only screen and (max-width: 420px) {
    div {
      width: 90% !important;
    }
  }
  @media only screen and (max-width: 1130px) {
    flex-direction: column;
    div {
      padding: 20px 0;
      text-align: center;
      width: 367px;
      margin: auto;
      justify-content: space-around;
    }
  }
`

const Link = styled.a`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-decoration-line: underline;
  color: #ffffff;
  @media only screen and (max-width: 750px) {
    font-size: 11px;
    line-height: 19px;
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
  border: solid 2px white;
  border-radius: 26px;
  color: #ffffff;
  display: inline-block;
  text-decoration: none;
  &:hover {
    color: white;
  }
  @media only screen and (max-width: 850px) {
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.02em;
    padding: 6px 23px;
  }
`

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 150px;
  @media only screen and (max-width: 850px) {
    justify-content: center;
  }
  a {
    font-size: 23px;
    color: white;
    text-decoration: none;
  }
`

export default Footer
