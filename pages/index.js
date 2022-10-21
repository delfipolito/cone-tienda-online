import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import Link from "next/link"
import Image from "next/future/image";
import Marquee from "react-fast-marquee";
import styles from "../styles/Home.module.css";
import Carouselkoi from "../components/press";
import Pressmobile from "../components/press_mobile";

export default function Home(props) {
  const{Home} = props;
  console.log(props);
  return (
    <>
    <container fluid className="container-scroll text-white">
      <container fluid>
        <section className="rectangulo main-video child">
            <video src="https://koibanx.com/videos/Video+Home+Koibanx+01.mp4" autoPlay loop muted />
            <section className="circulo bg-dark">
                <Container className="py-0 py-sm-0 bg-dark" id="logo-clientes">
                    <Row className="g-2 align-items-center justify-content-center text-white">
                        <Col md={2} lg={2} sm={12}>
                            <h5 className="fs-6 py-3">{Home.customerbar}</h5>
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
        </section>
        <header>
          <Container className="px-sm z-front-1 absolute-top h-100 cuadrado">
            <Row className="d-flex flex-column">
                <Col sm={8} md={6} lg={2} className="d-flex align-items-center">
                    <div>
                        <h1 className="text-white font-weight-bold fs-2 h1-mobile">
                        {Home.herotitle}
                        </h1>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4}>
                  <p className="text-white-75 mb-5 p-mobile">
                  {Home.herodescription}
                  </p>
                </Col>
            </Row>
          </Container>
        </header>
      </container>
      <container className="bg-image child">
        <section id="products" className="px-sm-4 text-white pb-5">
          <div className="px-2 px-sm-5 px-lg-5">
            <Row className="pb-5 px-5 px-sm-5">
              <Col xs={12} md={11} lg={11} sm={12} className="text-left">
                <Row className="py-4 display-mobile-yes">
                  <Col xs={12} md={6} lg={6} sm={6} className="d-flex">
                    <h5 className="fs-4">Our products</h5>
                    <h5 className="fw-lighter line-position"> ___________</h5>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={8} lg={8}>
                    <p className="fs-6 text-primary pb-5 fw-bold">{Home.products}</p>
                  </Col>
                </Row>
                <Row className="gy-5 gx-lg-5">
                  <Col sm={12} md={4} lg={4} className="container-button">
                    <div>
                    <h5 className="fs-6">Wallet as a service</h5>
                    <p className="font-p fs-8">
                    {Home.walletdescription}
                    </p>
                    </div>
                    <Link href="/wallet" className="btn-holder" passHref>
                      <Button
                        className="rounded-pill fs-8 w-50"
                        variant="outline-light"
                      >
                      {Home.button}
                      </Button>
                    </Link>
                  </Col>
                  <Col md={4} lg={4} sm={12} className="container-button">
                    <div>
                    <h5 className="fs-6">Crypto as a service</h5>
                    <p className="font-p fs-8">
                    {Home.cryptoservdescription}
                    </p>
                    </div>
                    <Link href="/crypto_service" className="btn-holder" passHref>
                      <Button
                        className="rounded-pill fs-8 w-50"
                        variant="outline-light"
                      >
                      {Home.button}
                      </Button>
                    </Link>
                  </Col>
                  <Col md={4} lg={4} sm={12} className="container-button">
                    <div>
                    <h5 className="fs-6">Crypto check out</h5>
                    <p className="font-p fs-8">
                    {Home.cryptocheckdescription}
                    </p>
                    </div>
                    <Link href="/crypto_checkout" className="btn-holder" passHref>
                      <Button
                        className="rounded-pill fs-8 w-50"
                        variant="outline-light"
                      >
                      {Home.button}
                      </Button>
                    </Link>
                  </Col>
                  <Col md={4} lg={4} sm={12} className="container-button">
                    <div>
                    <h5 className="fs-6">Issuing platform</h5>
                    <p className="font-p fs-8">
                    {Home.issuingdescription}
                    </p>
                    </div>
                    <Link href="/multi_asset" className="btn-holder" passHref>
                      <Button
                        className="rounded-pill fs-8 w-50"
                        variant="outline-light"
                      >
                      {Home.button}
                      </Button>
                    </Link>
                  </Col>
                  <Col md={4} lg={4} sm={12} className="container-button">
                    <div>
                    <h5 className="fs-6">Cross border settlements</h5>
                    <p className="font-p fs-8">
                    {Home.crossdescription}
                    </p>
                    </div>
                    <Link href="/cross_border" className="btn-holder" passHref>
                      <Button
                        className="rounded-pill fs-8 w-50"
                        variant="outline-light"
                      >
                      {Home.button}
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col xs={1}  md={1} sm={1} lg={1} className="display-mobile-none text-center d-flex flex-column h-auto">
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
          </div>
        </section>
        <section id="press" className="px-sm-4 text-white pb-5 section-snap-align child">
          <div className="px-2 px-sm-5 px-lg-5">
            <Row className="px-5 py-4 display-mobile-yes">
              <Col xs={12} md={6} lg={6} sm={6} className="d-flex">
                <h5 className="fs-4">Press</h5>
                <h5 className="fw-lighter line-position"> ___________</h5>
              </Col>
            </Row>
            <Row>
              <Col xs={11} md={11} lg={11} sm={11} className="text-left">
                <Row>
                  <Carouselkoi />
                  <Pressmobile />
                </Row>
                <Row>
                  <Col md={12} className="d-flex justify-content-center mt-5">
                    <Button href="https://koibanx.medium.com/" variant="outline-warning" className="rounded-pill px-4 my-5 my-lg-0 btn-warning">
                      News Blog
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
          </div>
        </section>
      </container>
      <section id="investors" className="px-5 px-sm-5 text-white pb-5 child" >
        <div className="px-2 px-sm-5 px-lg-5">
          <Row className="py-5">
            <h5 className="text-warning">{Home.investors}</h5>
            <Col sm={12} md={8} lg={8} className="px-sm-5 gy-1">
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
                <Col  xs={6} sm={6} lg={4}>
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
        </div>
      </section>
    </container>
    </>
  );
}

export async function getStaticProps({locale}) {
  // const response = await fetch("URL");
  // const result = await response.json();

  const response = await import(`../lang/${locale}.json`);

  console.log(response.default.Home);
  return {
    props: {
      Home: response.default.Home,
    }
  }


}