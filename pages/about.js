import { Container, Row, Col, Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Image from "next/future/image";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

export default function About(props) {
  const{About} = props;
  console.log(props);
  return (
    <>
    <container fluid className="container-scroll">
      <section className="pt-5 px-sm-4 text-white pb-5 section-snap-align" id="about-data">
        <Container className="pt-5 px-4">
          <Row className="py-4">
            <Col xs={8} sm={8} md={4} ld={4}>
              <h5 className="fs-4 pt-5">{About.abouttext}</h5>
            </Col>
            <Col xs={4} md={4} lg={4} sm={4} className="d-flex pt-5">
              <hr className="hr-line-4" />
            </Col>
          </Row>
          <Row className="gy-5 gx-lg-5">
                <Col md={6} lg={6} sm={6}>
                  <Row>
                    <Col xs={1} md={1} lg={1} sm={1}>
                      <hr className="hr-about" />
                    </Col>
                    <Col xs={11} md={11} sm={11} lg={11}>
                      <p className="fs-6 text-warning fw-bold">
                      {About.regional}
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={1} md={1} lg={1} sm={1}>
                      <hr className="hr-about" />
                    </Col>
                    <Col xs={11} md={11} sm={11} lg={11}>
                      <p className="fs-6 text-warning fw-bold">
                      {About.rampas}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={1} md={1} lg={1} sm={1}>
                      <hr className="hr-about" />
                    </Col>
                    <Col xs={11} md={11} sm={11} lg={11}>
                      <p className="fs-6 text-warning fw-bold">
                      {About.tokenizados}</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md={4} className="text-left"></Col>
                <Col sm={12} md={6} lg={6} className="text-left">
                  <h4 className="pt-5 fs-3 text-white fw-normal">
                  {About.platform}
                  </h4>
                </Col>
                <div className="text-center">
                  <a href="#about-video" rel="noreferrer">
                    <BsChevronDown className="arrow-down text-white fs-2" />
                  </a>
                </div>
              </Row>
        </Container>

        <Container className="px-4 px-lg-5 py-4 text-white h-100 d-flex flex-column justify-content-center">
          <Row>
            <Col auto={12} md={12} sm={12} lg={12} className="text-left">
              
            </Col>
          </Row>
          
          <Row className="text-center">
          </Row>
        </Container>
      </section>
      <section className="main-video-about text-center p-0 z-back-1 display-mobile-none child">
        <video src="https://koibanx.com/videos/AboutUs_1440x900_03.mp4" autoPlay loop muted poster="/assets/img/fondo-mobile-home.jpg" />
      </section>
      <section className="main-video-about text-center p-0 z-back-1 display-mobile-yes child">
        <video src="https://koibanx.com/videos/MobileAboutUs1440x900-02.mp4" autoPlay loop muted poster="/assets/img/fondo-mobile-home.jpg" />
      </section>
      <section className="pt-5 px-sm-5 text-white" id="about-team">
        <Container className="px-4">
          <Row className="py-4">
            <Col xs={8} sm={8} md={4} ld={4}>
              <h5 className="fs-4">{About.ejecutivos}</h5>
            </Col>
            <Col xs={4} md={4} lg={4} sm={4} className="d-flex">
              <hr className="hr-line-3" />
            </Col>
          </Row>
        </Container>
        <Container className="px-0">
          <Row className="text-white gx-5 team-width">
              <Col xs={2} sm={2} md={4} lg={4} className="gx-5 my-4">
                <Row className="d-flex align-items-start">
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <Image
                      src="/assets/img/leo-elduayen.png"
                      alt="Leo Elduayen Photo"
                      className="img-fluid img-mobile pb-3"
                      width={200}
                      height={200}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <h6>Leo Elduayen</h6>
                    <p className="fw-bold">Co Founder & CEO</p>
                    <p>
                    {About.leo}
                    </p>
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
              <Col xs={2} sm={2} md={4} lg={4} className="gx-5 my-4 img-z">
                <Row className="d-flex align-items-start">
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <Image
                      src="/assets/img/edy-weber.png"
                      alt="Edy Weber Photo"
                      className="img-fluid img-mobile pb-3"
                      width={200}
                      height={200}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <h6>Edy Weber</h6>
                    <p className="fw-bold">Co Founder & CEO</p>
                    <p>
                    {About.edy}
                    </p>
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
              <Col xs={2} sm={4} md={4} lg={4} className="gx-5 my-4 img-z">
                <Row className="d-flex align-items-start">
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <Image
                      src="/assets/img/fran-mayora.png"
                      alt="Fran Mayora Photo"
                      className="img-fluid img-mobile pb-3"
                      width={200}
                      height={200}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <h6>Fran Mayora</h6>
                    <p className="fw-bold">CFO</p>
                    <p>
                    {About.francisco}
                    </p>
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
              <Col xs={2} sm={4} md={4} lg={4} className="gx-5 my-4 img-z">
                <Row className="d-flex align-items-start">
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <Image
                      src="/assets/img/lety-lopez.png"
                      alt="Lety Lopez Photo"
                      className="img-fluid img-mobile pb-3"
                      width={200}
                      height={200}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <h6>Lety Lopez Tiznado</h6>
                    <p className="fw-bold">Chief of Staff</p>
                    <p>
                    {About.lety}
                    </p>
                    <div className="d-flex align-items-end">
                      <a href="https://www.linkedin.com/in/leticia-l%C3%B3pez-tiznado-27699337/" target="_blank" rel="noreferrer">
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
              <Col xs={2} sm={4} md={4} lg={4} className="gx-5 my-4 img-z">
                <Row className="d-flex align-items-start">
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <Image
                      src="/assets/img/tulio-nunez.png"
                      alt="Tulio Nuñez Photo"
                      className="img-fluid img-mobile pb-3"
                      width={200}
                      height={200}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="d-flex align-self-start flex-column">
                      <h6>Tulio Nuñez</h6>
                      <p className="fw-bold">Head of Legal & Compliance</p>
                      <p>
                      {About.tulio}
                      </p>
                    </div>
                    <div className="d-flex align-items-end ">
                        <a href="https://www.linkedin.com/in/leo-elduayen-a2314399/" target="_blank" rel="noreferrer">
                          <Image
                            src={require("../public/assets/img/linkedin-icon.svg")}
                            alt="Logo Linkedin"
                            className="mt-auto"
                            width={20}
                            height={20}
                          />
                        </a>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={2} sm={4} md={4} lg={4} className="gx-5 my-4 img-z">
                <Row className="d-flex align-items-start">
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <Image
                      src="/assets/img/mar-fernandez.png"
                      alt="Mar Fernandez Photo"
                      className="img-fluid img-mobile pb-3"
                      width={200}
                      height={200}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <h6>Mar Fernández</h6>
                    <p className="fw-bold">Head of Marketing</p>
                    <p>
                    {About.mar}
                    </p>
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
        </Container>
        <Container className="px-4">
          <Row>
            <Col sm={12} md={12} lg={12} className="text-left">
              <Button rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/koibanx/mycompany/" variant="outline-warning" className="btn btn-outline-warning rounded-pill fs-8 btn-warning">Meet the rest of the team</Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="right-shadow">
      </section>
      <section className="text-white pb-5 d-flex flex-column justify-content-center bg-000" id="about-hiring">
        <Container fluid className="text-white" >
          <div className="text-primary">
            <Marquee gradient={false} speed={120}>
              <h3 className="h3-marquee">
                  We are hiring!&nbsp;
                  <span className="text-stroke-black">We are hiring!&nbsp;</span>
                </h3>
              </Marquee>
            </div>
        </Container>
        <Container className="px-4 px-lg-5 py-4 text-white">
          <Row>
            <Col md={12} lg={12} sm={12} className="text-left">
              <Row className="gy-5 gx-lg-5">
                <Col md={4} lg={4} sm={4}>
                  <p>
                    {About.hiring}
                  </p>
                  <Link href="/jobs" passHref>
                    <Button
                      className="rounded-pill fs-8 btn-orange btn-index"
                      variant="outline-primary"
                    >
                    {About.buttonjob}
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </container>
    </>
  );
}

export async function getStaticProps({locale}) {
  // const response = await fetch("URL");
  // const result = await response.json();

  const response = await import(`../lang/${locale}.json`);

  console.log(response.default.About);
  return {
    props: {
      About: response.default.About,
    }
  }


}