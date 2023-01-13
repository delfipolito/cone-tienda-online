import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import React, { useEffect, useRef } from "react";
import Link from "next/link"
import Image from "next/future/image";
import Marquee from "react-fast-marquee";
import styles from "../styles/Home.module.css";
import Carouselkoi from "../components/press";
import Pressmobile from "../components/press_mobile";
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const {t} = useTranslation();

  return (
    <>
      <container className="text-white">
        <section className="rectangulo main-video">
          <video src="https://koibanx.com/videos/Video+Home+Koibanx+01.mp4" autoPlay loop muted />
        </section>
        <section className="container text-white cuadrado absolute-top h-100 d-flex align-items-center">
          <Row className="d-flex flex-column container-sm">
            <Col xs={2} sm={2} md={2} lg={2}>
              <h2 className="display-mobile-none">{t('common:Home.herotitle')}</h2>
              <h2 className="display-mobile-yes fs-0 fw-regular">{t('common:Home.herotitle')}</h2>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <p className="display-mobile-none">{t('common:Home.herodescription')}</p>
              <p className="display-mobile-yes d-flex flex-column">Koibanx is the leading tokenization
                & blockchain payments platform in Latam,<span className="fw-hero-mobile"> with regional presence in 5 countries,
                  +7 years of track record, building “real-world” gateways that bridge the traditional
                  financial system with the web3 ecosystem.</span><br />
                Tokenization + on/off ramps made available within the regulatory framework for each country in the region.</p>
            </Col>
          </Row>
        </section>
        <section className="container-fluid text-white circulo bg-dark d-flex justify-content-center">
          <Row className="container d-flex flex-row align-items-center">
            <Col xs={12} sm={12} md={2} lg={2}>
              <h6>{t('common:Home.customerbar')}</h6>
            </Col>
            <Col xs={12} sm={12} md={12} lg={10}>
              <Marquee gradient={false} speed={60} className="slider-clients">
                <div className="slide">
                  <Image
                    src="/assets/clients-koi/davivienda.svg"
                    alt="Davivienda"
                    width={150}
                    height={50}
                  />
                </div>
                <div className="slide">
                  <Image
                    src="/assets/clients-koi/macro.svg"
                    alt="Macro"
                    width={150}
                    height={50}
                  />
                </div>
                <div className="slide">
                  <Image
                    src="/assets/clients-koi/abank.svg"
                    alt="Abank"
                    width={150}
                    height={50}
                  />
                </div>
                <div className="slide">
                  <Image
                    src="/assets/clients-koi/banco-de-valores.svg"
                    alt="Banco de valores"
                    width={150}
                    height={50}
                  />
                </div>
                <div className="slide">
                  <Image
                    src="/assets/clients-koi/rus.svg"
                    alt="Rus"
                    width={150}
                    height={50}
                  />
                </div>
              </Marquee>
            </Col>
          </Row>
        </section>
      </container>
      <container className="text-white">
        <section id="products" className="container-fluid bg-danger h-100 d-flex flex-column align-items-center justify-content-center">
          <Row className="container d-flex flex-row align-items-center justify-content-center">
            <Col xs={12} sm={12} md={11} lg={11}>
              <div className="py-4 display-mobile-yes">
                <h5 className="fs-4">Our products</h5>
                <h5 className="fw-lighter line-position"> ___________</h5>
              </div>
              <p className="fs-6 text-primary pb-5 fw-bold">{t('common:Home.products')}</p>
              <Row className="gy-5">
                <Col xs={12} sm={12} md={4} lg={4} className="container-button">
                  <div>
                    <h5 className="fs-6">Wallet as a service</h5>
                    <p className="font-p fs-8">
                      {t('common:Home.walletdescription')}
                    </p>
                  </div>
                  <Link href="/wallet" className="btn-holder" passHref>
                    <Button
                      className="rounded-pill fs-8 w-50"
                      variant="outline-light"
                    >
                      {t('common:Home.button')}
                    </Button>
                  </Link>
                </Col>
                <Col md={4} lg={4} sm={12} className="container-button">
                  <div>
                    <h5 className="fs-6">Crypto as a service</h5>
                    <p className="font-p fs-8">
                      {t('common:Home.cryptoservdescription')}
                    </p>
                  </div>
                  <Link href="/crypto_service" className="btn-holder" passHref>
                    <Button
                      className="rounded-pill fs-8 w-50"
                      variant="outline-light"
                    >
                      {t('common:Home.button')}
                    </Button>
                  </Link>
                </Col>
                <Col md={4} lg={4} sm={12} className="container-button">
                  <div>
                    <h5 className="fs-6">Crypto check out</h5>
                    <p className="font-p fs-8">
                      {t('common:Home.cryptocheckdescription')}
                    </p>
                  </div>
                  <Link href="/crypto_checkout" className="btn-holder" passHref>
                    <Button
                      className="rounded-pill fs-8 w-50"
                      variant="outline-light"
                    >
                      {t('common:Home.button')}
                    </Button>
                  </Link>
                </Col>
                <Col md={4} lg={4} sm={12} className="container-button">
                  <div>
                    <h5 className="fs-6">Issuing platform</h5>
                    <p className="font-p fs-8">
                      {t('common:Home.issuingdescription')}
                    </p>
                  </div>
                  <Link href="/multi_asset" className="btn-holder" passHref>
                    <Button
                      className="rounded-pill fs-8 w-50"
                      variant="outline-light"
                    >
                      {t('common:Home.button')}
                    </Button>
                  </Link>
                </Col>
                <Col md={4} lg={4} sm={12} className="container-button">
                  <div>
                    <h5 className="fs-6">Cross border settlements</h5>
                    <p className="font-p fs-8">
                      {t('common:Home.crossdescription')}
                    </p>
                  </div>
                  <Link href="/cross_border" className="btn-holder" passHref>
                    <Button
                      className="rounded-pill fs-8 w-50"
                      variant="outline-light"
                    >
                      {t('common:Home.button')}
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col xs={1} md={1} sm={1} lg={1} className="display-mobile-none text-center d-flex flex-column h-auto">
              <Image
                src="/assets/img/products.svg"
                alt="Products section"
                width={15}
                height={200}
                className="h-100 img-stretch-title"
              />
              <Image
                src="/assets/img/products_line.svg"
                alt="Products section"
                width={15}
                height={200}
                className="img-fluid h-100 img-stretch"
              />
            </Col>
          </Row>
        </section>
      </container>
      <container className="text-white">
        <section id="press" className="container-fluid h-100 d-flex flex-column align-items-center justify-content-center">
          <Row className="container d-flex flex-row align-items-center justify-content-center">
            <Col xs={12} sm={12} md={11} lg={11}>
              <Row>
                <div className="py-4 display-mobile-yes">
                  <h5 className="fs-4">Press</h5>
                  <h5 className="fw-lighter line-position"> ___________</h5>
                </div>
                <Carouselkoi />
                <Pressmobile />
                <Col md={12} className="d-flex justify-content-center mt-5">
                  <Button href="https://koibanx.medium.com/" variant="outline-warning" className="rounded-pill px-4 my-5 my-lg-0 btn-warning">
                    {t('common:News.buttonBlog')}
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col xs={1} md={1} lg={1} sm={1} className="text-center display-mobile-none">
              <Image
                src="/assets/img/press.svg"
                alt="Press section"
                width={20}
                height={450}
              />
            </Col>
          </Row>
        </section>
      </container>
      <container className="text-white">
        <section id="investors" className="container-fluid h-100 d-flex flex-column align-items-center justify-content-center">
          <Row className="container">
            <h5 className="text-warning">
              {t('common:Home.investors')}
            </h5>
            <Col xs={12} sm={12} md={8} lg={8} className="gy-1">
              <Row className="gx-5 gx-lg-5 pb-5">
                <Col xs={6} sm={6} md={4} lg={4}>
                  <Image
                    src="/assets/investors/logo_algorand.png"
                    alt="Logo Algorand"
                    className="img-fluid py-4"
                    width={200}
                    height={50}
                  />
                </Col>
                <Col xs={6} sm={6} md={4} lg={4}>
                  <Image
                    src="/assets/investors/logo_borderless.png"
                    alt="Logo Borderless"
                    className="img-fluid py-4"
                    width={200}
                    height={50}
                  />
                </Col>
                <Col xs={12} sm={4} lg={4}></Col>
                <Col xs={6} sm={6} lg={4}>
                  <Image
                    src="/assets/investors/logo_kalonia.png"
                    alt="Logo Kalonia"
                    className="img-fluid py-4"
                    width={200}
                    height={50}
                  />
                </Col>
                <Col xs={6} sm={6} md={4} lg={4}>
                  <Image
                    src="/assets/investors/logo_innogen.png"
                    alt="Logo Innogen"
                    className="img-fluid py-4"
                    width={200}
                    height={50}
                  />
                </Col>
                <Col sm={12} md={4} lg={4}>
                  <Image
                    src="/assets/investors/logo_advisors.png"
                    alt="Logo Advisors"
                    className="img-fluid py-4"
                    width={200}
                    height={50}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </container>
    </>
  );
}