import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Loop from './main/Loop'
import Footer from './Footer'
import Navbar from './Navbar'
import { FormattedMessage } from 'react-intl'

export default function JobList() {
  return (
    <>
      <Navbar />
      <Section>
        <Loop
          content={
            <Title>
              <h1>We are hiring!</h1>
              <h1 className="hollow">We are hiring!</h1>
              <h1>We are hiring!</h1>
              <h1 className="hollow">We are hiring!</h1>
              <h1>We are hiring!</h1>
              <h1 className="hollow">We are hiring!</h1>
              <h1>We are hiring!</h1>
              <h1 className="hollow">We are hiring!</h1>
            </Title>
          }
        />

        <SectionContainer>
          <Box>
            <JobItem
              title="Sr. Sales Specialist"
              description={<FormattedMessage id="jobs.1.text" />}
              id="01"
            />
            <JobItem
              title="Backend Developer"
              description={<FormattedMessage id="jobs.2.text" />}
              id="02"
            />
            <JobItem
              title="Jr. Technical Support"
              description={<FormattedMessage id="jobs.3.text" />}
              id="03"
            />
            <JobItem
              title="UI Designer Jr"
              description={<FormattedMessage id="jobs.4.text" />}
              id="04"
            />
          </Box>
        </SectionContainer>
      </Section>
      <Footer />
    </>
  )
}

const JobItem = ({ id, title, description }) => {
  return (
    <Item>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={`/jobs/${id}`}><FormattedMessage id="jobs.button" /></Link>
    </Item>
  )
}

const Item = styled.div`
  color: white;
  letter-spacing: 0.02em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h3 {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 30px;
    @media only screen and (max-width: 850px) {
      font-size: 19px;
    }
  }
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
    margin-top: 15px;
    @media only screen and (max-width: 850px) {
      font-size: 12px;
      line-height: 20px;
    }
  }
  a {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.01em;
    padding: 7px 23px;
    border: solid 1.5px #FF5900;
    border-radius: 26px;
    color: #FF5900;
    margin-top: 6px;
    display: inline-block;
    text-decoration: none;
  }
`

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-auto-rows: 1fr;
  column-gap: 70px;
  row-gap: 40px;

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

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: auto;
  background: #000;
  padding: 30px 0 100px 0;
  @media only screen and (max-width: 850px) {
    padding: 50px 30px;
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 95px;
    line-height: 100px;
    color: #FF5900;
    margin-right: 30px;
    &.hollow {
      -webkit-text-stroke: #FF5900 1px;
      color: transparent;
      outline: 1px solid transparent;
      outline-offset: -1px;
    }
  }
`

const SectionContainer = styled.div`
  flex-wrap: wrap;
  margin: 20px 80px;
  height: auto;
  div {
    position: relative;
    z-index: 1;
  }
`
