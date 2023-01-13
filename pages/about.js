import { Container, Row, Col, Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Image from "next/future/image";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import useTranslation from 'next-translate/useTranslation';

export default function About() {
  const {t} = useTranslation();

  return (
    <>
      <container className="text-white">
        <section className="rectangulo-about main-video-about display-mobile-none">
          <video src="https://koibanx.com/videos/AboutUs_1440x900_03.mp4" autoPlay loop muted />
          <section className="container-fluid text-center circulo-about">
            <a href="#about-data" rel="noreferrer">
              <BsChevronDown className="text-white fs-2" />
            </a>
          </section>
        </section>
        <section className="rectangulo-about main-video-about text-center display-mobile-yes">
          <video src="https://koibanx.com/videos/MobileAboutUs1440x900-02.mp4" autoPlay loop muted />
          <section className="container-fluid text-center circulo-about">
            <a href="#about-data" rel="noreferrer">
              <BsChevronDown className="text-white fs-2" />
            </a>
          </section>
        </section>
      </container>
      <container className="text-white">
        <section id="about-data" className="container-fluid h-100 d-flex flex-column align-items-center justify-content-center">
          <Row className="container">
            <Col xs={8} sm={8} md={4} ld={4}>
              <h5 className="fs-4 pt-5">{t('common:About.abouttext')}</h5>
            </Col>
            <Col xs={4} md={4} lg={4} sm={4} className="d-flex pt-5">
              <hr className="hr-line-4" />
            </Col>
          </Row>
          <Row className="container">
            <Col xs={12} sm={6} md={6} lg={6}>
              <Row>
                <Col xs={2} sm={2} md={1} lg={1}>
                  <hr className="hr-about" />
                </Col>
                <Col xs={10} md={10} sm={11} lg={11}>
                  <p className="fs-6 text-warning fw-bold">
                    {t('common:About.regional')}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={2} sm={2} md={1} lg={1}>
                  <hr className="hr-about" />
                </Col>
                <Col xs={10} md={10} sm={11} lg={11}>
                  <p className="fs-6 text-warning fw-bold">
                    {t('common:About.rampas')}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={2} sm={2} md={1} lg={1}>
                  <hr className="hr-about" />
                </Col>
                <Col xs={10} md={10} sm={11} lg={11}>
                  <p className="fs-6 text-warning fw-bold">
                    {t('common:About.tokenizados')}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="text-left"></Col>
            <Col xs={12} sm={12} md={6} lg={6} className="text-left">
              <h4 className="p-5 text-white fw-normal">
                {t('common:About.platform')}
              </h4>
            </Col>
          </Row>
        </section>
      </container>
      <container className="text-white">
        <section id="about-team" className="container-fluid h-100 d-flex flex-column align-items-center justify-content-center">
          <Row className="container my-3">
            <Col xs={8} sm={8} md={4} ld={4}>
              <h5 className="fs-4">{t('common:About.ejecutivos')}</h5>
            </Col>
            <Col xs={4} md={4} lg={4} sm={4} className="d-flex">
              <hr className="hr-line-3" />
            </Col>
          </Row>
          <Row className="container gy-5">
            <div>
              <Row className="team-width">
                <Col xs={2} sm={2} md={4} lg={4}>
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
                        {t('common:About.leo')}
                      </p>
                      <a href="https://www.linkedin.com/in/leo-elduayen-a2314399/" target="_blank" rel="noreferrer">
                        <Image
                          src="/assets/img/linkedin-icon.svg"
                          alt="Logo Linkedin"
                          className="d-flex align-items-end"
                          width={20}
                          height={20}
                        />
                      </a>
                    </Col>
                  </Row>
                </Col>
                <Col xs={2} sm={2} md={4} lg={4}>
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
                      <p className="fw-bold">Co Founder & CTO</p>
                      <p>
                        {t('common:About.edy')}
                      </p>
                      <a href="https://www.linkedin.com/in/edy-weber-045258/" target="_blank" rel="noreferrer">
                        <Image
                          src="/assets/img/linkedin-icon.svg"
                          alt="Logo Linkedin"
                          className="d-flex align-items-end"
                          width={20}
                          height={20}
                        />
                      </a>
                    </Col>
                  </Row>
                </Col>
                <Col xs={2} sm={2} md={4} lg={4}>
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
                        {t('common:About.francisco')}
                      </p>
                      <a href="https://www.linkedin.com/in/francisco-mayora-3301b93b/" target="_blank" rel="noreferrer">
                        <Image
                          src="/assets/img/linkedin-icon.svg"
                          alt="Logo Linkedin"
                          className="d-flex align-items-end"
                          width={20}
                          height={20}
                        />
                      </a>
                    </Col>
                  </Row>
                </Col>
                <Col xs={2} sm={2} md={4} lg={4}>
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
                        {t('common:About.lety')}
                      </p>
                      <a href="https://www.linkedin.com/in/leticia-l%C3%B3pez-tiznado-27699337/" target="_blank" rel="noreferrer">
                        <Image
                          src="/assets/img/linkedin-icon.svg"
                          alt="Logo Linkedin"
                          className="d-flex align-items-end"
                          width={20}
                          height={20}
                        />
                      </a>
                    </Col>
                  </Row>
                </Col>
                <Col xs={2} sm={2} md={4} lg={4}>
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
                      <h6>Tulio Nuñez</h6>
                      <p className="fw-bold">Head of Legal & Compliance</p>
                      <p>
                        {t('common:About.tulio')}
                      </p>
                      <a href="https://www.linkedin.com/in/tulionunezh/" target="_blank" rel="noreferrer">
                        <Image
                          src="/assets/img/linkedin-icon.svg"
                          alt="Logo Linkedin"
                          className="d-flex align-items-end"
                          width={20}
                          height={20}
                        />
                      </a>
                    </Col>
                  </Row>
                </Col>
                <Col xs={2} sm={2} md={4} lg={4}>
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
                        {t('common:About.mar')}
                      </p>
                      <a href="https://www.linkedin.com/in/mariannferr/" target="_blank" rel="noreferrer">
                        <Image
                          src="/assets/img/linkedin-icon.svg"
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
            </div>
          </Row>
          <div className="right-shadow"></div>
          <Row className="container my-4">
            <section>
              <Button rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/company/koibanx/mycompany/"
                variant="outline-warning"
                className="btn btn-outline-warning rounded-pill fs-8 btn-warning"
              >
                {t('common:About.buttonteam')}
              </Button>
            </section>
          </Row>
        </section>
      </container>
      <container className="text-white">
        <section id="about-hiring" className="container-fluid h-100 d-flex flex-column align-items-center justify-content-center">
          <Row className="text-primary my-5">
            <Marquee gradient={false} speed={120}>
              <h3 className="h3-marquee">
                We are hiring!&nbsp;
                <span className="text-stroke-black">We are hiring!&nbsp;</span>
              </h3>
            </Marquee>
          </Row>
          <Row className="container">
            <Col md={4} lg={4} sm={4}>
              <p>
                {t('common:About.hiring')}
              </p>
              <Link href="/jobs" passHref>
                <Button
                  className="rounded-pill fs-8 btn-orange btn-index"
                  variant="outline-primary"
                >
                  {t('common:About.buttonjob')}
                </Button>
              </Link>
            </Col>
          </Row>
        </section>
      </container>
    </>
  );
}