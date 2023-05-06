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
                <h5 className="fw-bold mb-5">UI Designer Jr </h5>
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
                  Sumándote a Koibanx como UI Designer Jr en nuestra sede en
                  Argentina vas a ser parte de una compañía que está haciendo
                  historia construyendo los rieles transaccionales sobre
                  blockchain para un sistema financiero más accesible, seguro y
                  eficiente, siendo los habilitadores entre el mundo financiero
                  tradicional y el mundo cripto.
                </p>
                <p className="job-description">
                  El equipo de Product Design es el responsable de prototipar
                  los productos que resuelven los problemas de los clientes. A
                  través de brainstormings, sketching, documentación de flujos,
                  prototipos interactivos, y trabajo con desarrolladores para
                  realizar los diseños. Desde la idea inicial hasta los
                  wireframes en alta del producto final.
                </p>

                <span className="text-primary fw-bold">Lo que harás: </span>
                <br />

                <ul className="job-description">
                  <li>Mejorar la UI de nuestros productos.</li>
                  <li>
                    Introducir patrones de diseño, aportando a un sistema de
                    diseño más sólido al documentar códigos de diseño
                    reutilizables.
                  </li>
                  <li>
                    Garantizar que las interacciones sean intuitivas y fáciles
                    para los clientes/usuarios.
                  </li>
                  <li>
                    Realizar pruebas en los productos diseñados para evaluar la
                    experiencia de usuario.
                  </li>
                  <li>
                    Analizar los datos de Customer Success para determinar la
                    mejora iterativa de nuestros productos.
                  </li>
                </ul>
                <br />
                <p className="job-description">
                  Buscamos que quien ocupe el rol de UI Designer Jr  tenga un
                  perfil con un gran nivel de proactividad, orientado a
                  resultados, con buenas habilidades de comunicación y trabajo
                  en equipo.
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
                    Portfolio que demuestre sólidas habilidades de diseño visual
                    y evidencie su capacidad para abordar soluciones de
                    experiencia de usuario.
                  </li>
                  <li>Manejo de herramientas de prototipado (Figma).</li>
                  <li>
                    Conocimiento de ambos sistemas operativos (Android y iOS).
                  </li>
                  <li>
                    Buenas habilidades de presentación y comunicación escrita.
                  </li>
                  <li>
                    Capacidad para trabajar de manera efectiva en un entorno
                    colaborativo para crear diseños en alta.
                  </li>
                  <li>Autonomía y proactividad.</li>
                  <li>Inglés avanzado (oral y escrito).</li>
                </ul>
                <span className="text-primary fw-bold">Lo que ofrecemos</span>
                <br />
                <ul className="job-description">
                  <li>Salario competitivo con el mercado</li>
                  <li>
                    Oportunidad de trabajar en un startup en crecimiento
                    continuo y trabajar con pioneros del ecosistema crypto.
                  </li>
                  <li>
                    Capacitaciones sobre Blockchain, sistemas financieros,
                    tecnologías y lo que quieras aprender.
                  </li>
                  <li>Clases de Inglés.</li>
                  <li>
                    Esquema híbrido presencial con reconocimiento de almuerzo,
                    bebidas & snacks.
                  </li>
                  <li>Horario flexible, de verdad.</li>
                  <li>
                    + 5 días Koibanx free adicionales a todas tus licencias.
                  </li>
                  <li>
                    Un bono anual de hasta 3 sueldos por cumplimiento de
                    objetivos propios & de la cía.{' '}
                  </li>
                  <li>
                    Y lo más importante: ser parte de un equipo increíble.
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
                Si queres ser parte, ¡háznoslo saber!  people@koibanx.com REF: UI Designer Jr.
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
