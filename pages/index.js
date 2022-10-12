import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import Link from "next/link"
import Image from "next/future/image";
import Marquee from "react-fast-marquee";
import styles from "../styles/Home.module.css";
import Carousekoi from "../components/press";

export default function Home() {
  return (
    <>
      <header className="mobile-masthead h-75">
        <Container fluid>
          <Row>
            <Col md={12} sm={12} lg={12} className="text-center p-0 z-back-1">
              <video className="home-video" id="background-video" autoPlay loop muted poster="/assets/img/bg-masthead.jpg">
                <source src="https://koibanx.com/videos/Video+Home+Koibanx+01.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>
        </Container>
        <Container className="pt-6 px-sm-4 z-front-1 absolute-top">
          <Row className="g-2 h-100 d-flex align-items-center justify-content-center text-left">
            <Row>
              <Col sm={8} md={6} lg={2} className="d-flex align-items-center">
              <div className="d-flex align-content-end flex-column pt-8">
                <h1 className="text-white font-weight-bold fs-2">
                  Blockchain Payment Rails
                </h1>
              </div>
            </Col>
          </Row>
            <Row>
            <Col sm={12} md={4} lg={4}>
              <p className="text-white-75 mb-5 fs-8">
                Koibanx is the leading tokenization & Blockchain payments platform in Latam, with regional presence, +7 years of track record, “real-world” gateways that bridges the traditional financial system with the web3 ecosystem. Tokenization + on/off ramps made avaible within the regulatory framework for each country in the region.
              </p>
            </Col>
          </Row>
            <Col sm={12} md={3} lg={3}></Col>
            <Col sm={12} md={3} lg={3}></Col>
            <Col sm={12} md={3} lg={3}></Col>
          </Row>
        </Container>
      </header>
      <section className="logo-clients bg-dark">
        <Container className="px-sm-5 px-5 py-0 py-sm-0">
          <Row className="g-2 align-items-center justify-content-center text-white">
            <Col md={2} lg={2} sm={12}>
              <h5 className="fs-6 py-3">Our Main Customers</h5>
            </Col>
            <Col md={10} lg={10} sm={12} className="g-0 g-x">
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
                    alt="A Bank"
                    width={150}
                    height={50}
                  />
                </div>
                <div className="slide">
                  <Image
                    src="/assets/clients-koi/banco-de-valores.svg"
                    alt="Banco de Valores"
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
        </Container>
      </section>
      <section className="sections snap-container px-sm-5 px-5" id="products">
        <Container className="px-sm-4 text-white pb-5 snap-section">
          <Row className="pb-5">
            <Col xs={11} md={11} lg={11} sm={11} className="text-left">
              <Row>
                <Col xs={12} sm={12} md={8} lg={8}>
                  <p className="fs-6 text-primary pb-5">A regulated end 2 end platform for financial institutions to tokenize, trade and exchange asstes, enabling their usage as means of payement and seamlessly integrating them with crypt & fiat on | off ramps.</p>
                </Col>
              </Row>
              <Row className="gy-5 gx-lg-5">
                <Col sm={12} md={4} lg={4} className="container-button">
                  <div>
                  <h5 className="fs-6">Wallet as a service</h5>
                  <p className="font-p fs-8">
                    We connect your mobile banking app, wallet or payment
                    channel to our platform, enabling to transfer, trade,
                    collect in any tokenized asset…
                  </p>
                  </div>
                  <Link href="/wallet" className="btn-holder" passHref>
                    <Button
                      className="rounded-pill fs-8 w-50"
                      variant="outline-light"
                    >
                      Learn More
                    </Button>
                  </Link>
                </Col>
                <Col md={4} lg={4} sm={12} className="container-button">
                  <div>
                  <h5 className="fs-6">Crypto as a service</h5>
                  <p className="font-p fs-8">
                    Cryptocurrencies infrastructure for your channels. Plug and
                    play solution, we enable banks and digital wallets to give
                    their own customers…
                  </p>
                  </div>
                  <Link href="/crypto_service" className="btn-holder" passHref>
                    <Button
                      className="rounded-pill fs-8 w-50"
                      variant="outline-light"
                    >
                      Learn More
                    </Button>
                  </Link>
                </Col>
                <Col md={4} lg={4} sm={12} className="container-button">
                  <div>
                  <h5 className="fs-6">Crypto check out</h5>
                  <p className="font-p fs-8">
                    Enable your merchants, e-commerce platform, collecting
                    provider and gateways to receive payments in any
                    cryptocurrency. Payments can be credited…
                  </p>
                  </div>
                  <Link href="/crypto_checkout" className="btn-holder" passHref>
                    <Button
                      className="rounded-pill fs-8 w-50"
                      variant="outline-light"
                    >
                      Learn More
                    </Button>
                  </Link>
                </Col>
                <Col md={4} lg={4} sm={12} className="container-button">
                  <div>
                  <h5 className="fs-6">Issuing platform</h5>
                  <p className="font-p fs-8">
                    Deploy your own platform to issue, trade and exchange
                    digital assets. Minting series of security, utility and
                    asset backed tokens with management and market features…
                  </p>
                  </div>
                  <Link href="/multi_asset" className="btn-holder" passHref>
                    <Button
                      className="rounded-pill fs-8 w-50"
                      variant="outline-light"
                    >
                      Learn More
                    </Button>
                  </Link>
                </Col>
                <Col md={4} lg={4} sm={12} className="container-button">
                  <div>
                  <h5 className="fs-6">Cross border settlements</h5>
                  <p className="font-p fs-8">
                    Collect and settle value transactions across the region.
                    Receive in the US…
                  </p>
                  </div>
                  <Link href="/cross_border" className="btn-holder" passHref>
                    <Button
                      className="rounded-pill fs-8 w-50"
                      variant="outline-light"
                    >
                      Learn More
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col xs={1}  md={1} sm={1} lg={1} className="text-center">
              <Image
                src="/assets/img/products.svg"
                alt="Products section"
                width={15}
                height={400}
              />
            </Col>
          </Row>
        </Container>
        <Container className="px-sm-4 text-white">
          <Row>
            <Col xs={11} md={11} lg={11} sm={11} className="text-left">
              <Row>
                <Carousekoi />
              </Row>
              <Row>
                <Col md={12} className="d-flex justify-content-center mt-5">
                  <Button href="https://koibanx.medium.com/" variant="outline-warning" className="rounded-pill px-4 my-5 my-lg-0 btn-warning-koi">
                    News Blog
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col xs={1} md={1} lg={1} sm={1} className="text-center">
              <Image
                src="/assets/img/press.svg"
                alt="Press section"
                width={20}
                height={450}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-investors px-5 px-sm-5">
        <Container className="snap-section d-flex align-items-center">
          <Row className="py-5">
            <h5 className="text-warning">Our investors</h5>
            <Col sm={12} md={8} lg={8} className="px-sm-5">
              <Row>
              <Col xs={6} sm={6} md={4} lg={4}>
                    <Image
                        src="/assets/investors/logo_algorand.png"
                        alt="Logo Algorand"
                        className="img-fluid py-4"
                        width={150}
                        height={50}
                      />
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4}>
                    <Image
                      src="/assets/investors/logo_borderless.png"
                      alt="Logo Borderless"
                      className="img-fluid py-4"
                      width={150}
                      height={50}
                    />
                  </Col>
                  <Col xs={12} sm={4} lg={4}></Col>
                  <Col  xs={6} sm={6} lg={4}>
                    <Image
                      src="/assets/investors/logo_kalonia.png"
                      alt="Logo Kalonia"
                      className="img-fluid py-4"
                      width={150}
                      height={50}
                    />
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4}>
                    <Image
                      src="/assets/investors/logo_innogen.png"
                      alt="Logo Innogen"
                      className="img-fluid py-4"
                      width={150}
                      height={50}
                    />
                  </Col>
                  <Col sm={12} md={4} lg={4}>
                    <Image
                      src="/assets/investors/logo_advisors.png"
                      alt="Logo Advisors"
                      className="img-fluid py-4"
                      width={150}
                      height={50}
                    /> 
                  </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
