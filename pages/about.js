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
              <video className="about-video" id="background-video" autoPlay loop muted poster="/assets/img/bg-about.jpg">
                <source src="https://koibanx.com/videos/AboutUs.mp4" type="video/mp4" />
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
                  <Row>
                    <Col xs={6} md={6} lg={6} sm={6} className="d-flex">
                  <h5 className="fs-4">About us</h5><hr />
                    </Col>
                    <Col xs={3} md={3} lg={3} sm={3}><hr /></Col>
                  </Row>
                  <Row>
                    <Col xs={2} md={2} lg={2} sm={2}>
                      <hr className="hr-about" />
                    </Col>
                    <Col xs={9} md={9} sm={9} lg={9}>
                      <p className="fs-6 text-warning">
                        Regional presence.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={2} md={2} lg={2} sm={2}>
                      <hr className="hr-about" />
                    </Col>
                    <Col xs={9} md={9} sm={9} lg={9}>
                      <p className="fs-6 text-warning">+ 5 on | off ramps in Latam.</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={2} md={2} lg={2} sm={2}>
                      <hr className="hr-about" />
                    </Col>
                    <Col xs={9} md={9} sm={9} lg={9}>
                      <p className="fs-6 text-warning">+ 900M USD Tokenized.</p>
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
            <Col sm={12} md={6} lg={6} className="text-left">
              <h4 className="fs-4 text-white fw-normal">
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
            <Col sm={12} md={4} lg={4} className="gx-5 my-4">
              <Row className="d-flex align-items-start">
                <Col xs={6} sm={6} md={6} lg={6}>
                  <Image
                    src="/assets/img/leo-elduayen.png"
                    alt="Leo Elduayen Photo"
                    className="img-fluid img-mobile"
                    width={200}
                    height={200}
                  />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <h6>Leo Elduayen</h6>
                  <p className="font-p">Co Founder & CEO</p>
                  <p className="font-p">VP Bitcoin Argentina NGO. Crypto Pioneer. Lawyer Coder. He previously worked at MercadoLibre (Nasdaq: Meli) and Philip Morris International.</p>
                  <a href="https://www.linkedin.com/in/leo-elduayen-a2314399/" target="_blank" rel="noreferrer">
                    <Image
                      src={require("../public/assets/img/linkedin-icon.svg")}
                      alt="Logo Linkedin"
                      className="d-flex align-items-end"
                      width={20}
                      height={20}
                    />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4} lg={4} className="gx-5 my-4">
              <Row className="d-flex align-items-start">
                <Col xs={6} sm={6} md={6} lg={6}>
                  <Image
                    src="/assets/img/edy-weber.png"
                    alt="Edy Weber Photo"
                    className="img-fluid img-mobile"
                    width={200}
                    height={200}
                  />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <h6>Edy Weber</h6>
                  <p className="font-p">Co Founder & CEO</p>
                  <p className="font-p">Systems engineer. Web Pioneer. +25 years of experience leading the IT area of different companies such as Clarín, Staples and Arcos Dorados.</p>
                  <a href="https://www.linkedin.com/in/edy-weber-045258/" target="_blank" rel="noreferrer">
                    <Image
                      src={require("../public/assets/img/linkedin-icon.svg")}
                      alt="Logo Linkedin"
                      className="d-flex align-items-end"
                      width={20}
                      height={20}
                    />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4} lg={4} className="gx-5 my-4">
              <Row className="d-flex align-items-start">
                <Col xs={6} sm={6} md={6} lg={6}>
                  <Image
                    src="/assets/img/fran-mayora.png"
                    alt="Fran Mayora Photo"
                    className="img-fluid img-mobile "
                    width={200}
                    height={200}
                  />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <h6>Fran Mayora</h6>
                  <p className="font-p">CFO</p>
                  <p className="font-p">Economist, Master in Finance, CFA. +10 years of experience in financial markets, specializing in pricing and financial structuring.</p>
                  <a href="https://www.linkedin.com/in/francisco-mayora-3301b93b/" target="_blank" rel="noreferrer">
                    <Image
                      src={require("../public/assets/img/linkedin-icon.svg")}
                      alt="Logo Linkedin"
                      className="d-flex align-items-end"
                      width={20}
                      height={20}
                    />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4} lg={4} className="gx-5 my-5">
              <Row className="d-flex align-items-start">
                <Col xs={6} sm={6} md={6} lg={6}>
                  <Image
                    src="/assets/img/lety-lopez.png"
                    alt="Lety Lopez Photo"
                    className="img-fluid img-mobile"
                    width={200}
                    height={200}
                  />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <h6>Lety Lopez Tiznado</h6>
                  <p className="font-p">Chief of Staff</p>
                  <p className="font-p">Chief of Staff to the CEO of Koibanx. Economist and Public Policy Specialist. +9 years of professional experience across the public and private sector.</p>
                  <a href="https://www.linkedin.com/in/leticia-l%C3%B3pez-tiznado-27699337/" target="_blank" rel="noreferrer">
                    <Image
                      src={require("../public/assets/img/linkedin-icon.svg")}
                      alt="Logo Linkedin"
                      className="d-flex align-items-end"
                      width={20}
                      height={20}
                    />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4} lg={4} className="gx-5 my-5">
              <Row className="d-flex align-items-start">
                <Col xs={6} sm={6} md={6} lg={6}>
                  <Image
                    src="/assets/img/tulio-nunez.png"
                    alt="Leo Elduayen Photo"
                    className="img-fluid img-mobile"
                    width={200}
                    height={200}
                  />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <div className="d-flex align-self-start flex-column">
                  <h6>Tulio Nuñez</h6>
                  <p className="font-p">Head of Legal & Compliance</p>
                  <p className="font-p">Lawyer in 2 countries. Compliance officer in 3 countries.  +5 years in Crypto. AML expert. Previously worked at Venezuela Supreme Court. </p>
                  <a href="https://www.linkedin.com/in/leo-elduayen-a2314399/" target="_blank" rel="noreferrer">
                    <Image
                      src={require("../public/assets/img/linkedin-icon.svg")}
                      alt="Logo Linkedin"
                      className="d-flex align-items-end"
                      width={20}
                      height={20}
                    />
                  </a>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4} lg={4} className="gx-5 my-5">
              <Row className="d-flex align-items-start">
                <Col xs={6} sm={6} md={6} lg={6}>
                  <Image
                    src="/assets/img/mar-fernandez.png"
                    alt="Mar Fernandez Photo"
                    className="img-fluid img-mobile"
                    width={200}
                    height={200}
                  />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <h6>Mar Fernández</h6>
                  <p className="font-p">Head of Marketing</p>
                  <p className="font-p">Publicist & Art. + 10 years of experience in Brand design, building and growth. Member of women in crypto & women in fintech. </p>
                  <a href="https://www.linkedin.com/in/leo-elduayen-a2314399/" target="_blank" rel="noreferrer">
                    <Image
                      src={require("../public/assets/img/linkedin-icon.svg")}
                      alt="Logo Linkedin"
                      className="d-flex align-items-end"
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
              <Button rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/koibanx/mycompany/" variant="outline-warning" className="btn btn-outline-warning rounded-pill fs-8 btn-warning">Meet the rest of the team</Button>
            </Col>
          </Row>
        </Container>
        <Container className="text-white" fluid>
          <div className="text-primary">
            <Marquee gradient={false} speed={120}>
              <h3 className="h3-marquee">
                  We are hiring!&nbsp;
                  <span className="text-stroke-black">&nbsp; We are hiring!</span>
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
                      className="rounded-pill fs-8 btn-orange"
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
