import { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Link from 'next/link'
import { BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import JobPostulationForm from 'components/JobPostulationForm'
import { jobService } from 'services'
import { useRouter } from 'next/router'
import { AiOutlineLeft } from 'react-icons/ai'

export default function JobDetail() {
  const router = useRouter()
  const [width, setWidth] = useState(null)
  const isMobile = width <= 768

  useEffect(
    () => {
      if (window !== undefined) {
        setWidth(window.innerWidth)
      }

      window.addEventListener('resize', handleWindowSizeChange)
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange)
      }
    },
    [router.query]
  )

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }

  return (
    <>
      <div>
        <section className="container-fluid h-100 d-flex flex-column align-items-center justify-content-center mt-5 text-white">
          <Row className="container mt-3 pt-4">
            <div>
              <Link href="/jobs">
                <a className="rounded-pill mt-3 fs-8 btn-go-back">
                  <AiOutlineLeft size={14} />
                  <span>back</span>
                </a>
              </Link>
            </div>
          </Row>
          <Row className="container mt-4 pt-3">
            <Col xs={12} sm={12} md={6} lg={6}>
              <Row>
                <h5 className="fw-bold mb-5">Backend Developer</h5>
              </Row>
              <Row>
                <Col xs={6} lg={6}>
                  <h4 className="fs-5 fw-bold">Lugar de trabajo</h4>
                  <p className="job-description">Colombia, Mexico, Argentina</p>
                </Col>
                <Col xs={6} lg={6}>
                  <h4 className="fs-5 fw-bold">Publicado</h4>
                  <p className="job-description">-</p>
                </Col>
                <Col xs={6} lg={6}>
                  <h4 className="fs-5 fw-bold">Área</h4>
                  <p className="job-description">Deployment</p>
                </Col>
                <Col xs={6} lg={6}>
                  <h4 className="fs-5 fw-bold">Work day</h4>
                  <p className="job-description">Fulltime</p>
                </Col>
              </Row>
              <Row className="mt-4">
                <p className="job-description">
                  El equipo de Deployment de Koibanx, tiene como objetivo el
                  diseño y desarrollo de productos basados en tecnología
                  blockchain, para el mundo fintech dentro y fuera de LATAM.
                </p>
                <p className="job-description">
                  Sumandote a Koibanx como Backend Developer vas a ser
                  protagonista de una compañía que está creando historia
                  construyendo los rieles transaccionales sobre blockchain para
                  generar un sistema financiero más accesible, seguro y
                  eficiente, siendo los habilitadores entre el mundo financiero
                  tradicional y el mundo cripto.
                </p>
                <span className="text-primary fw-bold">
                  ¿Con que te vas a encontrar?
                </span>
                <br />
                <p className="job-description">
                  Cada día se va a tratar de desafiarte a vos mismo. Vas a estar
                  en un lugar donde serás escuchado, donde tu opinión SIEMPRE va
                  a ser importante y nos ocuparemos de atender tus necesidades.
                  Vas a empujar las fronteras del conocimiento constantemente,
                  teniendo posibilidades de crecer en un equipo donde
                  encontrarás diversión, compromiso, dinamismo, ambición y
                  compañerismo.
                </p>
                <span className="text-primary fw-bold">Lo que harás</span>
                <br />

                <ul className="job-description">
                  <li>
                    Desarrollo de funcionalidades complejas con excelencia de
                    calidad
                  </li>
                  <li>Definición de flujos y arquitecturas simples</li>
                  <li>
                    Colaborar en las definiciones de arquitectura en un nivel
                    macro
                  </li>
                  <li>
                    Integración a través de distintos protocolos (SFTP, SOAP,
                    etc)
                  </li>
                  <li>
                    Integración con distintos servicios cloud (colas de
                    mensajes, almacenamiento de objetos)
                  </li>
                </ul>

                <p className="job-description">
                  Tecnologías Complementarias:
                  <br />
                  Ethereum blockchain - Algorand blockchain - NodeJs - RabbitMq
                  - MongoDB - Swagger - Microservices Docker
                </p>
                <p className="job-description">
                  Esta descripción no es cerrada y limitante, creemos firmemente
                  en la autonomía, por lo que buscamos personas entusiastas que
                  vean la oportunidad de mejora y sean lo suficientemente
                  proactivos para hacerlo realidad.
                </p>
                <span className="text-primary fw-bold">Lo que buscamos</span>
                <br />
                <ul className="job-description">
                  <li>
                    Estudiante avanzado o recientemente egresado de ingeniería
                    en informática o afines{' '}
                  </li>
                  <li>
                    2 años de experiencia en roles de similar responsabilidad
                  </li>
                  <li>
                    Conocimientos avanzados de bases de datos SQL y NoSQL
                    (MongoDB es un plus)
                  </li>
                  <li>
                    Conocimientos avanzados de REST API y desarrollo de web
                    servers
                  </li>
                  <li>
                    Conocimiento de diferentes herramientas de guardado de datos
                    (cache, object storage, etc)
                  </li>
                  <li>Manejo de asincronismo / paralelismo / concurrencia</li>
                  <li>
                    Conocimiento de buenas prácticas de programación (testing,
                    code review, análisis estático)
                  </li>
                  <li>Inglés avanzado (oral y escrito).</li>
                </ul>
                <span className="text-primary fw-bold">Lo que ofrecemos</span>
                <br />
                <ul className="job-description">
                  <li>
                    Salario competitivo de mercado + esquema de comisiones
                  </li>
                  <li>
                    Oportunidad de trabajar en una startup en crecimiento
                    continuo y trabajar con pioneros del ecosistema crypto.
                  </li>
                  <li>
                    Capacitaciones sobre Blockchain, sistemas financieros,
                    tecnologías y lo que quieras aprender.
                  </li>
                  <li>Clases de Inglés.</li>
                  <li>
                    Esquema híbrido presencial (vas a venir porque te va a
                    gustar, no por obligación)
                  </li>
                  <li>
                    Los días de KoiWork, reconocemos gastos por almuerzo,
                    bebidas & snacks.
                  </li>
                  <li>Reconocimiento de gasto por seguro médico</li>
                  <li>Horario flexible, de verdad.</li>
                  <li>
                    + 5 días Koibanx free adicionales a todas tus licencias.
                  </li>
                  <li>Bono anual </li>
                  <li>
                    Y lo más importante: ser parte de un equipo increíble.{' '}
                  </li>
                </ul>
                <p className="job-description">
                  En Koibanx lideramos la revolución tecnológica de la industria
                  en la región prestando servicios de pagos y tokenización de
                  activos al sector bancario y financiero de Argentina,
                  Colombia, México, El Salvador y Uruguay. A través de nuestra
                  plataforma, la infraestructura de nuestros clientes logra ser
                  más segura, ágil y rentable para pagos, factoring y
                  tokenización de activos para llegar a nuevos segmentos del
                  mercado. Trabajamos construyendo los rieles que posibilitan
                  pagos multi-activos, convirtiendo las tenencias del sistema
                  financiero en líquidas, permitiendo que se realicen pagos
                  mixtos y parciales utilizando criptomonedas, dinero fiat,
                  títulos valores, commodities y puntos de fidelidad.
                </p>
                <p className="job-description">
                  Si queres ser parte, ¡haznoslo saber! people@koibanx.com REF:
                  Backend Developer
                </p>
              </Row>
            </Col>
            {!isMobile && (
              <Col
                lg={6}
                className="d-flex justify-content-end align-items-center section-full position-fixed-job"
              >
                <div className="col align-self-start">
                  <JobPostulationForm
                    job_id={'Sr. Sales Specialist'}
                    position={'Sr. Sales Specialist'}
                  />
                </div>
              </Col>
            )}
          </Row>
        </section>
        <section className="jobs-sections">
          <footer className="footer bg-dark mt-0 fs-7 z-index-footer fixed-bottom top-shadow display-mobile-none">
            <Container className="text-white pt-4 pb-3">
              <Row>
                <Col xs={2} sm={2} md={2} lg={2} className="h-100 pt-3">
                  <span className="link-footer">Privacy Policies</span>
                </Col>
                <Col
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  className="h-100 pt-3 text-center"
                >
                  <span className="link-footer">
                    Terms & Conditions El Salvador
                  </span>
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
                    <a
                      href="https://www.linkedin.com/company/koibanx/mycompany/"
                      className="text-white px-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsLinkedin styles={{ marginRight: '0.2em' }} />
                    </a>
                    <a
                      href="https://twitter.com/koibanx"
                      className="text-white px-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsTwitter styles={{ marginRight: '0.2em' }} />
                    </a>
                    <a
                      href=" https://www.youtube.com/c/Koibanx "
                      className="text-white px-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsYoutube styles={{ marginRight: '0.2em' }} />
                    </a>
                  </p>
                </Col>
              </Row>
            </Container>
          </footer>
          {isMobile && (
            <footer className="bg-dark fs-7 text-white fixed-bottom top-shadow">
              <section className="container-fluid pt-4">
                <Row className="container">
                  <JobPostulationForm />
                </Row>
              </section>
            </footer>
          )}
        </section>
      </div>
    </>
  )
}
