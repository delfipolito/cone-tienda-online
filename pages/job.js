import { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from "next/future/image";
import Link from "next/link";
import koibanxImage from "/public/assets/img/Logo_Koibanx_Blanco.svg";
import { BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import Job from "../components/job";

export default function Jobs() {
  return (
    <>
      <header className="about-navbar jobs-sections"></header>
      <section className="jobs-sections">
        <Container className="text-white" fluid>
        </Container>
        <Container className="px-4 px-lg-5 py-4 text-white">
          <Row>
            <Col lg={6}>
                <div>
                    <h1 className='fs-4-1 fw-bold mb-5'>Motion Graphic Designer</h1>
                    <Row>
                        <Col lg={6}>
                            <h4 className='fs-5 fw-bold'>Work place</h4>
                            <p className='fs-7 fw-regular'>México</p>
                        </Col>
                        <Col lg={6}>
                            <h4 className='fs-5 fw-bold'>Published</h4>
                            <p className='fs-7 fw-regular'>Octubre, 2022</p>
                        </Col>
                        <Col lg={6}>
                            <h4 className='fs-5 fw-bold'>Area</h4>
                            <p className='fs-7 fw-regular'>Marketing</p>
                        </Col>
                        <Col lg={6}>
                            <h4 className='fs-5 fw-bold'>Work day</h4>
                            <p className='fs-7 fw-regular'>Full-Time</p>
                        </Col>
                        <Col lg={12} className="mt-5">
                            <p className='fs-7 fw-regular'>El equipo de Marketing es el encargado de transmitir el espíritu de Koibanx a través de diversas estrategias de comunicación y su objetivo es posicionar a la compañía en el mercado regional para potenciar sus ventas. Creemos que somos capaces de transformar el mundo financiero tradicional y necesitamos un equipo que pueda comunicar nuestras acciones con eficiencia.
                            <br /><br />Sumándote a Koibanx como Multimedia Designer Jr. / Motion Graphic Designer en nuestra sede de Ciudad de México vas a ser protagonista de una compañía que está creando historia construyendo los rieles transaccionales sobre blockchain para generar un sistema financiero más accesible, seguro y eficiente, siendo  los habilitadores entre el mundo financiero tradicional y el mundo cripto. 

                            <br /><br />
                            WHAT ARE YOU GOING TO FIND?<br />

                            Every day you are going to try to challenge yourself. You will be
                            in a place where you will be heard, where your opinion ALWAYS
                            It will be important and we will take care of meeting your needs.
                            You will constantly push the frontiers of knowledge,
                            having possibilities to grow in a team where you will find
                            fun, commitment, dynamism, ambition and camaraderie.
                            <br /><br />
                            WHAT YOU WILL DO?<br />
                            Animation design for web page.
                            Video demo design of the company's products.
                            Animations for social media communications.
                            Update of company materials on the platforms institutional and digital media.
                            Follow-up of the communication calendar to have the
                            graphic material in time and form.
                            Creation of pieces for the communication of Internal Marketing
                            of the company.
                            Prepare and design business presentations.
                            Assembly of pieces for digital advertising.
                            <br /><br />
                            We are looking for someone to fill the role of Multimedia Designer Jr. / Motion
                            Graphic Designer has a highly creative, organized and oriented profile
                            results-oriented, with excellent communication and work skills
                            team up. With understanding and execution of the needs required by the area and who wants to join a team of restless, curious people
                            and enthusiasts who constantly seek to enhance talent.
                            <br /><br />
                            This description is not closed and limiting, we firmly believe in autonomy, so we are looking for enthusiastic people who see the opportunity for improvement
                            and be proactive enough to make it happen.</p>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={6} className="d-flex justify-content-end align-items-center section-full position-fixed-job">
                <div className='col align-self-start'>
                    <InputGroup className="mb-3 ">
                        <Form.Control
                        placeholder="Name & Lastname"
                        aria-label="Name"
                        aria-describedby="basic-addon1"
                        className="input-koi fs-7"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3 ">
                        <Form.Control
                        placeholder="E-mail"
                        aria-label="email"
                        aria-describedby="basic-addon1"
                        className="input-koi fs-7"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3 ">
                        <Form.Control
                        placeholder="Phone number"
                        aria-label="phone"
                        aria-describedby="basic-addon1"
                        className="input-koi fs-7"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3 ">
                        <Form.Control
                        placeholder="Job position"
                        aria-label="email"
                        aria-describedby="basic-addon1"
                        className="input-koi fs-7"
                        />
                    </InputGroup>
                    <Form.Group controlId="formFile" className="mb-3 fs-7 w-75">
                        <Form.Control
                        className="custom-file-input fs-8"
                        type="file"
                        />
                    </Form.Group>
                    <Button variant="outline-primary" type="submit" className="rounded-pill fs-7 btn-orange text-center">
                        Apply now
                    </Button>
                </div>
            </Col>
          </Row>
        </Container>
    <footer className="footer bg-dark mt-0 fs-7 z-index-footer fixed-bottom top-shadow">
      <Container className="px-4 px-lg-5 py-4 text-white z-index-footer">
        <Row className="align-items-center justify-content-between align-middle">
          <Col md={2} lg={2} className="text-center">
            <Image
              className="img-fluid"
              src={koibanxImage}
              width={120}
              style={{ height: "50px" }}
              alt="Koibanx Logo"
            ></Image>
          </Col>
          <Col md={4} lg={4} className="text-center">
            <div>
              <a href="https://linktr.ee/koibanxpolicy" target="_blank" rel="noreferrer" className="text-decoration-none">
                <p className="small text-center a-link pt-3 text-decoration-none">
                  Políticas de privacidad
                </p>
              </a>
            </div>
          </Col>
          <Col md={4} lg={4} className="text-center">
            <Link href="/jobs" passHref>
              <Button
                variant="outline-light"
                className="rounded-pill px-4 m-2 fs-8"
              >
                Join our team
              </Button>
            </Link>
            <Button
              variant="outline-light"
              className="rounded-pill px-4 m-2 fs-8"
              href="mailto:info@koibanx.com"
            >
              Contact us
            </Button>
          </Col>
          <Col md="2" className="text-center">
            <p className="text-center align-middle fs-6 pt-3">
              <a href="https://www.linkedin.com/company/koibanx/mycompany/" className="text-white px-1" target="_blank" rel="noreferrer">
                <BsLinkedin style={{ "marginRight": "0.2em" }} />
              </a>
              <a href="https://twitter.com/koibanx" className="text-white px-1" target="_blank" rel="noreferrer">
                <BsTwitter style={{ "marginRight": "0.2em" }} />
              </a>
              <a href="https://www.instagram.com/koibanx/?hl=es" className="text-white px-1" target="_blank" rel="noreferrer">
                <BsInstagram />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
      </section>
    </>
  );
}