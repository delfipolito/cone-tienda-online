import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import Link from "next/link"
import Image from "next/future/image";
import Marquee from "react-fast-marquee";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <header className="masthead h-75">
        <Container className="px-4 px-lg-5 h-100">
          <Row className="g-2 h-100 d-flex align-items-center justify-content-center text-left">
            <Col sm={8} md={6} lg={2} className="d-flex align-items-center">
              <div className="d-flex align-content-end flex-wrap pt-8">
                <h1 className="text-white font-weight-bold fs-2">
                  Blockchain Payment Rails
                </h1>
                <p className="text-white-75 mb-5 fs-8">
                  Koibanx is the leading tokenization & Blockchain payments platform in Latam, with regional presence, +7 years of track record, “real-world” gateways bridges, conected to major exchanges and with regulatory licenses in place.
                </p>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3}></Col>
            <Col sm={12} md={3} lg={3}></Col>
            <Col sm={12} md={3} lg={3}></Col>
          </Row>
        </Container>
      </header>
      <section className="logo-clients bg-dark">
        <Container className="px-4 px-lg-5 py-4">
          <Row className="g-2 align-items-center justify-content-center text-white">
            <Col md={2} lg={2} sm={12}>
              <h5>Our Main Customers</h5>
            </Col>
            <Col md={10} lg={10} sm={12} className="g-0 g-x">
              <Marquee gradient={false} speed={60} className="slider-clients">
                <div className="slide">
                  <Image
                    src={require("../public/assets/clients-koi/davivienda.svg")}
                    alt="Davivienda"
                    style={{ "height": "auto" }}
                  />
                </div>
                <div className="slide">
                  <Image
                    src={require("../public/assets/clients-koi/macro.svg")}
                    alt="Macro"
                    style={{ "height": "auto" }}
                  />
                </div>
                <div className="slide">
                  <Image
                    src={require("../public/assets/clients-koi/abank.svg")}
                    alt="Abank Logo"
                    style={{ "height": "auto" }}
                  />
                </div>
                <div className="slide">
                  <Image
                    src={require("../public/assets/clients-koi/banco-de-valores.svg")}
                    alt="Banco de Valores Logo"
                    style={{ "height": "auto" }}
                  />
                </div>
                <div className="slide">
                  <Image
                    src={require("../public/assets/clients-koi/rus.svg")}
                    alt="Rus Logo"
                    style={{ "height": "auto" }}
                  />
                </div>
              </Marquee>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sections" id="products">
        <Container className="px-4 px-lg-5 py-4 text-white">
          <Row>
            <Col md={11} lg={11} sm={11} className="text-left">
              <Row className="gy-5 gx-lg-5">
                <Col sm={12} md={4} lg={4}>
                  <h5 className="fs-6">Wallet as a service</h5>
                  <p className="font-p fs-8">
                    We connect your mobile banking app, wallet or payment
                    channel to our platform, enabling to transfer, trade,
                    collect in any tokenized asset…
                  </p>
                  <Link href="/wallet" passHref>
                    <Button
                      className="rounded-pill fs-8"
                      variant="outline-light"
                    >
                      Learn More
                    </Button>
                  </Link>
                </Col>
                <Col md={4} lg={4} sm={12}>
                  <h5 className="fs-6">Crypto as a service</h5>
                  <p className="font-p fs-8">
                    Cryptocurrencies infrastructure for your channels. Plug and
                    play solution, we enable banks and digital wallets to give
                    their own customers…
                  </p>
                  <Link href="/crypto_service" passHref>
                    <Button
                      className="rounded-pill fs-8"
                      variant="outline-light"
                    >
                      Learn More
                    </Button>
                  </Link>
                </Col>
                <Col md={4} lg={4} sm={12}>
                  <h5 className="fs-6">Crypto check out</h5>
                  <p className="font-p fs-8">
                    Enable your merchants, e-commerce platform, collecting
                    provider and gateways to receive payments in any
                    cryptocurrency. Payments can be credited…
                  </p>
                  <Link href="/crypto_checkout" passHref>
                    <Button
                      className="rounded-pill fs-8"
                      variant="outline-light"
                    >
                      Learn More
                    </Button>
                  </Link>
                </Col>
                <Col md={4} lg={4} sm={12}>
                  <h5 className="fs-6">Multi-asset issuing platform</h5>
                  <p className="font-p fs-8">
                    Deploy your own platform to issue, trade and exchange
                    digital assets. Minting series of security, utility and
                    asset backed tokens with management and market features…
                  </p>
                  <Link href="/multi_asset" passHref>
                    <Button
                      className="rounded-pill fs-8"
                      variant="outline-light"
                    >
                      Learn More
                    </Button>
                  </Link>
                </Col>
                <Col md={4}>
                  <h5 className="fs-6">Cross border settlements</h5>
                  <p className="font-p fs-8">
                    Collect and settle value transactions across the region.
                    Receive in the US…
                  </p>
                  <Link href="/cross_border" passHref>
                    <Button
                      className="rounded-pill fs-8"
                      variant="outline-light"
                    >
                      Learn More
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col md={1} sm={1} lg={1} className="text-center">
              <Image
                src={require("../public/assets/img/products.svg")}
                alt="Products section"
                width={18}
                style={{ height: "auto" }}
              />
            </Col>
          </Row>
        </Container>
        <Container className="px-4 px-lg-5 py-4 text-white">
          <Row>
            <Col md={11} lg={11} sm={11} className="text-left">
              <Row>
                <Col md={11} lg={11} sm={11} className="text-left">
                  <Carousel className="main-carousel">
                    <Carousel.Item>
                      <h1 className="font-h1 d-block">&Prime;<br />Implement cryptocurrencies
                        to the remittances it could bring
                        benefits to its users
                      </h1>
                      <Button className="rounded-pill text-right mt-5" variant="outline-light" href="https://bit.ly/3Jd3WIZ">El Financiero</Button>
                    </Carousel.Item>
                    <Carousel.Item>
                      <h1 className="font-h1 d-block">&Prime;<br />Highly secure transactions as a result of being supported by blockchain technology.
                      </h1>
                      <Button className="rounded-pill text-right mt-5" variant="outline-light" href="https://bit.ly/3BDOjs7">El FM</Button>
                    </Carousel.Item>
                    <Carousel.Item>
                      <h1 className="font-h1 d-block">&Prime;<br />Bitcoin has been around for over a decade, and it&apos;s proving to be stronger all the time.
                      </h1>
                      <Button className="rounded-pill text-right mt-5" variant="outline-light" href="https://bit.ly/3OZM9qc">Ámbito Financiero</Button>
                    </Carousel.Item>
                    <Carousel.Item>
                      <h1 className="font-h1 d-block">&Prime;<br />When we talk about an NFT representing a digital work of art that is worth more than a physical work, a new concept appears that breaks conventional standards.
                      </h1>
                      <Button className="rounded-pill text-right mt-5" variant="outline-light" href="https://bit.ly/3ByPtoX">C5N</Button>
                    </Carousel.Item>
                    <Carousel.Item>
                      <h1 className="font-h1 d-block">&Prime;<br />There is no doubt that Bitcoin enjoys unrivaled popularity in the world of crypto assets.
                      </h1>
                      <Button className="rounded-pill text-right mt-5" variant="outline-light" href="https://bit.ly/3ByelgF">Profesional</Button>
                    </Carousel.Item>
                  </Carousel>
                </Col>
              </Row>
            </Col>
            <Col md={1} lg={1} sm={1} className="text-center">
              <Image
                src={require("../public/assets/img/press.svg")}
                alt="Press section"
                width={18}
                style={{ height: "auto" }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Button href="https://koibanx.medium.com/" variant="outline-warning" className="rounded-pill px-4 m-2">
                News Blog
              </Button>
            </Col>
          </Row>
        </Container>
        <Container className="px-4 px-lg-5 py-4 pt-5 text-white d-flex justify-content-center">
          <Row>
            <Col md={12} sm={12} lg={12}>
              <h5 className="text-warning">Our investors</h5>
            </Col>
            <Col sm={12} md={8} lg={8} className="px-5 px-sm-0">
              <Row className="d-flex align-items-center g-0 g-sm-0 px-5 px-sm-0 px-lg-0 text-center">
                <Col sm={12} md={4} lg={4}>
                  <Image
                    src={require("../public/assets/investors/logo_algorand.png")}
                    alt="Logo Algorand"
                    className="img-fluid py-4"
                  />
                </Col>
                <Col sm={12} md={4} lg={4}>
                  <Image
                    src={require("../public/assets/investors/logo_borderless.png")}
                    alt="Logo Borderless"
                    className="img-fluid py-4 px-4"
                  />
                </Col>
                <Col sm={12} md={4} lg={4}></Col>
                <Col sm={12} md={4} lg={4}>
                  <Image
                    src={require("../public/assets/investors/logo_kalonia.png")}
                    alt="Logo Kalonia"
                    className="img-fluid py-4 px-4"
                  />
                </Col>
                <Col sm={12} md={4} lg={4}>
                  <Image
                    src={require("../public/assets/investors/logo_innogen.png")}
                    alt="Logo Innogen"
                    className="img-fluid py-4 px-4"
                  />
                </Col>
                <Col sm={12} md={4} lg={4}>
                  <Image
                    src={require("../public/assets/investors/logo_advisors.png")}
                    alt="Logo Advisors"
                    className="img-fluid py-4 px-4"
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
