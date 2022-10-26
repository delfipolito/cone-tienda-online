import { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Link from "next/link";
import { BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import Job from "../components/job";

export default function Jobs() {
  return (
    <>
      <container className="text-white">
        <section className="container-fluid h-100 d-flex flex-column align-items-center justify-content-center mt-5">
          <Row className='container mt-5 pt-5'>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Row>
                <h5 className='fw-bold mb-5'>Project Analyst</h5>
              </Row>
              <Row>
                <Col xs={6} lg={6}>
                  <h4 className='fs-5 fw-bold'>Lugar de trabajo</h4>
                  <p className='fs-7 fw-regular'>México - Uruguay - El Salvador</p>
                </Col>
                <Col xs={6} lg={6}>
                  <h4 className='fs-5 fw-bold'>Publicado</h4>
                  <p className='fs-7 fw-regular'>Octubre, 2022</p>
                </Col>
                <Col xs={6} lg={6}>
                  <h4 className='fs-5 fw-bold'>Área</h4>
                  <p className='fs-7 fw-regular'>Marketing</p>
                </Col>
                <Col xs={6} lg={6}>
                  <h4 className='fs-5 fw-bold'>Work day</h4>
                  <p className='fs-7 fw-regular'>Full-Time</p>
                </Col>
              </Row>
              <Row className='mt-4'>
                <p className='fs-7 fw-regular'>
                El equipo de Projects es el encargado de coordinar las tareas de los productos y módulos
                a generar por Producto/Core generando los roadmap correspondientes, registros en JIRA,
                midiendo la eficiencia y logrando proponer mejoras en los procesos.
                <br /><br />Sumándote a Koibanx como Project Analyst en nuestra sede en Ciudad de México, Montevideo o
                El Salvador vas a ser protagonista de una compañía que está creando historia construyendo los
                rieles transaccionales sobre blockchain para generar un sistema financiero más accesible, seguro y
                eficiente, siendo los habilitadores entre el mundo financiero tradicional y el mundo cripto.
                            <br /><br />
                            <span className='text-primary fw-bold'>Lo que harás</span><br />
                            Se espera que puedas realizar la coordinación de equipos de trabajo para llevar adelante proyectos
cumpliendo con el roadmap en tiempo y forma siendo el canal de comunicación entre el cliente y el
equipo IT como así también el punto de contacto en la implementación de proyectos para resolver
inconvenientes.

                            <br /><br />
                            Queremos que puedas generar estimaciones de tiempos y planeamiento sobre nuevos proyectos, el empleo de optimizaciones y automatizaciones en las distintas herramientas utilizadas, así como la búsqueda de la mejora continua son parte de las responsabilidades de la posición.
                            <br /><br />
                            <ul>
                              <li>Gestionar proyectos con metodología Scrum.</li>
                              <li>Generación de diagramas de flujo y Maquetas (XD, Drawio).</li>
                              <li>Generación de informes de proyectos para la gestión de proyectos.</li>
                              <li>Seguimiento de Gantt proyectado vs Real.</li>
                              <li>Experiencia con Excel y funciones básicas (Vlookup, Sumar.Si, Etc), deseable VBA.</li>
                              <li>Generación y gestión de cartera de proyectos en JIRA.</li>
                              <li>Manejo de reuniones con clientes de relevamiento.</li>
                              <li>Gestión de equipos.</li>
                            </ul>
                            <span className='text-primary fw-bold'>Lo que buscamos</span><br />
                            <ul>
                              <li>Experiencia con Python y R para data science.</li>
                              <li>Conocimientos de Finanzas.</li>
                              <li>Conocimientos de Blockchain.</li>
                              <li>Adaptabilidad al cambio.</li>
                            </ul>
                            <span className='text-primary fw-bold'>Lo que ofrecemos</span><br />
                            <ul>
                              <li>Salario competitivo con el mercado.</li>
                              <li>Oportunidad de trabajar en una startup en crecimiento continuo y trabajar con pioneros del ecosistema crypto.</li>
                              <li>Capacitaciones sobre Blockchain, sistemas financieros, tecnologías y lo que quieras aprender.</li>
                              <li>Clases de Inglés.</li>
                              <li>Esquema híbrido presencial (vas a venir porque te va a gustar, no por obligación).</li>
                              <li>Los días de KoiWork, reconocemos gastos por almuerzo, bebidas & snacks.</li>
                              <li>Reconocimiento de gasto por seguro médico.</li>
                              <li>Horario flexible, de verdad.</li>
                              <li>+ 5 días Koibanx free adicionales a todas tus licencias.</li>
                              <li>Un bono anual por cumplimiento de objetivos propios & de la cía.</li>
                              <li>Y lo más importante: ser parte de un equipo increíble.</li>
                            </ul>
                          </p>
              </Row>
            </Col>
            <Col lg={6} className="d-flex justify-content-end align-items-center section-full position-fixed-job display-mobile-none">
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
                      <label class="custom-file-upload">
                          <input type="file"/>
                          Cargar curriculum
                      </label>
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
        </section>
      </container>
      <section className="jobs-sections">
        <footer className="footer bg-dark mt-0 fs-7 z-index-footer fixed-bottom top-shadow display-mobile-none">
            <Container className="text-white pt-4 pb-3">
            <Row>
              <Col xs={2} sm={2} md={2} lg={2} className="h-100 pt-3">
                <span className="link-footer">Privacy Policies</span>
              </Col>
              <Col xs={3} sm={3} md={3} lg={3} className="h-100 pt-3 text-center">
                <span className="link-footer">Terms & Conditions El Salvador</span>
              </Col>
              <Col xs={5} sm={5} md={5} lg={5} className="h-100 text-center">
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
              <Col xs={2} sm={2} md={2} lg={2} className="h-100">
                <p className="text-center align-middle fs-6 pt-3">
                  <a href="https://www.linkedin.com/company/koibanx/mycompany/" className="text-white px-1" target="_blank" rel="noreferrer">
                    <BsLinkedin style={{ "marginRight": "0.2em" }} />
                  </a>
                  <a href="https://twitter.com/koibanx" className="text-white px-1" target="_blank" rel="noreferrer">
                    <BsTwitter style={{ "marginRight": "0.2em" }} />
                  </a>
                  <a href=" https://www.youtube.com/c/Koibanx " className="text-white px-1" target="_blank" rel="noreferrer">
                    <BsYoutube style={{ "marginRight": "0.2em" }}  />
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
        <footer className="bg-dark fs-7 text-white fixed-bottom top-shadow display-mobile-yes">
          <sectian className="container-fluid pt-4">
            <Row className='container'>
              <InputGroup className="mb-3">
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
              <Row>
                <Col xs={6}>
                  <Form.Group controlId="formFile" className="mb-3 fs-7">
                    <label class="custom-file-upload w-100">
                      <input type="file"/>
                      Cargar curriculum
                    </label>
                  <Form.Control
                  className="custom-file-input fs-8"
                  type="file"
                  />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Button variant="outline-primary" type="submit" className="rounded-pill fs-7 btn-orange text-center w-100">
                    Aplicar
                  </Button>
                </Col>
              </Row>
              
            </Row>
          </sectian>
        </footer>
      </section>
    </>
  );
}