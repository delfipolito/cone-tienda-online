import React from 'react'
import Carousel from 'react-elastic-carousel'
import styled from 'styled-components'

const CarouselSection = () => {
  return (
    <Container>
      <Carousel
        itemsToShow={1}
        itemsToScroll={1}
        pagination={true}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <Box>
              {pages.map(page => {
                const isActivePage = activePage === page
                return (
                  <div
                    key={page}
                    onClick={() => onClick(page)}
                    active={isActivePage.toString()}
                  >
                  <img
                    src={`./assets/${page}.svg`}
                    alt="Press"
                    width="100"
                    height="50"
                    className={isActivePage ? 'active' : 'notActive'}
                  />
                  </div>
                )
              })}
            </Box>
          )
        }}
      >
        <Item>
          <Quote>
            <span>“</span>
            <br />
            We want to remain at the forefront of redefining Latin America's
            financial system. A blockchain-based financial system inevitably
            results in faster, scalable and programmable financial products that
            will grant access to a broader segment of the population that is
            currently underserved.
          </Quote>
          <a>Read more</a>
        </Item>
        <Item>
          <Quote>
            <span>“</span>
            <br />
            The forms of intellectual property reached by the agreement include
            trademarks, patents and all kinds of copyright: such as songs,
            lyrics, videos, shows, conferences, podcasts and all forms of
            content that can be transmitted.
          </Quote>
          <a>Read more</a>
        </Item>
        <Item>
          <Quote>
            <span>“</span>
            <br />
            Mi Vacuna provides exact statistics on the penetration rate of the
            COVID-19 vaccination program. This application connects with the
            Koibanx platform, where a blockchain identity is created for each
            citizen with the records or information of each care and/or
            interaction with the Colombian health system.
          </Quote>
          <a>Read more</a>
        </Item>
        <Item>
          <Quote>
            <span>“</span>
            <br />
            It is necessary to resolve, in advance, important technological and
            regulatory aspects to achieve an orderly massification of
            tokenization and, especially, to advance in a legal framework on the
            scope of smart contracts.
          </Quote>
          <a>Read more</a>
        </Item>
        <Item>
          <Quote>
            <span>“</span>
            <br />
            In the 2022 edition of the Green Awards festival, Algorand and
            Koibanx were invited to provide an explanatory workshop on
            blockchain technology and the different use cases. Thus, they listed
            the benefits of the Algorand blockchain in sustainable projects.
          </Quote>
          <a>Read more</a>
        </Item>
      </Carousel>
    </Container>
  )
}

const Container = styled.div`
  color: white;
  text-align: left;
  .rec-carousel {
    width: 1050px;
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
  .rec-arrow:focus{
    background-color: transparent;
    color: #ffffff;
    box-shadow: none;
  }
`

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  div {
    cursor: pointer;
  }
  .active {
    opacity: 1;
  }
  .notActive {
    opacity: 0.4;
    &:hover {
      opacity: 1;
    }
  }
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  margin: 0 100px;

  @media only screen and (max-width: 700px) {
      margin: 0 4px;
      flex-direction: column;
      gap: 50px;
  }

  a {
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

    @media only screen and (max-width: 850px) {
      font-size: 14px;
      line-height: 28px;
      letter-spacing: 0.02em;
      padding: 6px 23px;
    }
  }
`

const Quote = styled.p`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  max-width: 440px;
  span {
    font-size: 59px;
    line-height: 82px;
    letter-spacing: 0.02em;
  }
`


export default CarouselSection
