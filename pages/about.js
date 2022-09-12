import { Container, Row, Col, Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Image from "next/future/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <header className="about-navbar"></header>
      <header className="about-masthead">
        <Container fluid>
          <Row>
            <Col md={12} sm={12} lg={12} className="text-center p-0">
              <video className="about-video" id="background-video" autoPlay loop muted poster="/assets/img/bg-about-koi.jpg">
                <source src="/assets/video_about_us.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>
        </Container>
      </header>
      <section className="about-sections">
        <Container className="px-4 px-lg-5 py-4 text-white">
          <Row>
            <Col auto={12} md={12} sm={12} lg={12} className="text-left">
              <Row className="gy-5 gx-lg-5">
                <Col md={5} lg={5} sm={5}>
                  <h5 className="fs-4">About us</h5>
                  <Row>
                    <Col md={3} lg={3} sm={3}>
                      <hr />
                    </Col>
                    <Col md={9} sm={9} lg={9}>
                      <p className="fs-6 text-warning">
                        Regional presence in + than 5 countries
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3} lg={3} sm={3}>
                      <hr />
                    </Col>
                    <Col md={9} sm={9} lg={9}>
                      <p className="fs-6 text-warning">+ of XXUSD Tokenized.</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container className="px-4 px-lg-5 py-4 text-white">
          <Row>
            <Col md={4} className="text-left"></Col>
            <Col sm={12} md={8} lg={8} className="text-left">
              <h4 className="fs-1 text-white">
                Koibanx is the leading tokenization & Blockchain payments
                platform in Latam, with regional presence, +7 years of track
                record, “real-world” gateways bridges, connected to major
                exchanges and with regulatory licenses in place.
              </h4>
            </Col>
          </Row>
        </Container>
        <Container className="px-4 px-lg-5 py-4 text-white">
          <Row>
            <Col md={12} sm={12} lg={12} className="text-left pt-5">
              <h5 className="fs-4">Board</h5>
            </Col>
          </Row>
          <Row className="text-white gx-5">
            <Col sm={12} md={3} lg={3} className="gx-5">
              <Row className="d-flex align-items-center">
                <Col sm={6} md={12} lg={12}>
                  <Image
                    src={require("../public/assets/img/leo-elduayen.png")}
                    alt="Leo Elduayen Photo"
                    className="img-fluid my-5 img-mobile"
                    style={{ height: "auto" }}
                  />
                </Col>
                <Col sm={6} md={12} lg={12}>
                  <h6>Leo Elduayen</h6>
                  <p className="font-p">Co Founder & CEO</p>
                  <p className="font-p">VP Bitcoin Argentina ONG. Crypto Pioneer. Abogado Coder. Trabajó previamente en MercadoLibre (Nasdaq: Meli) y Philip Morris International.</p>
                  <a href="https://www.linkedin.com/in/leo-elduayen-a2314399/" target="_blank" rel="noreferrer">
                    <Image
                      src={require("../public/assets/img/linkedin-icon.svg")}
                      alt="Logo Linkedin"
                      width={20}
                      height={20}
                    />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={3} lg={3} className="gx-5">
              <Row className="d-flex align-items-center">
                <Col sm={6} md={12} lg={12}>
                  <Image
                    src={require("../public/assets/img/edy-weber.png")}
                    alt="Edy Weber Photo"
                    className="img-fluid my-5 img-mobile"
                    style={{ height: "auto" }}
                  />
                </Col>
                <Col sm={6} md={12} lg={12}>
                  <h6>Edy Weber</h6>
                  <p className="font-p">Co Founder & CEO</p>
                  <p className="font-p">Ingeniero en sistemas. Web Pioneer. +25 años de experiencia liderando el área de IT de distintas empresas como Clarín, Staples y Arcos Dorados.</p>
                  <a href="https://www.linkedin.com/in/edy-weber-045258/" target="_blank" rel="noreferrer">
                    <Image
                      src={require("../public/assets/img/linkedin-icon.svg")}
                      alt="Logo Linkedin"
                      width={20}
                      height={20}
                    />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={3} lg={3} className="gx-5">
              <Row className="d-flex align-items-center">
                <Col sm={6} md={12} lg={12}>
                  <Image
                    src={require("../public/assets/img/lety-lopez.png")}
                    alt="Lety Lopez Photo"
                    className="img-fluid my-5 img-mobile"
                    style={{ height: "auto" }}
                  />
                </Col>
                <Col sm={6} md={12} lg={12}>
                  <h6>Lety Lopez Tiznado</h6>
                  <p className="font-p">Chief of Staff</p>
                  <p className="font-p">Chief of Staff to the CEO of Koibanx. Economist and Public Policy Specialist. +9 years of professional experience across the public and private sector.</p>
                  <a href="https://www.linkedin.com/in/leticia-l%C3%B3pez-tiznado-27699337/" target="_blank" rel="noreferrer">
                    <Image
                      src={require("../public/assets/img/linkedin-icon.svg")}
                      alt="Logo Linkedin"
                      width={20}
                      height={20}
                    />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={3} lg={3} className="gx-5">
              <Row className="d-flex align-items-center">
                <Col sm={6} md={12} lg={12}>
                  <Image
                    src={require("../public/assets/img/fran-mayora.png")}
                    alt="Fran Mayora Photo"
                    className="img-fluid my-5 img-mobile"
                    style={{ height: "auto" }}
                  />
                </Col>
                <Col sm={6} md={12} lg={12}>
                  <h6>Fran Mayora</h6>
                  <p className="font-p">CFO</p>
                  <p className="font-p">Economista, Magíster en Finanzas, CFA. +10 años de experiencia en mercados financieros, especializado en pricing y estructuración financiera.</p>
                  <a href="https://www.linkedin.com/in/francisco-mayora-3301b93b/" target="_blank" rel="noreferrer">
                    <Image
                      src={require("../public/assets/img/linkedin-icon.svg")}
                      alt="Logo Linkedin"
                      width={20}
                      height={20}
                    />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12} className="text-left pt-5">
              <Button rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/koibanx/mycompany/" variant="outline-warning" className="btn btn-outline-warning rounded-pill fs-8">Meet the rest of the team</Button>
            </Col>
          </Row>
        </Container>
        <Container className="text-white" fluid>
          <div className="text-primary">
            <Marquee gradient={false} speed={120}>
              <h3>
                  We are hiring!&nbsp;
                  <span className="text-stroke-black"> We are hiring!</span>
                </h3>
              </Marquee>
            </div>
        </Container>
        <Container className="px-4 px-lg-5 py-4 text-white">
          <Row>
            <Col md={12} lg={12} sm={12} className="text-left">
              <Row className="gy-5 gx-lg-5">
                <Col md={4} lg={4} sm={4}>
                  <p className="font-p fs-6">
                    We seek to make room in our team for people who seek to
                    create a good atmosphere with companionship, who share our
                    values and our ambition for professional and business
                    growth.
                  </p>
                  <Link href="/jobs" passHref>
                    <Button
                      className="rounded-pill fs-8"
                      variant="outline-primary"
                    >
                      Ready to join our team
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
