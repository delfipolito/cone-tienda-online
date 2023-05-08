import React from 'react'
import Carousel from 'react-elastic-carousel'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

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
            <FormattedMessage id="press.forbes.text" />
          </Quote>
          <a
            target="_blank"
            href="https://www.forbesargentina.com/innovacion/una-empresa-argentina-ayudara-exportar-creaciones-artistas-tecnologia-blockchain-n16390 "
          >
            {' '}
            <FormattedMessage id="press.button" />
          </a>
        </Item>
        <Item>
          <Quote>
            <span>“</span>
            <br />
            <FormattedMessage id="press.eltiempo.text" />
          </Quote>
          <a
            target="_blank"
            href="https://www.eltiempo.com/contenido-comercial/el-exito-e-impacto-de-mi-vacuna-en-alianza-con-la-plataforma-koibanx-675784"
          >
            {' '}
            <FormattedMessage id="press.button" />
          </a>
        </Item>
        <Item>
          <Quote>
            <span>“</span>
            <br />
            <FormattedMessage id="press.cointelegraph.text" />
          </Quote>
          <a target="_blank" href="https://es.cointelegraph.com/news/officials-entrepreneurs-and-crypto-ecosystem-leaders-met-at-a-summit-hosted-by-koibanx-in-argentina">
            <FormattedMessage id="press.button" />
          </a>
        </Item>
        <Item>
          <Quote>
            <span>“</span>
            <br />
            <FormattedMessage id="press.infobae.text" />
          </Quote>
          <a target="_blank" href="https://www.infobae.com/opinion/2022/09/01/el-negocio-de-la-tokenizacion-de-commodities-e-inmuebles-puede-desarrollarse-legalmente-en-argentina/ ">
            {' '}
            <FormattedMessage id="press.button" />
          </a>
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
    @media only screen and (max-width: 1050px) {
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

  rec-carousel-item {
    display: flex;
    align-items: centerM
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

  @media only screen and (max-width: 1050px) {
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
    text-decoration: none;
    margin-top: 75px;

    @media only screen and (max-width: 850px) {
      font-size: 13px;
      line-height: 28px;
      letter-spacing: 0.02em;
      padding: 5px 23px;
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
  @media only screen and (max-width: 850px) {
    font-size: 16px;
    line-height: 24px;
  }
  span {
    font-size: 57px;
  }
`

export default CarouselSection
